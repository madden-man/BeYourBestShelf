

export const SearchResults = ({ results }) => {

    const addToShelf = (result) => {
        console.log(result);
    }

    if (!results || results.length === 0) return;

    return (
        <div className="search__results">
            {results.slice(0, 5).map(({ volumeInfo: { title }}) =>
            <div className="search__result" key={title} tabIndex={0}>
                <span>{title.substring(0, 30)}{title.length > 30 && '...'}</span>
            </div>)}
        </div>
    )
}