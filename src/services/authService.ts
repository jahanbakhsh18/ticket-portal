import { apiClient } from "./apiClient";

export const authService = {
    login: (username: string, password: string) =>
        apiClient.post("/Account/Login", {
            Username: username,
            Password: password
        }),

    logout: () =>
        apiClient.get("/Account/Signout"),

    me: () =>
        apiClient.get("/Account/CurrentUser"),

    csrf: () =>
        apiClient.get("/Account/CSRF"),

    refreshCsrfToken: () =>
        apiClient.get("/Account/Login")
};