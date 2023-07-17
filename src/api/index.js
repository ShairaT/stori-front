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
    return response.data;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};

export const createNewsletters = async (data) => {
  try {
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    console.log("data", data);
    const response = await api.post("/newsletters", data, { headers });
    return response;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};

export const createArticle = async (data) => {
  try {
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    console.log("data", data);
    const response = await api.post("/articles", data, { headers });
    return response;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};

export const sendArticle = async (article_id) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    const path = "/articles/" + article_id + "/send";
    const response = await api.post(path, {}, { headers });
    return response;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};

export const subscribeEmail = async (newsletter_id, email) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    const path = "/newsletters/" + newsletter_id + "/subscribe";
    const response = await api.post(path, { email }, { headers });
    return response;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};

export const login = async (data) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    const response = await api.post('/login', data, { headers });
    localStorage.setItem("userData", JSON.stringify(response.data));
    return response;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};
