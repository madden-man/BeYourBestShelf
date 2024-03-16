import { Link } from 'react-router-dom';

export const SearchResults = ({ results }) => {

    if (!results || results.length === 0) return;

    return (
        <div className="results">
            {results.slice(0, 5).map(({ id, volumeInfo: { title, authors }}) =>
            <Link to={`/book/${id}`} key={id}>
                <div className="results__item">
                    <span>{title.substring(0, 45)}{title.length > 45 && '...'}</span>
                    {authors && <span className="results__author">{authors.map((author, index) =>
                        `${author}${index < authors.length - 1 ? ', ' : ''}`)}</span>}
                </div>
            </Link>)}
        </div>
    )
}