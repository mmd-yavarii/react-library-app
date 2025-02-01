import { useState } from 'react';

import books from './Constant/data.js';
import styles from './App.module.css';

import Header from './components/Header/Header.jsx';
import Booklist from './components/BookList/BookList.jsx';
import BookCard from './components/BookList/BookCard.jsx';
import FavoriteList from './components/Favorite/FavoriteList.jsx';
import FavoriteCard from './components/Favorite/FavoriteCard.jsx';

function App() {
    const [favoriteBooksList, setFavoriteBooksList] = useState([]);
    const [displayBooks, setDisplayBooks] = useState(books);

    return (
        <>
            <Header
                displayBooks={displayBooks}
                setDisplayBooks={setDisplayBooks}
                books={books}
            />

            <div className={styles.container}>
                {/* show favorite books */}
                {favoriteBooksList.length ? (
                    <FavoriteList favoriteBooksList={favoriteBooksList}>
                        {favoriteBooksList.map((item) => (
                            <FavoriteCard info={item} key={item.id} />
                        ))}
                    </FavoriteList>
                ) : null}

                {/* show all book*/}
                <Booklist>
                    {displayBooks.map((item) => (
                        <BookCard
                            key={item.id}
                            info={item}
                            displayBooks={displayBooks}
                            setFavoriteBooksList={setFavoriteBooksList}
                        />
                    ))}
                </Booklist>
            </div>
        </>
    );
}

export default App;
