import { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';

import styles from './BookCard.module.css';

function BookCard({ data: { title, image, author, language, pages } }) {
    const [like, setLike] = useState(false);

    function likeHandler() {
        setLike((pre) => !pre);
    }

    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <div className={styles.info}>
                <h3>{title}</h3>
                <p>{author}</p>
                <div>
                    <span>{language}</span>
                    <span>{pages}</span>
                </div>
            </div>
            <button onClick={likeHandler}>
                <AiFillHeart
                    color={like ? 'red' : '#e0e0e0'}
                    fontSize="1.5rem"
                />
            </button>
        </div>
    );
}

export default BookCard;
