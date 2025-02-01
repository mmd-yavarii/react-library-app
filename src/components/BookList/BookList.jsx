import BookCard from './BookCard.jsx';

function Booklist({ displayBooks, setFavoriteBooksList }) {
    return (
        <div style={{ width: '100%' }}>
            {displayBooks.map((item) => (
                <BookCard
                    key={item.id}
                    info={item}
                    displayBooks={displayBooks}
                    setFavoriteBooksList={setFavoriteBooksList}
                />
            ))}
        </div>
    );
}

export default Booklist;
