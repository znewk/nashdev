import styles from './style.module.css'
import {Image} from "react-bootstrap";
import MyOrderNotification from "../MyOrderNotification";
import Link from "next/link";

const MyOrderCard = ({order, ...props}) => {
    return (
        <div className={styles.container}>
            {
                order.notification && (
                    <MyOrderNotification notification={order.notification}/>
                )
            }
            <div className={styles.info} >
                <div className={styles.infoHeader} style={{borderRadius: order.notification ? '0' : '10px 10px 0 0'}}>
                    <div>
                        <div className={styles.headerItems}>
                            <span className={styles.headerItem}>№{order.id}</span>
                            <span className={styles.headerItem}>Дата создания: {order.start_date}</span>
                        </div>

                        <h2 className={styles.infoTitle}>{order.title}</h2>
                    </div>



                    <div className={styles.orderStatus}>
                        {order.statusId}
                    </div>
                </div>

                <div className={styles.infoFooter}>
                    <div className={styles.infoText}>
                        <p className={styles.infoDesc}>
                            {order.description}
                        </p>
                    </div>

                    <div className={styles.deadlinesWrapper}>



                        <Link href={`/orders/my-orders/${order.id}`}>

                            <Button  style={{ background: "#36FFB9" }} type="primary">Подробнее</Button>

                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrderCard;