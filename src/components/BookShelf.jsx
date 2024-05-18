import { useState } from 'react';
import { shelfMap } from './shelfConstants';

import './bookshelf.css';

export const BookShelf = ({ title: shelfTitle, volumeCount, volumes }) => {
    const [activeBook, setActiveBook] = useState({});

    const onShelfHover = (e) => {
        const offsetLeft = document.getElementsByClassName('app')?.[0]?.offsetLeft;
        for (let i = 0; i < 20; ++i) {
            if (volumes?.length > i && e.clientX > (shelfMap[i].leftX + offsetLeft) &&
                e.clientX < (shelfMap[i].rightX + offsetLeft)) {
                setActiveBook({
                    ...volumes[i],
                    ...volumes[i]?.volumeInfo
                });
                const middleOfBook = (shelfMap[i].leftX + shelfMap[i].rightX) / 2;
                const tooltipX = middleOfBook - 85;
                // document.getElementsByClassName('shelf__img')?.[0]?.setAttribute('style', 'cursor: pointer');

                document.getElementsByClassName('shelf__tooltip')?.[0]?.setAttribute('style', `left: ${tooltipX}px`)
            } else {
                // document.getElementsByClassName('shelf__img')?.[0]?.setAttribute('style', 'cursor: auto');
            }
        }
    }

    // TODO: setup a title map

    return (
        <div className="shelf">
            <h1>{shelfTitle}</h1>
            <img
                src={require(`../assets/shelf__${volumeCount}.png`)}
                alt="bookshelf map"
                className="shelf__img"
                onMouseMoveCapture={(e) => onShelfHover(e)}
            />
            {activeBook?.title ?
                <div className="shelf__tooltip">
                    <button
                        className="shelf__tooltip--x"
                        onClick={() => setActiveBook({})}
                    >
                        X
                    </button>
                    <h2>{activeBook.title}</h2>
                    <span>by {activeBook.authors}</span>
                    <a href={activeBook.infoLink}>See More Details!</a>
                </div> : ''}
        </div>
    );
};