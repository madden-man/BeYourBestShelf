

export const SearchResults = ({ results }) => {

    const addToShelf = (result) => {
        console.log(result);
    }

    return (
        <div className="search__results">
            {results.map(({ volumeInfo: { title }}) =>
            <div className="search__result" key={title}>
                <span>{title.substring(0, 30)}{title.length > 30 && '...'}</span>
                <button onClick={(e) => addToShelf(title)} className="search__plus">+</button>
            </div>)}
        </div>
    )
}