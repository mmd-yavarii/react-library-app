import { useState } from 'react';

import styles from './Header.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header({ setDisplayBooks, books }) {
    const [inp, setInp] = useState('');

    // change input
    function changeInpHandler(event) {
        setInp(event.target.value);
        !event.target.value.length && setDisplayBooks(books);
    }

    // search handler
    function searchHandler() {
        if (inp.length) {
            setDisplayBooks((pre) =>
                pre.filter((i) =>
                    i.title.toLowerCase().includes(inp.toLowerCase()),
                ),
            );
        }
    }

    return (
        <div className={styles.header}>
            <h1>Books</h1>

            <div className={styles.saerchBar}>
                <input
                    type="text"
                    placeholder="Search title"
                    value={inp}
                    onChange={changeInpHandler}
                />

                <button onClick={searchHandler}>
                    {' '}
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </div>
    );
}

export default Header;
