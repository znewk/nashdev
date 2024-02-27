import styles from './style.module.css'
import Head from "next/head";
import Header from "../../../src/components/customer/Header";
import SideBar from "../../../src/components/SideBar";
import OrdersList from "../../../src/components/orders/OrdersList";
import api from "../../../src/api";
import {Dialog} from "primereact/dialog";
import {useState} from "react";
import CreateOrderForm from "../../../src/components/customer/CreateOrderForm";
import {TabPanel, TabView} from "primereact/tabview";
import ScrollToTop from "../../../src/components/ScrollToTop";
import NoCardList from '../../../src/components/customer/cards/NoCardList';
import FaqComponent from '../../../src/components/faq';

const Faq = () => {
    const [createOrderShow, setCreateOrderShow] = useState(false)

    const [searchInput, setSearchInput] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    const changeModalShowState = (state) => {
        setCreateOrderShow(state)
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>FAQ</title>
            </Head>

            <Header changeModalShowState={changeModalShowState}/>
            <ScrollToTop/>


            <div className={styles.content}>
                <SideBar changeModalShowState={changeModalShowState}/>
                <div className={styles.orders}>
                <h1 className='font-bold text-3xl'> Часто задаваемые вопросы</h1>
                <div  style={{ marginTop: '30px', marginBottom: '20px' }} >
                <FaqComponent/>
                </div>

                </div>
            </div>

            <Dialog visible={createOrderShow} position={'bottom'} style={{ width: '50vw' }} onHide={() => setCreateOrderShow(false)} draggable={false} resizable={false}>
                <CreateOrderForm changeModalShowState={changeModalShowState}/>
            </Dialog>
        </div>
    )
}


export default Faq;