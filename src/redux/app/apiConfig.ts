const apiConfig = {
  baseURL: "https://api.themoviedb.org/3/",
  apiKey: "5190351156e8482600c01b01c54a3a2d",
  originalImage: (imgPath: string) =>
    `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
