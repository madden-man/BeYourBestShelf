import { useDispatch } from 'react-redux';
import { detailsRequested } from '../views/detail/state/actions';

export const SearchResults = ({ results }) => {

    const dispatch = useDispatch();

    if (!results || results.length === 0) return;

    return (
        <div className="results">
            {results.slice(0, 5).map(({ id, volumeInfo: { title, authors }}) =>
                <div className="results__item" key={id} onClick={() => dispatch(detailsRequested(id))}>
                    <span>{title.substring(0, 45)}{title.length > 45 && '...'}</span>
                    {authors && <span className="results__author">{authors.map((author, index) =>
                        `${author}${index < authors.length - 1 ? ', ' : ''}`)}</span>}
                </div>)}
        </div>
    )
}