import axios from "axios";

const key = "AIzaSyD3qCi0tWs2k51LHOuyjD2HqqGRGWvMfSs";


export const apiInstance = axios.create({
    baseURL: `https://www.googleapis.com/books/v1/volumes?key=${key}`
})