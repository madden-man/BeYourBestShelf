import axios from 'axios';
const API_KEY = 'AIzaSyBoBAc_kzpoN2V0ycAqwVfUTRlU8jHIr1A';

export const bookSearch = async (term) => {
    try {
        const {
            data: {
                items
            }
        } = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${term}&key=${API_KEY}`,
        );

        return items;
    } catch (e) {
        console.log(`failure: ${e}`);
    }
}

export const bookDetail = async (volumeId) => {
    try {
        const data = await axios.get(`https://www.googleapis.com/books/v1/volumes/${volumeId}`);

        return data;
    } catch (e) {
        console.log(`failure: ${e}`);
    }
}