export const API_CONSTANTS = {
  blogPosts: (page: number) => `/blogs?page=${page}`,
  blogDetails: (slug: string) => `/blogs/${slug}`,
};
