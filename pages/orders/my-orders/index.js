import styles from './style.module.css'
import Head from "next/head";
import Header from "../../../src/components/Header";
import SideBar from "../../../src/components/orders/SideBar";
import OrdersList from "../../../src/components/orders/OrdersList";
import api from "../../../src/api";
import {Dialog} from "primereact/dialog";
import {useEffect, useState} from "react";
import CreateOrderForm from "../../../src/components/Modals/CreateOrderForm";
import MyOrdersList from "../../../src/components/orders/MyOrdersList";

const myOrders = () => {
    const API = new api()

    const [orders, setOrders] = useState([])
    const [createOrderShow, setCreateOrderShow] = useState(false)
    const [loadingOrders, setLoadingOrders] = useState(true)

    useEffect(() => {
        const fetchOrders = async () => {
            const allOrders = await API.getAllOrders();
            setOrders(allOrders);
            setLoadingOrders(false);
        };
    
        fetchOrders();
    }, []);

    const changeModalShowState = (state) => {
        setCreateOrderShow(state)
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>NASHDEV - Заказы</title>
            </Head>

            <Header changeModalShowState={changeModalShowState}/>

            <div className={styles.content}>
                <SideBar changeModalShowState={changeModalShowState}/>

                <div className={styles.orders}>
                    <h1>Мои заказы</h1>
                    <MyOrdersList orders={orders} loadingOrders={loadingOrders} changeModalShowState={changeModalShowState}/>
                </div>
            </div>

            <Dialog visible={createOrderShow} position={'bottom'} style={{ width: '50vw' }} onHide={() => setCreateOrderShow(false)} draggable={false} resizable={false}>
                <CreateOrderForm changeModalShowState={changeModalShowState}/>
            </Dialog>
        </div>
    )
}


export default myOrders;