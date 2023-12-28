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
                            <span className={styles.headerItem}>Дата создания: {order.date}</span>
                        </div>

                        <h2 className={styles.infoTitle}>{order.title}</h2>
                    </div>



                    <div className={styles.orderStatus}>
                        {order.currentStatus.title}
                    </div>
                </div>

                <div className={styles.infoFooter}>
                    <div className={styles.infoText}>
                        <p className={styles.infoDesc}>
                            Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности.
                        </p>
                    </div>

                    <div className={styles.deadlinesWrapper}>



                        <Link href={`/orders/my-orders/${order.id}`}>
                            <span className={styles.button}>
                                Подробнее
                            </span>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrderCard;