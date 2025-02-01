import { useState } from 'react';

import books from './Constant/data.js';

import Header from './components/Header/Header.jsx';
import Booklist from './components/BookList/BookList.jsx';

function App() {
    const [favoriteBooksList, setFavoriteBooksList] = useState([]);

    return (
        <>
            <Header />

            <Booklist books={books} />
        </>
    );
}

export default App;
