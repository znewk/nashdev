import styles from './style.module.css'
import {Image} from "react-bootstrap";
import CreateOrderForm from "../../CreateOrderForm";
import {Dialog} from "primereact/dialog";
import {useState} from "react";

const NoCardList = (...props) => {

    const [createOrderShow, setCreateOrderShow] = useState(false)

    const changeModalShowState = (state) => {
        setCreateOrderShow(state)
    }

    return (
        <div className={styles.container}>
            <Image src={'/orders/createorder.png'}/>
            <p className={styles.title}>У вас нет Сохраненных Карт</p>

            <span className={styles.subtitle}>
            Добавьте карты для оплаты заказов.  <br/> Мы надёжно храним Ваши данные
            </span>

            <button className={styles.createOrder}>

                <span onClick={()=>{changeModalShowState(true)}}>Добавить Карту</span>
            </button>



            <Dialog visible={createOrderShow} position={'center'} style={{ width: '50vw' }} onHide={() => setCreateOrderShow(false)} draggable={false} resizable={false}>
                <CreateOrderForm changeModalShowState={changeModalShowState}/>
            </Dialog>
        </div>
    )
}

export default NoCardList;