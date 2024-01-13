import styles from './style.module.css'
import classnames from "classnames";
import {useEffect, useState} from "react";
import OrderCard from "../OrderCard";
import api from "../../../../api";
import { TabView, TabPanel } from 'primereact/tabview';
import { Dropdown } from 'primereact/dropdown';
import NoOrder from "../NoOrder";
import Loader from "../../../Loader";


const OrdersList = ({ orders, changeModalShowState, loadingOrders, ...props}) => {

const API = new api()


const [searchInput, setSearchInput] = useState('')
const [currentPage, setCurrentPage] = useState(1)
const selectPage = async (idx) => {
    setLoadingOrders(true)

    switch (idx){
        case 1:
        case 2:
        case 3:
        case 4:
            setOrders(await API.getRequestsForPm())
    }

    setCurrentPage(idx)
    setLoadingOrders(false)
}

// useEffect(async () => {
//     setOrders(await API.getAllOrders())

//     setLoadingOrders(false)
// }, []);

return (
    <div className={styles.container}>
        <div className={styles.orders}>
            {
                loadingOrders ? (<Loader/>) : (
                    (!orders || orders.length <= 0) ? // Условная проверка
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



