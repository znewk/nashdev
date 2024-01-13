import styles from './style.module.css'
import Head from "next/head";
import Header from "../../../../src/components/pm/Header";
import SideBar from "../../../../src/components/pm/orders/SideBar";
import OrdersList from "../../../../src/components/pm/orders/OrdersList";
import api from "../../../../src/api";
import {Dialog} from "primereact/dialog";
import {useEffect, useState} from "react";
import CreateOrderForm from "../../../../src/components/pm/CreateOrderForm";
import MyOrdersList from "../../../../src/components/pm/orders/MyOrdersList";
import ScrollToTop from "../../../../src/components/ScrollToTop";
import { SearchOutlined } from '@ant-design/icons';
import { Flex, Input, Space, Button  } from 'antd';

const myOrders = () => {
    const API = new api()
    const { Search } = Input;

    const [orders, setOrders] = useState([])
    const [requests, setRequests] = useState([])
    const [createOrderShow, setCreateOrderShow] = useState(false)
    const [loadingOrders, setLoadingOrders] = useState(true)

    useEffect(() => {
        const fetchOrders = async () => {

            const allRequests = await API.getRequestsByCreator();
            const allOrders = await API.getAllOrders();
            
            setOrders(allOrders);
            setRequests(allRequests);
            setLoadingOrders(false);


            console.log(requests)
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
            <ScrollToTop/>

            <div className={styles.content}>
                <SideBar changeModalShowState={changeModalShowState}/>

                <div className={styles.orders}>
                    <h1 className='font-bold text-3xl' style={{marginTop: '20px'}}>Мои заказы</h1>
                    <div                         style={{ marginTop: '20px', marginBottom: '20px' }} // Добавление отступа справа
>

                            <Button
                        onClick={() => {
                        }}
                        style={{ marginRight: '10px' }} // Добавление отступа справа

                        >
                        Мои Заказы
                        </Button>
                        <Button
                        onClick={() => {
                        }}
                        style={{ marginRight: '10px' }} // Добавление отступа справа

                        >
                        Откликнулся
                        </Button>

                    </div>


                  <MyOrdersList orders={requests} loadingOrders={loadingOrders} changeModalShowState={changeModalShowState}/>
                </div>
            </div>

            <Dialog visible={createOrderShow} position={'bottom'} style={{ width: '50vw' }} onHide={() => setCreateOrderShow(false)} draggable={false} resizable={false}>
                <CreateOrderForm changeModalShowState={changeModalShowState}/>
            </Dialog>
        </div>
    )
}


export default myOrders;