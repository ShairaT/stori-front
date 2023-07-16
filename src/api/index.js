import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Define tus funciones para realizar solicitudes HTTP a tu API Flask
export const fetchNewsletters = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await api.get("/newsletters", { headers });
    console.log('response', response.data);
    return response.data;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};

export const createNewsletters = async (data) => {
    try {
      const headers = {
        "Content-Type": "multipart/form-data"
      };
      console.log('data', data);
      const response = await api.post("/newsletters", data, { headers });
      console.log('response', response.data);
      return response;
    } catch (error) {
      console.error("error", error);
      throw error;
    }
  };
