import styles from './styles.module.css'
import {useEffect, useState} from "react";
import api from "../../../../api";
import Link from "next/link";
import {notification} from "antd";
import {Image} from "react-bootstrap";
import { Rate } from 'antd';
import classnames from "classnames";
import { Dialog } from 'primereact/dialog';
import OrderResponseCard from '../OrderResponseCard';
import PmAPI from '../../../../api/pm';
import OrderTasks from '../OrderTasks';
import { Steps, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import ChangeTitleForm from '../../../Modals/ChangeTitleForm';
import ChangeDesciprionForm from '../../../Modals/ChangeDesciptionForm';

const MyOrderBlock = ({id, ...props}) => {
    const API = new PmAPI()

    const [order, setOrder] = useState([])
    const [managerTasks, setManagerTasks] = useState([])
    const [loadingOrder, setLoadingOrder] = useState(true)
    const stepsData = (order.statuses || []).map(status => ({
        title: status.status, // Assuming 'status' is a suitable title
        description: status.title // Assuming 'title' is the description
    }));

    useEffect(() => {
        const fetchOrder = async () => {
            if (!id) {
                setLoadingOrder(true);
                return; 
            }
    
            try {
                const orders = await API.getAllRequests();
                const foundOrder = orders.find(order => order.id === parseInt(id));
                setOrder(foundOrder || null);
    
                const tasks = await API.getManagerTasksByRequest(foundOrder.id);
                setManagerTasks(tasks)

                console.log(foundOrder);
    
                setLoadingOrder(false);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
                // Обработка ошибок
            }
        };
    
        // Вызовите функцию
        fetchOrder();
    }, [id]);


    const [titleModalShpw, setTitleModalShow] = useState(false)
    const changeTitleModalShow = (state) => {
        setTitleModalShow(state)
    }

    const [descModalShow, setDescModalShow] = useState(false)
    const changeDescModalShow = (state) => {
        setDescModalShow(state)
    }
    return (
        <div className={styles.container}>

            <Dialog visible={titleModalShpw} header={'Изменение заголовка'} position={'center'} style={{ width: '35vw', fontFamily: 'Raleway Regular'}} onHide={() => setTitleModalShow(false)} draggable={false} resizable={false}>
                <ChangeTitleForm changeModalShowState={changeTitleModalShow} title={order.title} order={order}/>
            </Dialog>

            <Dialog visible={descModalShow} header={'Изменение описания'} position={'center'} style={{ width: '35vw', fontFamily: 'Raleway Regular'}} onHide={() => setDescModalShow(false)} draggable={false} resizable={false}>
                <ChangeDesciprionForm changeModalShowState={changeDescModalShow} order={order}/>
            </Dialog>

            <div className={styles.info}>
                <div className={styles.infoHeader}>
                    <div>
                        <Link href={'/orders/my-orders/'}>
                            <span className={styles.routerStory}>Мои проекты /</span>
                        </Link>
                        <span> Заказ №{order.id}</span>
                    </div>

                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={styles.svg}>
                        <path d="M17.1309 4.66211L15.0508 2.58398C14.7969 2.33008 14.457 2.1875 14.0977 2.1875C13.7383 2.1875 13.3984 2.32813 13.1445 2.58398L10.9043 4.82031C10.6504 5.07422 10.5078 5.41602 10.5078 5.77539C10.5078 6.13672 10.6484 6.47461 10.9043 6.73047L12.6543 8.48242C12.2556 9.4113 11.6828 10.2553 10.9668 10.9687C10.25 11.6895 9.41211 12.2578 8.48242 12.6602L6.73242 10.9082C6.47852 10.6543 6.13867 10.5117 5.7793 10.5117C5.60204 10.5111 5.42643 10.5458 5.26276 10.6139C5.0991 10.682 4.95067 10.782 4.82617 10.9082L2.58398 13.1445C2.33008 13.3984 2.1875 13.7402 2.1875 14.0996C2.1875 14.4609 2.32813 14.7988 2.58398 15.0547L4.66211 17.1328C5.0957 17.5664 5.69336 17.8145 6.30664 17.8145C6.43359 17.8145 6.55664 17.8047 6.68164 17.7832C9.26758 17.3574 11.834 15.9805 13.9062 13.9102C15.9766 11.8359 17.3516 9.26953 17.7812 6.68164C17.9043 5.94727 17.6582 5.19141 17.1309 4.66211ZM16.3965 6.44922C16.0156 8.75195 14.7773 11.0488 12.9121 12.9141C11.0469 14.7793 8.75195 16.0176 6.44922 16.3984C6.16016 16.4473 5.86328 16.3496 5.65234 16.1406L3.61133 14.0996L5.77539 11.9336L8.11523 14.2773L8.13281 14.2949L8.55469 14.1387C9.83384 13.6684 10.9954 12.9255 11.959 11.9617C12.9225 10.9978 13.6649 9.83596 14.1348 8.55664L14.291 8.13477L11.9316 5.77734L14.0957 3.61133L16.1367 5.65234C16.3477 5.86328 16.4453 6.16016 16.3965 6.44922Z" fill="#1677FF"/>
                    </svg> */}
                </div>

                <div className={styles.mainInfo}>
                    <div className={styles.infoHeader}>
                    <div className={styles.title}>
                        <h3>{order.title}</h3>

                        <EditOutlined style={{color: '#1677ff', cursor: 'pointer'}} onClick={()=>{
                            setTitleModalShow(true)
                        }}/>
                    </div>
                    <Button style={{ background: "#36FFB9" }}type="primary" className={styles.customButton}>Отправить на предоплату</Button>
      

                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={styles.svg}>
                            <path d="M5.0332 14.6875C5.07227 14.6875 5.11133 14.6836 5.15039 14.6777L8.43555 14.1016C8.47461 14.0938 8.51172 14.0762 8.53906 14.0469L16.8184 5.76758C16.8365 5.74951 16.8508 5.72805 16.8606 5.70442C16.8704 5.68079 16.8755 5.65546 16.8755 5.62988C16.8755 5.6043 16.8704 5.57897 16.8606 5.55535C16.8508 5.53172 16.8365 5.51026 16.8184 5.49219L13.5723 2.24414C13.5352 2.20703 13.4863 2.1875 13.4336 2.1875C13.3809 2.1875 13.332 2.20703 13.2949 2.24414L5.01562 10.5234C4.98633 10.5527 4.96875 10.5879 4.96094 10.627L4.38477 13.9121C4.36577 14.0167 4.37255 14.1244 4.40454 14.2258C4.43654 14.3273 4.49276 14.4193 4.56836 14.4941C4.69727 14.6191 4.85938 14.6875 5.0332 14.6875ZM6.34961 11.2812L13.4336 4.19922L14.8652 5.63086L7.78125 12.7129L6.04492 13.0195L6.34961 11.2812ZM17.1875 16.3281H2.8125C2.4668 16.3281 2.1875 16.6074 2.1875 16.9531V17.6562C2.1875 17.7422 2.25781 17.8125 2.34375 17.8125H17.6562C17.7422 17.8125 17.8125 17.7422 17.8125 17.6562V16.9531C17.8125 16.6074 17.5332 16.3281 17.1875 16.3281Z" fill="#1677FF"/>
                        </svg> */}
                    </div>
                    <div class={styles.container}>
                    <div class={styles.svgColumn}>
                        <div class={styles.profileImgBody}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M11.737 10.4398C11.4791 9.82895 11.1048 9.27405 10.635 8.80605C10.1667 8.33671 9.61186 7.96251 9.00123 7.7041C8.99576 7.70137 8.99029 7.7 8.98482 7.69727C9.83658 7.08203 10.3903 6.07988 10.3903 4.94922C10.3903 3.07617 8.87271 1.55859 6.99967 1.55859C5.12662 1.55859 3.60904 3.07617 3.60904 4.94922C3.60904 6.07988 4.16275 7.08203 5.01451 7.69863C5.00904 7.70137 5.00357 7.70273 4.99811 7.70547C4.38561 7.96387 3.836 8.33438 3.36432 8.80742C2.89497 9.27578 2.52077 9.83058 2.26236 10.4412C2.00851 11.039 1.8716 11.6799 1.85904 12.3293C1.85868 12.3439 1.86124 12.3584 1.86657 12.372C1.8719 12.3856 1.8799 12.398 1.8901 12.4084C1.90029 12.4189 1.91247 12.4272 1.92592 12.4328C1.93937 12.4385 1.95382 12.4414 1.96842 12.4414H2.78873C2.84889 12.4414 2.89674 12.3936 2.89811 12.3348C2.92545 11.2793 3.34928 10.2908 4.0985 9.5416C4.87369 8.76641 5.90318 8.33984 6.99967 8.33984C8.09615 8.33984 9.12564 8.76641 9.90084 9.5416C10.6501 10.2908 11.0739 11.2793 11.1012 12.3348C11.1026 12.3949 11.1504 12.4414 11.2106 12.4414H12.0309C12.0455 12.4414 12.06 12.4385 12.0734 12.4328C12.0869 12.4272 12.099 12.4189 12.1092 12.4084C12.1194 12.398 12.1274 12.3856 12.1328 12.372C12.1381 12.3584 12.1407 12.3439 12.1403 12.3293C12.1266 11.6758 11.9913 11.04 11.737 10.4398ZM6.99967 7.30078C6.37213 7.30078 5.7815 7.05605 5.33717 6.61172C4.89283 6.16738 4.64811 5.57676 4.64811 4.94922C4.64811 4.32168 4.89283 3.73105 5.33717 3.28672C5.7815 2.84238 6.37213 2.59766 6.99967 2.59766C7.62721 2.59766 8.21783 2.84238 8.66217 3.28672C9.1065 3.73105 9.35123 4.32168 9.35123 4.94922C9.35123 5.57676 9.1065 6.16738 8.66217 6.61172C8.21783 7.05605 7.62721 7.30078 6.99967 7.30078Z" fill="white"/>
                        </svg>
                        </div>
                    </div>
                    <div class={styles.textColumn}>
                        <p className='ml-2'>Заказчик</p>
                        <p className='ml-2 font-bold'>{order.manager}</p>

                    </div>
                </div>

                    <div className={styles.deadlinesWrapper}>
                        <div className={styles.categories}>
                            {order.categories && order.categories.map((category, index) => (
                                <div key={index} className={styles.category}>
                                    {category.category_title}
                                </div>
                            ))}
                        </div>
                        </div>
                    <p className={styles.subtitle}>
                        {order.description}

                        <div onClick={()=>{setDescModalShow(true)}} style={{color: '#1677ff', cursor: 'pointer'}}>
                            Редактировать
                        </div>
                    </p>
                </div>
                <div className={styles.mainInfo}>
                    <div className={styles.infoHeader}>
                        <h2 className='font-bold text-s pt-3 pb-3'>Прикрепленные файлы</h2>
                    </div>

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
                </div>


                <div className={styles.mainInfo}>
                    {/* <div className={styles.infoHeader}>
                        <h2>Отклики</h2>
                    </div>

                    {
                        order.responses && (
                            <div className={styles.notification}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188Z" fill="#FAAD14"/>
                                    <path d="M10.875 16.125C10.875 16.4234 10.9935 16.7095 11.2045 16.9205C11.4155 17.1315 11.7016 17.25 12 17.25C12.2984 17.25 12.5845 17.1315 12.7955 16.9205C13.0065 16.7095 13.125 16.4234 13.125 16.125C13.125 15.8266 13.0065 15.5405 12.7955 15.3295C12.5845 15.1185 12.2984 15 12 15C11.7016 15 11.4155 15.1185 11.2045 15.3295C10.9935 15.5405 10.875 15.8266 10.875 16.125ZM11.4375 13.5H12.5625C12.6656 13.5 12.75 13.4156 12.75 13.3125V6.9375C12.75 6.83437 12.6656 6.75 12.5625 6.75H11.4375C11.3344 6.75 11.25 6.83437 11.25 6.9375V13.3125C11.25 13.4156 11.3344 13.5 11.4375 13.5Z" fill="#FAAD14"/>
                                </svg>
                                <div>
                                    <h2 style={{marginTop: 0}}>Пожалуйста, выберите исполнителя</h2>
                                    <p>
                                        На ваш заказ мы подобрали {order.responses.length} исполнителя. Если возникнуть сложности свяжитесь, пожалуйста с менеджером
                                    </p>
                                </div>
                            </div>
                        )
                    }

                    {
                        order.responses && (
                            <div className={styles.responsesWrapper}>
                                {order.responses.map(response => (
                                    <OrderResponseCard order={order} response={response}/>
                                ))}
                            </div>
                        )
                    } */}


                    <OrderTasks managerTasks={managerTasks} order={order}/>
                </div>
            </div>

            <div className={styles.progress}>
                <div className='font-bold text-xl pb-3'>
                <h2>Статус заказа</h2>
                </div>
                <div className={styles.progressBar}>

                <Steps
                    progressDot
                    current={1} // Set the current step based on your logic
                    direction="vertical"
                    items={stepsData}
                />

                </div>
            </div>
        </div>
    )
}

<<<<<<< HEAD
export default MyOrderBlock;
=======
export default MyOrderBlock;
>>>>>>> 526288e65772b66afe2f18a18db448396f30bb02
