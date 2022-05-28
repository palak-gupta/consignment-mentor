import React from 'react';

import UserIcon from 'app/container/UserIcon';

import styles from 'app/container/HomePage.scss';

const HomePage = ({ children }) => {
    return (
        <div className={styles.dashboardContainer}>
            <div>
                <div>Consignment Mentor</div>
                <div>
                    <div>
                        Welcome
                    </div>
                    <div>
                        <UserIcon />
                    </div>
                </div>
            </div>
            <div>{children}</div>
        </div>
    )
} 

export default HomePage;