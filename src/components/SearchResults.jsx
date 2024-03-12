

export const SearchResults = ({ results }) => {

    const addToShelf = (result) => {
        console.log(result);
    }

    if (!results || results.length === 0) return;
    console.log(results);

    return (
        <div className="results">
            {results.slice(0, 5).map(({ id, volumeInfo: { title, authors }}) =>
            <div className="results__item" key={id} tabIndex={0}>
                <span>{title.substring(0, 45)}{title.length > 45 && '...'}</span>
                {authors && <span className="results__author">{authors.map((author, index) =>
                    `${author}${index < authors.length - 1 ? ', ' : ''}`)}</span>}
            </div>)}
        </div>
    )
}