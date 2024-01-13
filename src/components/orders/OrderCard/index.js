import styles from './style.module.css'
import {Image} from "react-bootstrap";

const OrderCard = ({order, ...props}) => {
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
                            Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности.
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


                        <button className={styles.button}>
                            Беру
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCard;