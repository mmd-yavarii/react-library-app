import styles from './Favorite.module.css';

import FavoriteCard from './FavoriteCard';

function FavoriteList({ favoriteBooksList }) {
    return (
        <div className={styles.container}>
            <h3>Favorites</h3>
            <div>
                {favoriteBooksList.map((item) => (
                    <FavoriteCard info={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default FavoriteList;
