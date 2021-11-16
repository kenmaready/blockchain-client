import axios from "./axios.js";

export const registerUser = (name, password) => {
    return axios.post("user", { name, password });
}

export const getBlockchain = () => {
    return axios.get("blockchain");
}