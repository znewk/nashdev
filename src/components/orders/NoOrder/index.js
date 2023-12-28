import styles from './style.module.css'
import {Image} from "react-bootstrap";
import CreateOrderForm from "../../Modals/CreateOrderForm";
import {Dialog} from "primereact/dialog";
import {useState} from "react";

const NoOrder = (...props) => {

    const [createOrderShow, setCreateOrderShow] = useState(false)

    const changeModalShowState = (state) => {
        setCreateOrderShow(state)
    }

    return (
        <div className={styles.container}>
            <Image src={'/orders/createorder.png'}/>
            <p className={styles.title}>Создайте заказ на свой проект!</p>

            <span className={styles.subtitle}>
                Мы полность изучим вашу задачу, предоставим <br/> подброное техническое задание и подберем команду <br/> специально под ваш проект
            </span>

            <button className={styles.createOrder}>

                <span onClick={()=>{changeModalShowState(true)}}>Создать заказ</span>
            </button>



            <Dialog visible={createOrderShow} position={'center'} style={{ width: '50vw' }} onHide={() => setCreateOrderShow(false)} draggable={false} resizable={false}>
                <CreateOrderForm changeModalShowState={changeModalShowState}/>
            </Dialog>
        </div>
    )
}

export default NoOrder;