export function clientLogin(axios, data) {
    return axios.post("/auth/client/login", data);
}
