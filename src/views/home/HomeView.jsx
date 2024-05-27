import { useEffect, useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { fetchShelves } from '../../utils/api';
import { BookShelf } from '../../components/BookShelf';
import { Switch } from '../../components/Switch';
import { useDispatch } from 'react-redux';
import { shelvesReceived } from './state/actions';

export const HomeView = () => {
    const [shelves, setShelves] = useState([]);
    const [fancyView, setFancyView] = useState(true);

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
            <SearchBar />
            {(window.outerWidth > 500 && shelves.length > 0) ?
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '500px'}}>
                    <h1 style={{marginBottom: '0'}}>Shelves</h1>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                    <h3 style={{marginRight: '8px', marginBottom: '0'}}>Fancy View </h3>
                    <Switch
                        isOn={fancyView}
                        onColor="#319ca8"
                        handleToggle={() => setFancyView(!fancyView)}
                    />
                </div>
            </div> : <div />}
            <hr />
            {shelves?.map((shelf) =>
                <BookShelf key={shelf.id} fancyView={fancyView} {...shelf} />
            )}
        </div>
    );
}