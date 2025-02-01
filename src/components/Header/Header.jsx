import { useState } from 'react';

import styles from './Header.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    const [inp, setInp] = useState('');

    // change input
    function changeInpHandler(event) {
        setInp(event.target.value);
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

                <button>
                    {' '}
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </div>
    );
}

export default Header;
