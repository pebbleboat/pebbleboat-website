import { BASE_URL, BLOG_FALLBACK_IMAGE } from "./constants";

export const getBlogCoverImage = (url?: string | null) => {
  const trimmed = url?.trim();
  return trimmed ? trimmed : BLOG_FALLBACK_IMAGE;
};

export const getBlogPostUrl = (slug: string, origin?: string) => {
  const base = (origin ?? BASE_URL).replace(/\/$/, "");
  return `${base}/blogs/${slug}`;
};

export const getBlogShareUrls = ({
  slug,
  title,
  subtitle,
  postUrl: postUrlOverride,
}: {
  slug: string;
  title: string;
  subtitle?: string;
  /** Prefer the live page origin in the browser so LinkedIn gets a reachable HTTPS URL. */
  postUrl?: string;
}) => {
  const postUrl = postUrlOverride ?? getBlogPostUrl(slug);
  const encodedUrl = encodeURIComponent(postUrl);
  const tweetText = encodeURIComponent(
    subtitle?.trim() ? `${title} — ${subtitle.trim()}` : title,
  );

  const linkedInText = [title, subtitle?.trim(), postUrl]
    .filter(Boolean)
    .join("\n\n");

  return {
    linkedIn: `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(linkedInText)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${tweetText}`,
  };
};

export const convertDate = (date: string | Date | undefined) => {
  if (!date) return "";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return "";

  return parsed.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
};
  
  export interface ISectionHeading {
    text: string;
    level: number;
  }

  export const extractSectionHeadings = (
    markdown: string,
  ): ISectionHeading[] => {
    const lines: string[] = String(markdown).split(/\r?\n/);
    let inCode = false;
    const headings: ISectionHeading[] = [];

    const clean = (s: string): string =>
      s
        .replace(/<[^>]+>/g, "")
        .replace(/!\[.*?\]\([^\)]*\)/g, "")
        .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
        .replace(/`+/g, "")
        .replace(/[*_~]/g, "")
        .trim();

    for (const line of lines) {
      const l = line.trim();
      if (/^(```|~~~)/.test(l)) {
        inCode = !inCode;
        continue;
      }
      if (inCode) continue;

      const m = l.match(/^(#{2,6})\s+(.*)$/);
      if (m) {
        headings.push({ text: clean(m[2]), level: m[1].length });
      }
    }

    return headings;
  };
  
  export function headingsToSlug(heading: string | unknown) {
    if (!heading) return "";
    // Convert to string if it's not already (handles React children which can be arrays/nodes)
    const headingStr = typeof heading === "string" ? heading : String(heading);
    return headingStr
      .toLowerCase()
      .replace(/['"]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, ""); 
  }

/** Updates the URL hash without adding a browser history entry. */
export const replaceUrlHash = (slug: string) => {
  if (typeof window === "undefined") return;

  const { pathname, search } = window.location;
  const url = slug
    ? `${pathname}${search}#${encodeURIComponent(slug)}`
    : `${pathname}${search}`;

  window.history.replaceState(window.history.state, "", url);
};