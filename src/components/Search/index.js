import React from 'react';
import styles from './search.css';
import { Link } from 'react-router-dom';

const Search = () => {
    return <div>
        <div className={styles.orange}>
            Search components
        </div>

        <Link to="/">Home</Link>
    </div>
}

export default Search;