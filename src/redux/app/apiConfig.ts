import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTkwMzUxMTU2ZTg0ODI2MDBjMDFiMDFjNTRhM2EyZCIsIm5iZiI6MTcyNjg2MzM0MS4wMDMzMzYsInN1YiI6IjY2ZTUzYzU2ZmIzOTE0ZTI1NWZkNTQ2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s8Vhjr2TLp3SZmMYbiZYlGdD_khIaSyyX6vNPw7xtwE",
  },
});

export default instance;
