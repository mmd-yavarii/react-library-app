import styles from './BookCard.module.css';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';

function BookCard({ info, displayBooks, setFavoriteBooksList }) {
    const { image, title, author, language, pages, id } = info;
    const [isLiked, setIsLiked] = useState(false);

    // like and dislike handler
    function likeHandler() {
        setIsLiked((pre) => !pre);
    }

    // add to favorite list
    function updateFavoriteStatus() {
        if (isLiked) {
            setFavoriteBooksList((pre) => pre.filter((i) => i.id != id));
        } else {
            const item = displayBooks.find((item) => item.id == id);
            setFavoriteBooksList((pre) => [...pre, item]);
        }
    }

    return (
        <div className={styles.card}>
            <img src={`../src/assets/${image}`} alt={title} />

            <div className={styles.info}>
                <p>{title}</p>
                <p>{author}</p>
                <div>
                    <p>{language}</p>
                    <p>{pages}</p>
                </div>
            </div>

            <button onClick={updateFavoriteStatus}>
                {isLiked ? (
                    <FontAwesomeIcon
                        icon={faSolidStar}
                        className="star-icon"
                        onClick={likeHandler}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faRegularStar}
                        className="star-icon"
                        onClick={likeHandler}
                        style={{ opacity: 0.4 }}
                    />
                )}
            </button>
        </div>
    );
}

export default BookCard;
