import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import { bookDetail, addToShelf } from "../utils/api";

export const DetailView = () => {
    const { volumeId } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        async function fetchDetails() {
            const { data: { id, volumeInfo }} = await bookDetail(volumeId || '');
            console.log(details);
            setDetails({ id, ...volumeInfo });
        }
        if (volumeId && volumeId !== details?.id) {
            fetchDetails();
        }
    }, [details, volumeId]);

    return (
        <div>
            <SearchBar />
            <h1>{details?.title}</h1>
            {details?.authors ? <h2>{details.authors.map((author, index) =>
                        `${author}${index < details.authors.length - 1 ? ', ' : ''}`)}</h2> : ''}
            <p dangerouslySetInnerHTML={{__html: details?.description}}></p>
            <button onClick={() => addToShelf(0, details?.id)}>Add to Favorites!</button>
        </div>
    );
}