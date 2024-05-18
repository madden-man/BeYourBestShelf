import { useEffect, useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { fetchShelves } from '../../utils/api';
import { BookShelf } from '../../components/BookShelf';
import { useDispatch } from 'react-redux';
import { shelvesReceived } from './state/actions';

export const HomeView = () => {
    const [shelves, setShelves] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchShelfData() {
            const shelfData = await fetchShelves();
            setShelves(shelfData);
            dispatch(shelvesReceived(shelfData));
        }

        fetchShelfData();
    }, [dispatch]);

    return (
        <div>
            <SearchBar withBackButton={shelves.length > 0} />
            {shelves?.map((shelf) =>
                <BookShelf key={shelf.id} {...shelf} />
            )}
        </div>
    );
}