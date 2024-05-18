import { useEffect, useState } from "react"
import classNames from "classnames";

import { bookSearch } from '../utils/api';
import { SearchResults } from './SearchResults';

import './search.css';
import { useDispatch } from "react-redux";
import { detailsCleared } from "../views/detail/state/actions";

export const SearchBar = ({ withBackButton }) => {
    const [term, setTerm] = useState('');
    const [resultsOpen, setResultsOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const dispatch = useDispatch();

    const onSearch = async (term) => {
        setTerm(term);
        setSearchResults([]);
        if (term.trim().length) {
            const books = await bookSearch(term.replaceAll(/ /g, '+', setSearchResults));
            setSearchResults(books);
        }
    };

    const closeResults = (event) => {
        if (event.key === 'Escape' || (event.type === 'click' &&
            event.target.classList?.[0] !=='search__input')) {
            setResultsOpen(false);
            setSearchResults([]);
            setTerm('');
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', closeResults, false);
        document.addEventListener('click', closeResults, false);

        return () => {
            document.removeEventListener('keydown', closeResults, false);
            document.removeEventListener('click', closeResults, false);
        }
    }, []);

    return (
        <div className="search">
            <div className="search__bar">
                {withBackButton && <img
                    src={require(`../assets/shelf__black.png`)}
                    alt="bookshelf map"
                    className="search__homelogo"
                    onClick={() => dispatch(detailsCleared())}
                />}
                <div className="search__container">
                    <input
                        type="text"
                        placeholder="Search..."
                        className={classNames('search__input', { 'search__input--active': resultsOpen})}
                        value={term}
                        onChange={(e) => onSearch(e.target.value)}
                        onClick={() => setResultsOpen(true)}
                        />
                    <div className="search__icon"></div>
                </div>
            </div>
            <SearchResults results={searchResults} />
        </div>
    )
}