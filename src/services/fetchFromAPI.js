import axios from "axios";

const BASE_URL = 'https://cs-nau.herokuapp.com/api';

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`);

    return data;
}