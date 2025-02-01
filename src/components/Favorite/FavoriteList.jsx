import styles from './Favorite.module.css';

function FavoriteList({ children }) {
    return (
        <div className={styles.container}>
            <h3>Favorites</h3>
            <div>{children}</div>
        </div>
    );
}

export default FavoriteList;
