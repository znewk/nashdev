import styles from './style.module.css'
import classnames from "classnames";
import {useEffect, useState} from "react";
import OrderCard from "../OrderCard";
import api from "../../../api";
import { TabView, TabPanel } from 'primereact/tabview';
import { Dropdown } from 'primereact/dropdown';
import NoOrder from "../NoOrder";
import Loader from "../../Loader";


const OrdersList = ({changeModalShowState, ...props}) => {

    const API = new api()

    const [orders, setOrders] = useState([])

    const [searchInput, setSearchInput] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [loadingOrders, setLoadingOrders] = useState(true)
    const selectPage = async (idx) => {
        setLoadingOrders(true)

        switch (idx){
            case 1:
            case 2:
            case 3:
            case 4:
                setOrders(await API.getRequestsByCreator())
        }

        setCurrentPage(idx)
        setLoadingOrders(false)
    }

    useEffect(async () => {
        setOrders(await API.getRequestsByCreator())

        setLoadingOrders(false)
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.orders}>
                {
                    loadingOrders ? (<Loader/>) : (
                        orders.length <= 0 ?
                            (
                                <NoOrder changeModalShowState={changeModalShowState}/>
                            )
                            :
                            (
                                orders.map((order) => {return (
                                    <OrderCard order={order}/>
                                )})
                            )
                    )
                }
            </div>
        </div>
    )
}

export default OrdersList;