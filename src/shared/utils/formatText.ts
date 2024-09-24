export const formatOverview = (overview: string) => {
  const words = overview.split(" ");
  const truncated = words.slice(0, 20).join(" ");
  return truncated;
};
