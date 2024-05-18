import axios from 'axios';
const API_KEY = 'AIzaSyBoBAc_kzpoN2V0ycAqwVfUTRlU8jHIr1A';
const USER_KEY = '103259360830607156271';
// const CLIENT_ID = '432843540277-eebdvk3dgojha7hj2mpf5omqc4jrcdi6.apps.googleusercontent.com';
// const CLIENT_SECRET = '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';


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
        const data = await axios.get(`https://www.googleapis.com/books/v1/volumes/${volumeId}?key=${API_KEY}`);

        return data;
    } catch (e) {
        console.log(`failure: ${e}`);
    }
}

export const fetchVolumesFromShelf = async (shelfId) => {
    try {
        const { data: { items }} = await axios.get(`https://www.googleapis.com/books/v1/users/${USER_KEY}/bookshelves/${shelfId}/volumes?key=${API_KEY}`);
        console.log(items);
        return items;
    } catch (e) { 
        console.log(`failure: ${e}`);
    }
}

export const fetchShelves = async () => {
    try {
        const { data: { items }} = await axios.get(`https://www.googleapis.com/books/v1/users/${USER_KEY}/bookshelves?key=${API_KEY}`);
        const shelfWithVolumes = [];
        
        for (let i = 0; i < items.length; ++i) {
            const volumes = await fetchVolumesFromShelf(items[i].id);
            shelfWithVolumes.push({
                ...items[i],
                volumes,
            });
        }
        return shelfWithVolumes;
    } catch (e) { 
        console.log(`failure: ${e}`);
    }
}

export const addToShelf = async (shelfId, volumeId) => {
    try {
        const data = await axios.get(`https://www.googleapis.com/books/v1/mylibrary/bookshelves/${shelfId}/addVolume?volumeId=${volumeId}&key=${API_KEY}`, {
            /* authorization token */
        });

        return data;
    } catch (e) { 
        console.log(`failure: ${e}`);
    }
}