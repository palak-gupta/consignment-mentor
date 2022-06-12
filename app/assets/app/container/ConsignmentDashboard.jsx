import React, { useState } from 'react';
import classnames from 'classnames';

import { format } from 'date-fns';
import PaginationCard from 'app/component/PaginationCard';
import TableHeaderCell from 'app/component/TableHeaderCell';
import ActionButton from 'app/component/ActionButton';

import DownloadArrow from 'app/images/download-arrow.svg';
import PlusSign from 'app/images/plus-sign.svg';
import EditAction from 'app/images/edit-action.svg';

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
    const [meta, setMeta] = useState({
        perPage: 5,
        totalCount: 100,
        currentPage: 13,
        sort: {'retailer': 'asc', 'dateOfPlacement': 'desc'}
    })
    const onPageClick = (pageNo) => {
        if(meta.currentPage != pageNo) {
            setMeta(currentMeta => {
                return {
                    ...currentMeta,
                    currentPage: pageNo
                }
        })}
    }

    const sortHandler = (value, sortState) => {
        setMeta(currentMeta => {
            return {
                ...currentMeta,
                [value]: sortState
            }
        })
    }

    return (
        <>
            <div className={styles.consignmentsContainer}>
                <table className={styles.consignmentsTable}>
                    <tbody>
                        <tr key={0}>
                            <TableHeaderCell headerClassName={styles.retailerCell} sortHandler={sortHandler}>Retailer </TableHeaderCell>
                            <TableHeaderCell headerClassName={styles.purchaseCell} className={styles.purchaseHeader} sorting={false}>
                                <span>{'# of Bages'}</span>
                                <span className={styles.rateHeader}>{'@ of sale'}</span>
                            </TableHeaderCell>
                            <TableHeaderCell headerClassName={styles.brandCell}>{'Cement Brand'}</TableHeaderCell>
                            <TableHeaderCell headerClassName={styles.statusCell} sorting={false}>{'Status'}</TableHeaderCell>
                            <TableHeaderCell headerClassName={styles.dateCell}>{'Date of Placement'}</TableHeaderCell>
                        </tr>
                        {Object.entries(consignmentsData).map(([id, data]) => (
                                <tr key={id} className={styles.consignmentContainer}>
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
                                    <div className={styles.dateContainer}>
                                        <span>{format(new Date(data.dateOfPlacement), 'dd MMM, yyyy')}</span>
                                        <span className={styles.editActionCell}>{Boolean(data.status === 0)? <EditAction />: <></>}</span>
                                    </div>
                                </td>
                            </tr>
                    ))}
                </tbody>
                </table>
                <div className={styles.dashboardFooter}>
                    <PaginationCard className={styles.pageHandleContainer} {...meta} onPageClick={onPageClick}/>
                    <div className={styles.actionsContainer}>
                        <ActionButton><DownloadArrow /></ActionButton>
                        <ActionButton><PlusSign /></ActionButton>
                    </div>
                </div>
            </div> 
            
        </>
    )
}

export default ConsignmentDashboard;
