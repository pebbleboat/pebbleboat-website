import { API_CONSTANTS } from "@/app/apis/apiConstants";
import { getBaseUrl } from "@/app/utils/constants";

function getApiBaseUrl() {
  if (typeof window !== "undefined") {
    return "";
  }
  return getBaseUrl();
}

export const blogPosts = async (page: number) => {
  const baseUrl = getApiBaseUrl();

  try {
    const res = await fetch(`${baseUrl}/api${API_CONSTANTS.blogPosts(page)}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Error fetching blog posts:", res.status);
      return [];
    }

    const json = await res.json();
    return json?.data || [];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};

export const blogDetails = async (slug: string) => {
  const baseUrl = getApiBaseUrl();

  const res = await fetch(`${baseUrl}/api${API_CONSTANTS.blogDetails(slug)}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Blog not found: ${slug}`);
  }

  const json = await res.json();
  return json?.data;
};
