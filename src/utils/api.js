import axios from 'axios';
const API_KEY = 'AIzaSyBoBAc_kzpoN2V0ycAqwVfUTRlU8jHIr1A';

export const setBookState = (volumes) => {
    for (let i = 0; i < volumes.items.length; i++) {
        let item = volumes.items[i];
        // in production code, item.text should have the HTML entities escaped.
        document.getElementById("volumes").innerHTML += "<br>" + item.volumeInfo.title;
      }
    }

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