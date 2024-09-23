export const getImageUrl = (path?: string, size: string = "w500"): string => {
  return `https://image.tmdb.org/t/p/${size}${path && path}`;
};
