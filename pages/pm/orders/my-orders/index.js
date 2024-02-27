import styles from './style.module.css'
import Head from "next/head";
import Header from "../../../../src/components/pm/Header";
import SideBar from "../../../../src/components/SideBar";
import OrdersList from "../../../../src/components/pm/orders/OrdersList";
import api from "../../../../src/api";
import {Dialog} from "primereact/dialog";
import {useEffect, useState} from "react";
import CreateOrderForm from "../../../../src/components/pm/CreateOrderForm";
import MyOrdersList from "../../../../src/components/pm/orders/MyOrdersList";
import ScrollToTop from "../../../../src/components/ScrollToTop";
import { SearchOutlined } from '@ant-design/icons';
import { Flex, Input, Space, Button  } from 'antd';
import PmAPI from '../../../../src/api/pm';

const myOrders = () => {
    const API = new PmAPI()
    const { Search } = Input;

    const [orders, setOrders] = useState([])
    const [requests, setRequests] = useState([])
    const [createOrderShow, setCreateOrderShow] = useState(false)
    const [loadingOrders, setLoadingOrders] = useState(true)

    const [user, setUser] = useState('')

    useEffect(() => {
        const fetchOrders = async () => {

            const allOrders = await API.getAllRequests();
            
            setOrders(allOrders);
            setRequests(allOrders);
            setLoadingOrders(false);


            console.log(requests)
        };
        setUser(JSON.parse(localStorage.getItem('user')))
        fetchOrders();
    }, []);

    const changeModalShowState = (state) => {
        setCreateOrderShow(state)
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>NASHDEV - Проекты</title>
            </Head>

            <Header changeModalShowState={changeModalShowState}/>
            <ScrollToTop/>

            <div className={styles.content}>
                <SideBar changeModalShowState={changeModalShowState}/>

                <div className={styles.orders}>
                    <h1 className='font-bold text-3xl' style={{marginTop: '20px'}}>Мои проекты</h1>
                    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                        <Button
                            onClick={() => {
                            }}
                            style={{ marginRight: '10px' }} // Добавление отступа справа
                        >Мои Заказы</Button>

                        <Button
                            onClick={() => {
                            }}
                            style={{ marginRight: '10px' }} // Добавление отступа справа
                        >Откликнулся</Button>

                    </div>


                  <MyOrdersList user={user} orders={requests} loadingOrders={loadingOrders} changeModalShowState={changeModalShowState}/>
                </div>
            </div>

            <Dialog visible={createOrderShow} position={'bottom'} style={{ width: '50vw' }} onHide={() => setCreateOrderShow(false)} draggable={false} resizable={false}>
                <CreateOrderForm changeModalShowState={changeModalShowState}/>
            </Dialog>
        </div>
    )
}


export default myOrders;