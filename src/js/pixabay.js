const API_KEY = '38809564-8e78081b89f9271c9b7f68ff4';
const BASE_URL = 'https://pixabay.com/api/';

import axios from "axios";


async function searchPhoto(q, page, perPage) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
    const response = await axios.get(url);
    return response.data;
}
export { searchPhoto };