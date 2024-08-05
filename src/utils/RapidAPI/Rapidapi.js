import axios from "axios"

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
	headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

export const fetchdata = async(url) => {
    try {
        console.log("Fetching URL:", `${BASE_URL}/${url}`);
        const {data} = await axios.get(`${BASE_URL}/${url}`, options);
        return data;
    } catch (error) {
        console.log("Error response:", error.response);
        console.log("Error fetching API data: ", error);
        throw error;
    }
}
