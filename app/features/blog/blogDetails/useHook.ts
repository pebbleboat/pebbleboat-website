// app/features/blog/blogDetails/useHook.ts
import {
  extractSectionHeadings,
  getBlogCoverImage,
  headingsToSlug,
} from "@/app/utils/functions";
import { useEffect, useState } from "react";

export interface IBlogDetails {
  title: string;
  subtitle: string;
  description: string;
  coverImage: { url: string };
  publishedAt: string;
  createdAt: string;
  author: string;
  authorImage: { url: string };
}

const useHook = (data: IBlogDetails) => {
  const [activeSlug, setActiveSlug] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const slugs = extractSectionHeadings(data?.description ?? "").map((h) =>
      headingsToSlug(h.text),
    );
    if (!slugs.length) return;

    const updateActive = () => {
      const offset =
        window.innerWidth >= 1024 ? 112 : 96;
      let current = slugs[0];

      for (const slug of slugs) {
        const el = document.getElementById(slug);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = slug;
        }
      }

      setActiveSlug(current);
    };

    const hash = window.location.hash.slice(1);
    if (hash && slugs.includes(hash)) {
      setActiveSlug(hash);
    }

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, [data?.description]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = document.querySelector(".rce-text");
    if (!container) return;

    const addCopyButtons = () => {
      const codeBlocks =
        container.querySelectorAll<HTMLElement>("pre");

      codeBlocks.forEach((pre) => {
        if (pre.parentElement?.classList.contains("code-block-wrapper")) return;

        const wrapper = document.createElement("div");
        wrapper.className = "code-block-wrapper";
        pre.parentNode?.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className =
          "absolute right-3 top-3 z-10 text-[10px] cursor-pointer text-white copy-btn py-1 px-2 rounded bg-gray-600 hover:bg-gray-500";
        btn.innerText = "Copy";

        btn.addEventListener("click", () => {
          const codeEl = pre.querySelector("code");
          const codeText = codeEl?.innerText ?? pre.innerText;

          navigator.clipboard.writeText(codeText).then(() => {
            btn.innerText = "Copied ✅";
            setTimeout(() => (btn.innerText = "Copy"), 2000);
          });
        });

        wrapper.appendChild(btn);
      });
    };

    addCopyButtons();

    const observer = new MutationObserver(addCopyButtons);
    observer.observe(container, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);
  return {
    activeSlug,
    blogDetails: {
      title: data?.title,
      subtitle: data?.subtitle,
      description: data?.description,
      image: getBlogCoverImage(data?.coverImage?.url),
      date: data?.publishedAt ?? data?.createdAt,
      author: data?.author,
      authorImage: data?.authorImage?.url ?? "",
    },
  };
};

export default useHook;
