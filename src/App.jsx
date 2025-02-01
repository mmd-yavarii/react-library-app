import { useState } from 'react';

import books from './Constant/data.js';
import styles from './App.module.css';

import Header from './components/Header/Header.jsx';
import Booklist from './components/BookList/BookList.jsx';
import FavoriteList from './components/Favorite/FavoriteList.jsx';

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
                {favoriteBooksList.length ? (
                    <FavoriteList favoriteBooksList={favoriteBooksList} />
                ) : null}

                <Booklist
                    displayBooks={displayBooks}
                    setFavoriteBooksList={setFavoriteBooksList}
                />
            </div>
        </>
    );
}

export default App;
