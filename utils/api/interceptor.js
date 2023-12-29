// import React from "react";
// import htmlParser from "html-react-parser";
import axios from "axios";

const serverAddress = () => {
    return "https://fakestoreapi.com/";
};

const instance = axios.create();

instance.defaults.baseURL = serverAddress();
instance.interceptors.response.use(
    function (response) {
        return response;
    },
);

export default instance;
