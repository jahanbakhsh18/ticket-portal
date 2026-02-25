import axios from "axios";

function getCookie(name: string) {
  const value = document.cookie.match(
    '(^|;)\\s*' + name + '\\s*=\\s*([^;]+)'
  );
  return value ? value.pop() : '';
}

export const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true
});

apiClient.interceptors.request.use(config => {
  const token = getCookie("CSRF-TOKEN");

  if (token) {
    config.headers["X-CSRF-TOKEN"] = token;
  }

  return config;
});