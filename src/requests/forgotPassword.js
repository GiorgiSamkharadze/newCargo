export function forgotPassword(axios, data) {
    return axios.post(`/client/forgot_password`, data);
}
