import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={styles.navigationContainer}>
            <ul className={styles.navigationList}>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/albums">Albums</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation