import BookCard from './BookCard.jsx';

function Booklist({ books }) {
    return (
        <div>
            {books.map((item) => (
                <BookCard key={item.id} info={item} />
            ))}
        </div>
    );
}

export default Booklist;
