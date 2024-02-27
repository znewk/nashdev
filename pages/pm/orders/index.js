import styles from './style.module.css'
import Head from "next/head";
import Header from "../../../src/components/pm/Header";
import SideBar from "../../../src/components/SideBar";

import api from "../../../src/api";
import {Dialog} from "primereact/dialog";
import {useState, useEffect} from "react";
import CreateOrderForm from "../../../src/components/pm/CreateOrderForm";
import {TabPanel, TabView} from "primereact/tabview";
import ScrollToTop from "../../../src/components/ScrollToTop";
import { SearchOutlined } from '@ant-design/icons';
import { Flex, Input, Space, Select  } from 'antd';
import OrdersList from '../../../src/components/pm/orders/OrdersList';

const Orders = () => {
    const API = new api()
    const [orders, setOrders] = useState([])

    const [createOrderShow, setCreateOrderShow] = useState(false)
    const [requests, setRequests] = useState([])
    const [loadingOrders, setLoadingOrders] = useState(true)

    const { Search } = Input;

    const options = [
        {
          value: 'категории',
          label: 'Категории',
        },
        {
          value: 'бюджет',
          label: 'Бюджет',
        },
        {
            value: 'стек',
            label: 'Стек',
          },
      ];
      
      useEffect(() => {
        const fetchOrders = async () => {
            // API.getRequestsByCreator()

            const allRequests = await API.getRequestsForPm();
            
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
                    <h1 className='font-bold text-3xl'>Биржа</h1>
                    <Input 
                        addonBefore={<SearchOutlined />} 
                        placeholder="Поиск" 
                        style={{ width: '75%', marginBottom: '20px', marginTop: '20px'}} // Уже существующий отступ снизу
                    />
                        <div style={{marginBottom: '20px'}}> 
                            <Select 
                                defaultValue="Категории" 
                                options={options} 
                                style={{ marginRight: '10px' }} // Добавление отступа справа
                            />
                            <Select 
                                defaultValue="Бюджет" 
                                options={options} 
                                style={{ marginRight: '10px' }} // Добавление отступа справа
                            />
                            <Select 
                                defaultValue="Стек" 
                                options={options} 
                            />
                        </div>
                        <OrdersList orders={requests} changeModalShowState={changeModalShowState}/>
                </div>
            </div>

            <Dialog visible={createOrderShow} position={'bottom'} style={{ width: '50vw' }} onHide={() => setCreateOrderShow(false)} draggable={false} resizable={false}>
                <CreateOrderForm changeModalShowState={changeModalShowState}/>
            </Dialog>
        </div>
    )
}


export default Orders;