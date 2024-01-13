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
                        <div className={styles.categories}>
                            {order.categories && order.categories.map((category, index) => (
                                <div key={index} className={styles.category}>
                                    {category.category_title}
                                </div>
                            ))}
                        </div>



                        <Link href={`my-orders/${order.id}`}>
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