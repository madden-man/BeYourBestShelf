import { SearchBar } from '../components/SearchBar';

export const HomeView = () => {

    const shelves = [];

    return (
        <div>

            <SearchBar />
            {shelves.map((shelf) =>
                <div id="volumes">
                    {shelf}
                </div>
            )}
        </div>
    );
}