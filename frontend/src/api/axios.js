import baseAxios from "axios";

export const axios = baseAxios.create({
  baseURL: "https://royale.kr/api/",
  // baseURL: "http://localhost:8080/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// export default axios;

export const MultipartFileAxios = baseAxios.create({
  baseURL: "https://royale.kr/api/",
  // baseURL: "http://localhost:8080/api/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// export default MultipartFileAxios;
