import styles from './BookCard.module.css';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';

function BookCard({ info: { image, title, author, language, pages } }) {
    const [isLiked, setIsLiked] = useState(false);

    // like and dislike handler
    function likeHandler() {
        setIsLiked((pre) => !pre);
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

            <button>
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
                    />
                )}
            </button>
        </div>
    );
}

export default BookCard;
