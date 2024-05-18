import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from "../../components/SearchBar";
import { bookDetail, addToShelf } from "../../utils/api";
import { detailsReceived } from "./state/actions";

import './details.css';

export const DetailView = () => {
    const volumeId = useSelector((state) => state.detailsReducer?.volumeId);

    const [details, setDetails] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchDetails() {
            const { data: { id, volumeInfo }} = await bookDetail(volumeId || '');
            setDetails({ id, ...volumeInfo });
            dispatch(detailsReceived({ id, ...volumeInfo }));
        }
        if (volumeId && volumeId !== details?.id) {
            fetchDetails();
        }
    }, [details, volumeId, dispatch]);

    return (
        <div className="details">
            <SearchBar withBackButton />
            <h1>{details?.title}</h1>
            {details?.authors ? <h2>{details.authors.map((author, index) =>
                        `${author}${index < details.authors.length - 1 ? ', ' : ''}`)}</h2> : ''}
            <p dangerouslySetInnerHTML={{__html: details?.description}}></p>
            <button onClick={() => addToShelf(0, details?.id)} className="details__cta">Recommend This!</button>
        </div>
    );
}