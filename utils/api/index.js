import axios from "./interceptor";

const Get = async (url) => {
    const response = await axios.get(url);
    return response?.data;
};

const Put = async (url, body = {}) => {
    const response = await axios.put(url, body);
    return response;
};

const Delete = async (url) => {
    const response = await axios.delete(url);
    return response;
};

export {
    Get,
    Put,
    Delete,
};
