import styles from './Favorite.module.css';

function FavoriteCard({ info: { image, title } }) {
    return (
        <div className={styles.cards}>
            <img src={`../src/assets/${image}`} />
            <p>{title}</p>
        </div>
    );
}

export default FavoriteCard;
