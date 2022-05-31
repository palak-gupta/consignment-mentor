import React from 'react';

import UserIcon from 'app/component/UserIcon';

import styles from 'app/container/HomePage.scss';
import { Outlet, Link } from 'react-router-dom';

const HomePage = ({children}) => {
    return (
        <>
            <div className={styles.dashboardContainer}>
                <div className={styles.heading}>Consignment Mentor</div>
                <div className={styles.headingContext}>
                    <div className={styles.headingContextGreetings}>
                        Welcome
                    </div>
                    <div className={styles.userIconContainer}>
                        <UserIcon initials={'PG'}/>
                    </div>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
} 

export default HomePage;