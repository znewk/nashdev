import styles from './style.module.css'
import Head from "next/head";
import Header from "../../src/components/customer/Header";
import SideBar from "../../src/components/customer/orders/SideBar";
import OrdersList from "../../src/components/customer/orders/OrdersList";
import api from "../../src/api";
import {Dialog} from "primereact/dialog";
import {useState} from "react";
import CreateOrderForm from "../../src/components/Modals/CreateOrderForm";
import {TabPanel, TabView} from "primereact/tabview";
import ScrollToTop from "../../src/components/ScrollToTop";

const Orders = () => {
    const [createOrderShow, setCreateOrderShow] = useState(false)

    const [searchInput, setSearchInput] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

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
                    <h1>Биржа</h1>
                    <TabView>
                        <TabPanel header="Все заказы" style={{fontFamily: "Raleway Regular"}} onClick={()=>{selectPage(1)}}/>
                        <TabPanel header="Поиск Project Manager"  style={{fontFamily: "Raleway Regular"}} onClick={()=>{selectPage(2)}}/>
                        <TabPanel header="Подбор команды"  style={{fontFamily: "Raleway Regular"}} onClick={()=>{selectPage(3)}}/>
                        <TabPanel header="Утверждение зарплаты"  style={{fontFamily: "Raleway Regular"}} onClick={()=>{selectPage(4)}}/>
                        <TabPanel header="В работе"  style={{fontFamily: "Raleway Regular"}} onClick={()=>{selectPage(5)}}/>
                    </TabView>

                    <div className={styles.filters}>
                        <select name="" id="" className={styles.select}>
                            <option value="Недавние">Недавние</option>
                        </select>

                        <div className={styles.inputBody}>
                            <svg className={styles.searchSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M13.9987 13.9987L11.008 11.0027M12.6654 6.9987C12.6654 8.50159 12.0683 9.94293 11.0056 11.0056C9.94293 12.0683 8.50159 12.6654 6.9987 12.6654C5.4958 12.6654 4.05447 12.0683 2.99176 11.0056C1.92905 9.94293 1.33203 8.50159 1.33203 6.9987C1.33203 5.4958 1.92905 4.05447 2.99176 2.99176C4.05447 1.92905 5.4958 1.33203 6.9987 1.33203C8.50159 1.33203 9.94293 1.92905 11.0056 2.99176C12.0683 4.05447 12.6654 5.4958 12.6654 6.9987V6.9987Z" stroke="#8D8D8D" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                            <input type="email" placeholder={'Поиск заказов'} className={styles.input} value={searchInput} onChange={(e) => {setSearchInput(e.target.value);}}/>
                        </div>
                    </div>
                    {/* <OrdersList changeModalShowState={changeModalShowState}/> */}
                </div>
            </div>

            <Dialog visible={createOrderShow} position={'bottom'} style={{ width: '50vw' }} onHide={() => setCreateOrderShow(false)} draggable={false} resizable={false}>
                <CreateOrderForm changeModalShowState={changeModalShowState}/>
            </Dialog>
        </div>
    )
}


export default Orders;