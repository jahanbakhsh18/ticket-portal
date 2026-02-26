import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

export const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  timeout: 10000
});

/*function getCookie(name: string) {
  const value = document.cookie.match(
    '(^|;)\\s*' + name + '\\s*=\\s*([^;]+)'
  );
  return value ? value.pop() : '';
}*/

export function getCsrfToken(): string | null {

    const match = document.cookie.match(/CSRF-TOKEN=([^;]+)/);

    return match ? decodeURIComponent(match[1]) : null;
}

apiClient.interceptors.request.use(config => {

    const token = getCsrfToken();
    //const token = getCookie("CSRF-TOKEN");

    if (token)
        config.headers["X-CSRF-TOKEN"] = token;

    return config;
});

export function getErrorMessage(error: any): [string, string] {

  // Server unreachable
  if (!error.response)
    return ["Network", "Cannot connect to the server"];

  // Serenity error
  if (error.response?.data?.Error?.Message)
    return [error.response.data.Error.Code, error.response.data.Error.Message];

  // HTTP error
  if (error.response?.status)
    return ["HTTP", `Server error (${error.response.status})`];

  return ["Unexpected", error.message || "Unexpected error"];
}

apiClient.interceptors.response.use(
  response => response,

  (error: AxiosError) => {
    const [type, message] = getErrorMessage(error);

    toast.error(message);

    return Promise.reject({
      type: type,
      message: message
    });
  }
);