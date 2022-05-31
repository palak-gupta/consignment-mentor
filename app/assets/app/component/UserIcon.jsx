import React from 'react';
import styles from 'app/component/UserIcon.scss';

const UserIcon = ({initials}) => {
    return (
        <div className={styles.iconContainer}>
            <div className={styles.iconInitial}>{initials}</div>
        </div>
    )
}

export default UserIcon;
