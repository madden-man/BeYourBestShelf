import { useState } from "react";

import './search.css';

export const SearchBar = () => {
    const [term, setTerm] = useState('');

    return (
        <div className="search">
            <span>Find A Book: </span>
            <input type="text" className="search__bar" value={term} onKeyDown={(e) => setTerm(e.value)} />
        </div>
    )
}