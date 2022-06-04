import React from 'react';
import classnames from 'classnames';

import { format } from 'date-fns';

import styles from 'app/container/ConsignmentDashboard.scss';

const ConsignmentDashboard = () => {
    const consignmentsData = {
        '1': {
            'id': '1',
            'retailer': {
                'id': 1,
                'name': 'Ambe Materials',
                'phoneNumber': '9566191975'
            },
            quantity: 5000,
            rate: 2.5,
            brand: 'Ultra Tech',
            status: 1,
            dateOfPlacement: '01/06/2022'
        },
        '2': {
            'id': '2',
            'retailer': {
                'id': 1,
                'name': 'Ambe Materials',
                'phoneNumber': '9566191975'
            },
            quantity: 5000,
            rate: 2.5,
            brand: 'Ultra Tech',
            status: 0,
            dateOfPlacement: '01/06/2022'
        },
        '3': {
            'id': '3',
            'retailer': {
                'id': 1,
                'name': 'Ambe Materials',
                'phoneNumber': '9566191975'
            },
            quantity: 5000,
            rate: 2.5,
            brand: 'Ultra Tech',
            status: 0,
            dateOfPlacement: '01/06/2022'
        },
        '4': {
            'id': '4',
            'retailer': {
                'id': 1,
                'name': 'Ambe Materials',
                'phoneNumber': '9566191975'
            },
            quantity: 5000,
            rate: 2.5,
            brand: 'Ultra Tech',
            status: 1,
            dateOfPlacement: '01/06/2022'
        },
        '5': {
            'id': '5',
            'retailer': {
                'id': 1,
                'name': 'Ambe Materials',
                'phoneNumber': '9566191975'
            },
            quantity: 5000,
            rate: 2.5,
            brand: 'Ultra Tech',
            status: 1,
            dateOfPlacement: '01/06/2022'
        }
    }
    return (
        <div className={styles.consignmentsContainer}>
            <table className={styles.consignmentsTable}>
                <tbody>
                    <tr>
                        <th className={styles.retailerCell}>Retailer</th>
                        <th className={styles.purchaseCell}><div className={styles.purchaseHeader}><span>{'# of Bages'}</span><span className={styles.rateHeader}>{'@ of sale'}</span></div></th>
                        <th className={styles.brandCell}>{'Cement Brand'}</th>
                        <th className={styles.statusCell}>{'Status'}</th>
                        <th className={styles.dateCell}>{'Date of Placement'}</th>
                    </tr>
                    {Object.entries(consignmentsData).map(([id, data]) => (
                    <>
                        <tr className={styles.consignmentContainer}>
                            <td className={styles.retailerCell}>
                                <div className={styles.retailer}>
                                    <span className={styles.retailerName}>{data.retailer.name}</span>
                                    <span className={styles.retailerNumber}>{data.retailer.phoneNumber}</span>
                                </div>
                            </td>
                            <td className={styles.purchaseCell}>
                                <div className={styles.purchase}>
                                    <span className={styles.purchaseQuantity}>{`${data.quantity} Bags`}</span>
                                    <span className={styles.purchaseRate}>{`@ ${data.rate}%`}</span>
                                </div>
                            </td>
                            <td className={styles.brandCell}>{data.brand}</td>
                            <td className={styles.statusCell}>
                                <div className={classnames(styles.status, data.status? styles.statusConfirmed: styles.statusOnHold)}>{data.status? 'Confirmed': 'On Hold'}</div>
                            </td>
                            <td className={styles.dateCell}>
                                {format(new Date(data.dateOfPlacement), 'dd MMM, yyyy')}
                            </td>
                        </tr>
                    </>
                ))}
            </tbody>
            </table>
        </div> 
    )
}

export default ConsignmentDashboard;
