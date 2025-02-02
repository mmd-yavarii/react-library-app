import { books } from '../constants/mockData.js';
import BookCard from './BookCard.jsx';

function Books(props) {
    return (
        <div>
            {/* books */}
            <div>
                {books.map((item) => (
                    <BookCard key={item.id} data={item} />
                ))}
            </div>

            {/* favorites */}
            <div></div>
        </div>
    );
}

export default Books;
