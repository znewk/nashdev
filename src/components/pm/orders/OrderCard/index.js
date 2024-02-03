import styles from './style.module.css'
import {Image} from "react-bootstrap";
import PmAPI from '../../../../api/pm';
import { useState } from 'react';
import {Dialog} from "primereact/dialog";
import AssignRequestModal from '../../AssignRequestModal';

const OrderCard = ({order, ...props}) => {

    const API = new PmAPI()
    const [getTheOrderModalShow, setGetTheOrderModalShow] = useState(false)
    const changeModalShowState = (state) => {
        setGetTheOrderModalShow(state)
    }

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.infoHeader}>
                    <div className={styles.headerItems}>
                        <span className={styles.headerItem}>№{order.id}</span>
                        <span className={styles.headerItem}>Дата создания: {order.date}</span>
                    </div>

                    <h2 className={styles.infoTitle}>{order.title}</h2>
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


                        <button className={styles.button}
                            onClick={()=>{
                                setGetTheOrderModalShow(true)
                            }}
                        >
                            Беру
                        </button>
                    </div>
                </div>
            </div>


            <Dialog header={"Вы приняли проект в работу"} 
                visible={getTheOrderModalShow} 
                position={'center'} 
                style={{ width: '30vw', fontFamily: 'Raleway Medium' }}
                breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                onHide={() => setGetTheOrderModalShow(false)} 
                draggable={false} resizable={false}>
                <AssignRequestModal changeModalShowState={changeModalShowState} order={order}/>
            </Dialog>
        </div>
    )
}

export default OrderCard;


// import styles from './style.module.css'
// import {Image} from "react-bootstrap";
// import Link from "next/link";

// const OrderCard = ({order, ...props}) => {
//     return (
//         <div className={styles.container}>
//             {
//                 order.notification && (
//                     <MyOrderNotification notification={order.notification}/>
//                 )
//             }
//             <div className={styles.info} >
//                 <div className={styles.infoHeader} style={{borderRadius: order.notification ? '0' : '10px 10px 0 0'}}>
//                     <div>
//                         <div className={styles.headerItems}>
//                             <span className={styles.headerItem}>№{order.id}</span>
//                             <span className={styles.headerItem}>Дата создания: {order.start_date}</span>
//                         </div>

//                         <h2 className={styles.infoTitle}>{order.title}</h2>
//                     </div>



//                     <div className={styles.orderStatus}>
//                         {order.statusId}
//                     </div>
//                 </div>

//                 <div className={styles.infoFooter}>
//                     <div className={styles.infoText}>
//                         <p className={styles.infoDesc}>
//                             {order.description}
//                         </p>
//                     </div>

//                     <div className={styles.deadlinesWrapper}>



//                         <Link href={`/orders/my-orders/${order.id}`}>
//                             <span className={styles.button}>
//                                 Подробнее
//                             </span>
//                         </Link>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default OrderCard;