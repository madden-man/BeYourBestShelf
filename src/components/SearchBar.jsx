import { useState } from "react"
import { bookSearch } from '../utils/api';

import { SearchResults } from './SearchResults';

import './search.css';

export const SearchBar = () => {
    const [term, setTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const onSearch = async (term) => {
        setTerm(term);
        if (term.length) {
            const books = await bookSearch(term.replaceAll(/ /g, '+', setSearchResults));
            setSearchResults(books);
        } else {
            setSearchResults([]);
        }
    };

    return (
        <div className="search">
            <div className="search__bar">
                <div className="search__container">
                    <input type="text" placeholder="Search..." className="search__input" value={term} onChange={(e) => onSearch(e.target.value)} />
                    <div className="search__icon"></div>
                </div>
            </div>
            <SearchResults results={searchResults} />
        </div>
    )
}