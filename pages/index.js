import Head from "next/head";
import styles from "./main.module.css"
import {useEffect, useState} from "react";
import axios from 'axios'
import HeaderMain from "../src/components/HeaderMain";
import Auth from "../src/components/Modals/Auth";
import CreateOrderFormNoReg from "../src/components/Modals/CreateOrderFormNoReg";
import {Dialog} from "primereact/dialog";
import ResetPasswordDialog from "../src/components/Modals/ResetPassword";

const Index = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [createOrderShow, setCreateOrderShow] = useState(false);
    const [isResetPasswordVisible, setIsResetPasswordVisible] = useState(false);

    const changeModalShowState = (isAuthVisible, isCreateOrderVisible, isResetPasswordVisible = false) => {
        setIsModalVisible(isAuthVisible);
        setCreateOrderShow(isCreateOrderVisible);
        setIsResetPasswordVisible(isResetPasswordVisible);
    };

    return(
        <div>
            <Head>
                <title>NASHDEV - Главная</title>
                {/* <link rel="icon" href="/logo.png" /> */}
            </Head>


            <div>
                <HeaderMain changeModalShowState={changeModalShowState} />
                <Auth isVisible={isModalVisible} onHide={() => changeModalShowState(false, false, false)} onForgotPassword={() => changeModalShowState(false, false, true)} />            <ResetPasswordDialog isResetVisible={isResetPasswordVisible} onHideReset={() => setIsResetPasswordVisible(false)} />
                <Dialog visible={createOrderShow} onHide={() => setCreateOrderShow(false)}>
                    <CreateOrderFormNoReg onHide={() => setCreateOrderShow(false)} />
                </Dialog>
            </div>
        </div>
    )
}

export default Index;