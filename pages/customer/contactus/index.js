import styles from './style.module.css'
import Head from "next/head";
import Header from "../../../src/components/customer/Header";
import SideBar from "../../../src/components/customer/orders/SideBar";
import OrdersList from "../../../src/components/orders/OrdersList";
import api from "../../../src/api";
import {Dialog} from "primereact/dialog";
import {useState} from "react";
import CreateOrderForm from "../../../src/components/customer/CreateOrderForm";
import {TabPanel, TabView} from "primereact/tabview";
import ScrollToTop from "../../../src/components/ScrollToTop";
import { Button } from 'antd';
import { TelegramOutlined,  CustomerServiceOutlined } from '@ant-design/icons';
import Link from "next/link";

const ContactUs = () => {
    const [createOrderShow, setCreateOrderShow] = useState(false)

    const [searchInput, setSearchInput] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    const changeModalShowState = (state) => {
        setCreateOrderShow(state)
    }
    return (
        <div className={styles.container}>
            <Head>
                <title></title>
            </Head>

            <Header changeModalShowState={changeModalShowState}/>
            <ScrollToTop/>


            <div className={styles.content}>
                <SideBar changeModalShowState={changeModalShowState}/>
                <div className={styles.orders}>
                <h1 className='font-bold text-3xl'> Поддержка</h1>
                <div  style={{ marginTop: '30px', marginBottom: '20px' }} >
                </div>
                    <p style={{fontWeight: 'bold', fontSize: '18px',}}> Вступайте в нашу Telegram группу  </p>
                    <p>            
                        <Button style={{ fontSize: '16px', marginTop: '15px' }}> Присоединиться к Telegram сообществу </Button>
                    
                    </p>

                    <p style={{fontWeight: 'bold', fontSize: '18px', marginTop: '30px'}}> Нужная помощь? Свяжитесь с нашей командой поддержки  </p>
                    <p>     
                        <Button icon={<CustomerServiceOutlined />}  style={{fontSize: '16px', marginTop: '15px'}}>Связаться с нами</Button>
                    
                    </p>

                    <p style={{fontWeight: 'bold', fontSize: '18px', marginTop: '30px'}}> Прочитать часто задаваемые опросы, чтобы узнать подробнее о NashDev  </p>
                    <p>
                    <Button style={{ fontSize: '16px', marginTop: '15px' }}>
                        <Link href="faq">
                        <a>Прочитать FAQ</a>
                        </Link>
                    </Button>
                    </p>

                </div>
            </div>

            <Dialog visible={createOrderShow} position={'bottom'} style={{ width: '50vw' }} onHide={() => setCreateOrderShow(false)} draggable={false} resizable={false}>
                <CreateOrderForm changeModalShowState={changeModalShowState}/>
            </Dialog>
        </div>
    )
}


export default ContactUs;