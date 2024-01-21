import styles from './id.module.css'
import Head from "next/head";
import Header from "../../../../src/components/pm/Header";
import SideBar from "../../../../src/components/pm/orders/SideBar";
import OrdersList from "../../../../src/components/pm/orders/OrdersList";
import api from "../../../../src/api";
import {Dialog} from "primereact/dialog";
import {useEffect, useState} from "react";
import CreateOrderForm from "../../../../src/components/Modals/CreateOrderForm";
import MyOrdersList from "../../../../src/components/pm/orders/MyOrdersList";
import {useRouter} from 'next/router'
import MyOrderBlock from "../../../../src/components/pm/orders/MyOrderBlock";


const Order = () => {
    const {query} = useRouter()
    const router = useRouter()


    const [createOrderShow, setCreateOrderShow] = useState(false)

    const changeModalShowState = (state) => {
        setCreateOrderShow(state)
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>NASHDEV - Заказ №{query.id}</title>
            </Head>

            <Header changeModalShowState={changeModalShowState}/>

            <div className={styles.content}>
                <SideBar changeModalShowState={changeModalShowState}/>

                <div className={styles.order}>
                    <div className={styles.toper}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.goback} onClick={() => {
                            router
                            .back()
                        }}>
                            <path d="M20.4367 11.1094H6.72337L14.9312 3.98438C15.0624 3.86953 14.9827 3.65625 14.8093 3.65625H12.7351C12.6437 3.65625 12.557 3.68906 12.489 3.74766L3.63196 11.4328C3.55084 11.5031 3.48579 11.5901 3.4412 11.6877C3.39661 11.7854 3.37354 11.8915 3.37354 11.9988C3.37354 12.1062 3.39661 12.2123 3.4412 12.3099C3.48579 12.4076 3.55084 12.4945 3.63196 12.5648L12.5406 20.2969C12.5757 20.3273 12.6179 20.3438 12.6624 20.3438H14.807C14.9804 20.3438 15.0601 20.1281 14.9288 20.0156L6.72337 12.8906H20.4367C20.5398 12.8906 20.6242 12.8062 20.6242 12.7031V11.2969C20.6242 11.1937 20.5398 11.1094 20.4367 11.1094Z" fill="black" fill-opacity="0.45"/>
                        </svg>
                    </div>

                    <MyOrderBlock id={query.id}/>
                </div>
            </div>

            <Dialog visible={createOrderShow} position={'bottom'} style={{ width: '50vw' }} onHide={() => setCreateOrderShow(false)} draggable={false} resizable={false}>
                <CreateOrderForm changeModalShowState={changeModalShowState}/>
            </Dialog>
        </div>
    )
}


export default Order;