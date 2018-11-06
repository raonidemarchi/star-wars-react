import React from 'react';
import styles from './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return <div>
        Home component
        
        <div>
            <Link to="/search">Go search</Link>
        </div>
    </div>
}

export default Home;