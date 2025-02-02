import { useState } from 'react';

import { books as bookData } from '../constants/mockData.js';
import BookCard from './BookCard.jsx';
import SideCard from './SideCard.jsx';

import styles from './Books.module.css';
import SearchBox from './Searchbox.jsx';

function Books(props) {
    const [books, setBooks] = useState(bookData);
    const [liked, setLiked] = useState([]);
    const [search, setSearch] = useState('');

    function handlerLikedList(book, status) {
        if (status) {
            const newLiked = liked.filter((i) => i.id != book.id);
            setLiked(newLiked);
            return;
        }
        setLiked((pre) => [...pre, book]);
    }

    function searchHandler() {
        if (search) {
            const newBooks = bookData.filter((book) =>
                book.title.toLowerCase().includes(search),
            );
            setBooks(newBooks);
            return;
        }
        setBooks(bookData);
    }

    return (
        <>
            <SearchBox
                search={search}
                setSearch={setSearch}
                searchHandler={searchHandler}
            />

            <div className={styles.container}>
                {/* books */}
                <div className={styles.cards}>
                    {books.map((item) => (
                        <BookCard
                            key={item.id}
                            data={item}
                            handlerLikedList={handlerLikedList}
                        />
                    ))}
                </div>

                {/* favorites */}

                {!!liked.length && (
                    <div className={styles.favorite}>
                        <h4>Favorite</h4>
                        {liked.map((i) => (
                            <SideCard key={i.id} data={i} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default Books;
