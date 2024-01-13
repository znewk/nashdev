import styles from "./style.module.css"
import {Image} from "react-bootstrap";
import { Rate } from 'antd';
import {useState} from "react";
import classnames from "classnames";
import { Dialog } from 'primereact/dialog';
import Link from "next/link";

const OrderResponseCard = ({response, order, ...props}) => {

    const [showHireModal, setShowHireModal] =   useState(false)

    const showHireModalHandler = () => {
        setShowHireModal(true)
    }

    return (
        <div className={styles.responseCard}>
            <div className={styles.responseCardTop}>
                <Image src={'/avatar.png'} className={styles.responseCardAvatar}/>
                <div className={styles.responseCardTopInfo}>
                    <h2 style={{margin: '0 0 10px 0'}}>{response.name}</h2>
                    <div className={styles.responseCardTopInfoRating}>
                        <Rate disabled  defaultValue={response.rating} />
                        <span>{response.feedbacks}</span>
                    </div>
                    <div>
                        <span className={styles.responseCardTopInfoSubtitle}>Срок: {response.deadline}</span> <br/>
                        <span className={styles.responseCardTopInfoSubtitle}>Цена: {response.price}</span>
                    </div>
                </div>
            </div>
            <div className={styles.responseCardBottom}>
                <button className={styles.responseCardBottomButton}>Портфолио</button>
                <button className={classnames(styles.responseCardBottomButton, styles.responseCardBottomButtonGreen)}
                    onClick={()=>{showHireModalHandler()}}
                >Нанять</button>
            </div>

            <Dialog visible={showHireModal} 
                    header={'Выбор исполнителя'}
                    draggable={false} 
                    resizable={false}
                    onHide={() => {setShowHireModal(false)}}
                    style={{ width: '30vw', fontFamily: 'Raleway Regular' }}
            >
                <div className={styles.responseCard} style={{width: '100%'}}>
                    <div className={styles.responseCardTop}>
                        <Image src={'/avatar.png'} className={styles.responseCardAvatar}/>
                        <div className={styles.responseCardTopInfo}>
                            <h2 style={{margin: '0 0 10px 0'}}>{response.name}</h2>
                            <div className={styles.responseCardTopInfoRating}>
                                <Rate disabled  defaultValue={response.rating} />
                                <span>{response.feedbacks}</span>
                            </div>
                            <div>
                                <span className={styles.responseCardTopInfoSubtitle}>Срок: {response.deadline}</span> <br/>
                                <span className={styles.responseCardTopInfoSubtitle}>Цена: {response.price}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.responseCardBottom}>
                        <button className={styles.responseCardBottomButton}>Портфолио</button>
                        <button className={classnames(styles.responseCardBottomButton, styles.responseCardBottomButtonGreen)}
                            onClick={()=>{showHireModalHandler()}}
                        >Нанять</button>
                    </div>
                </div>

                <div className={styles.orderArc}>
                    <p className={styles.orderNumber}>Заказ №{order.id}</p>

                    <h3>
                        {order.title}
                    </h3>

                    <p>
                    Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности
                    </p>

                    <h3>Прикрепленные файлы:</h3>
                    <div className={styles.files}>
                        <div className={styles.file}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M16.7421 4.2249C14.7182 2.20107 11.4225 2.20107 9.40085 4.2249L3.79343 9.82803C3.7569 9.86455 3.73757 9.91396 3.73757 9.96553C3.73757 10.0171 3.7569 10.0665 3.79343 10.103L4.5862 10.8958C4.62244 10.9319 4.67149 10.9521 4.72263 10.9521C4.77376 10.9521 4.82282 10.9319 4.85905 10.8958L10.4665 5.29268C11.1626 4.59658 12.0885 4.21416 13.0725 4.21416C14.0565 4.21416 14.9825 4.59658 15.6764 5.29268C16.3725 5.98877 16.755 6.91475 16.755 7.89658C16.755 8.88057 16.3725 9.80439 15.6764 10.5005L9.96159 16.2132L9.03562 17.1392C8.1698 18.005 6.76257 18.005 5.89675 17.1392C5.4778 16.7202 5.24792 16.1638 5.24792 15.5708C5.24792 14.9778 5.4778 14.4214 5.89675 14.0024L11.5665 8.33486C11.7104 8.19307 11.8995 8.11357 12.1014 8.11357H12.1036C12.3055 8.11357 12.4925 8.19307 12.6342 8.33486C12.7782 8.47881 12.8555 8.66787 12.8555 8.86982C12.8555 9.06963 12.776 9.25869 12.6342 9.40049L8.00007 14.0304C7.96355 14.0669 7.94421 14.1163 7.94421 14.1679C7.94421 14.2194 7.96355 14.2688 8.00007 14.3054L8.79284 15.0981C8.82908 15.1342 8.87813 15.1545 8.92927 15.1545C8.9804 15.1545 9.02946 15.1342 9.06569 15.0981L13.6977 10.4661C14.1253 10.0386 14.3594 9.47139 14.3594 8.86768C14.3594 8.26396 14.1231 7.69463 13.6977 7.26924C12.8147 6.38623 11.3796 6.38838 10.4966 7.26924L9.94655 7.82139L4.82897 12.9368C4.48164 13.2821 4.20631 13.6929 4.01896 14.1455C3.83161 14.598 3.73596 15.0832 3.73757 15.5729C3.73757 16.5677 4.12644 17.5022 4.82897 18.2048C5.5573 18.931 6.5112 19.294 7.46511 19.294C8.41901 19.294 9.37292 18.931 10.0991 18.2048L16.7421 11.5661C17.7196 10.5864 18.261 9.28232 18.261 7.89658C18.2632 6.50869 17.7217 5.20459 16.7421 4.2249Z" fill="black" fill-opacity="0.45"/>
                            </svg>
                            <Link href={'/file.txt'}>
                                <span>Тех_задание.pdf</span>
                            </Link>
                        </div>

                        <div className={styles.file}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M16.7421 4.2249C14.7182 2.20107 11.4225 2.20107 9.40085 4.2249L3.79343 9.82803C3.7569 9.86455 3.73757 9.91396 3.73757 9.96553C3.73757 10.0171 3.7569 10.0665 3.79343 10.103L4.5862 10.8958C4.62244 10.9319 4.67149 10.9521 4.72263 10.9521C4.77376 10.9521 4.82282 10.9319 4.85905 10.8958L10.4665 5.29268C11.1626 4.59658 12.0885 4.21416 13.0725 4.21416C14.0565 4.21416 14.9825 4.59658 15.6764 5.29268C16.3725 5.98877 16.755 6.91475 16.755 7.89658C16.755 8.88057 16.3725 9.80439 15.6764 10.5005L9.96159 16.2132L9.03562 17.1392C8.1698 18.005 6.76257 18.005 5.89675 17.1392C5.4778 16.7202 5.24792 16.1638 5.24792 15.5708C5.24792 14.9778 5.4778 14.4214 5.89675 14.0024L11.5665 8.33486C11.7104 8.19307 11.8995 8.11357 12.1014 8.11357H12.1036C12.3055 8.11357 12.4925 8.19307 12.6342 8.33486C12.7782 8.47881 12.8555 8.66787 12.8555 8.86982C12.8555 9.06963 12.776 9.25869 12.6342 9.40049L8.00007 14.0304C7.96355 14.0669 7.94421 14.1163 7.94421 14.1679C7.94421 14.2194 7.96355 14.2688 8.00007 14.3054L8.79284 15.0981C8.82908 15.1342 8.87813 15.1545 8.92927 15.1545C8.9804 15.1545 9.02946 15.1342 9.06569 15.0981L13.6977 10.4661C14.1253 10.0386 14.3594 9.47139 14.3594 8.86768C14.3594 8.26396 14.1231 7.69463 13.6977 7.26924C12.8147 6.38623 11.3796 6.38838 10.4966 7.26924L9.94655 7.82139L4.82897 12.9368C4.48164 13.2821 4.20631 13.6929 4.01896 14.1455C3.83161 14.598 3.73596 15.0832 3.73757 15.5729C3.73757 16.5677 4.12644 17.5022 4.82897 18.2048C5.5573 18.931 6.5112 19.294 7.46511 19.294C8.41901 19.294 9.37292 18.931 10.0991 18.2048L16.7421 11.5661C17.7196 10.5864 18.261 9.28232 18.261 7.89658C18.2632 6.50869 17.7217 5.20459 16.7421 4.2249Z" fill="black" fill-opacity="0.45"/>
                            </svg>
                            <Link href={'/file.txt'}>
                                <span>Макет дизайна.ps</span>
                            </Link>
                        </div>
                    </div>

                    <button style={{width: '100%', marginTop: 30}} className={classnames(styles.responseCardBottomButton, styles.responseCardBottomButtonGreen)}>Нанять</button>
                </div>

            </Dialog>
        </div>
    )
}

export default OrderResponseCard;