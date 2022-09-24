import axios from "axios";
import { baseUrl } from "./baseUrl";

export const AddUserApi = (data) => {
    return axios.post(`${baseUrl}/add-user`,data);
}

export const LoginUser = (data) => {
    return axios.post(`${baseUrl}/login`,data);
}
