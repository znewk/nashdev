import { useEffect, useState } from 'react';
import CreateTaskModal from '../../CreateTaskModal';
import styles from './style.module.css'
import { Dialog } from 'primereact/dialog';
import PmAPI from '../../../../api/pm';
import { motion, AnimatePresence } from 'framer-motion';
import OrderTask from './OrderTask';
import { Dropdown } from 'primereact/dropdown';
import Link from "next/link";

const OrderTasks = ({managerTasks, order, ...props}) =>{
    const API = new PmAPI()

    const [createTaskShow, setCreateTaskShow] = useState(false)
    // const [managerTasks, setManagerTasks] = useState([])

    const changeModalShowState = (state) => {
        setCreateTaskShow(state)
    }

    // useEffect(()=>{
    //     console.log(order)
    //     const tasks = API.getManagerTasksByRequest(order.id);

    //     setManagerTasks(tasks)
    // }, [])

    return(
        <div className={styles.container}>
            <div className={styles.tasksList}>
                <div className={styles.listTitleBlock}>
                    <h2 className={styles.listTitle}>Задачи проекта</h2>
                </div>
                
                <p className={styles.listSubtitle}>Распишите все задачи, которыми вы будете занимать в течении ведения проекта. <br/>
                    Вы можете взять на себя задачи не только по управлению проекта, но и из других категорий</p>
            
        
            </div>
            <div className={styles.mainInfo}>
                    <div className={styles.infoHeader}>
                        <h2 className='font-bold text-s pt-3 pb-3'>Прикрепленные файлы</h2>
                    </div>

                    <div className={styles.files}>
                        <div className={styles.file}>
                            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M16.7421 4.2249C14.7182 2.20107 11.4225 2.20107 9.40085 4.2249L3.79343 9.82803C3.7569 9.86455 3.73757 9.91396 3.73757 9.96553C3.73757 10.0171 3.7569 10.0665 3.79343 10.103L4.5862 10.8958C4.62244 10.9319 4.67149 10.9521 4.72263 10.9521C4.77376 10.9521 4.82282 10.9319 4.85905 10.8958L10.4665 5.29268C11.1626 4.59658 12.0885 4.21416 13.0725 4.21416C14.0565 4.21416 14.9825 4.59658 15.6764 5.29268C16.3725 5.98877 16.755 6.91475 16.755 7.89658C16.755 8.88057 16.3725 9.80439 15.6764 10.5005L9.96159 16.2132L9.03562 17.1392C8.1698 18.005 6.76257 18.005 5.89675 17.1392C5.4778 16.7202 5.24792 16.1638 5.24792 15.5708C5.24792 14.9778 5.4778 14.4214 5.89675 14.0024L11.5665 8.33486C11.7104 8.19307 11.8995 8.11357 12.1014 8.11357H12.1036C12.3055 8.11357 12.4925 8.19307 12.6342 8.33486C12.7782 8.47881 12.8555 8.66787 12.8555 8.86982C12.8555 9.06963 12.776 9.25869 12.6342 9.40049L8.00007 14.0304C7.96355 14.0669 7.94421 14.1163 7.94421 14.1679C7.94421 14.2194 7.96355 14.2688 8.00007 14.3054L8.79284 15.0981C8.82908 15.1342 8.87813 15.1545 8.92927 15.1545C8.9804 15.1545 9.02946 15.1342 9.06569 15.0981L13.6977 10.4661C14.1253 10.0386 14.3594 9.47139 14.3594 8.86768C14.3594 8.26396 14.1231 7.69463 13.6977 7.26924C12.8147 6.38623 11.3796 6.38838 10.4966 7.26924L9.94655 7.82139L4.82897 12.9368C4.48164 13.2821 4.20631 13.6929 4.01896 14.1455C3.83161 14.598 3.73596 15.0832 3.73757 15.5729C3.73757 16.5677 4.12644 17.5022 4.82897 18.2048C5.5573 18.931 6.5112 19.294 7.46511 19.294C8.41901 19.294 9.37292 18.931 10.0991 18.2048L16.7421 11.5661C17.7196 10.5864 18.261 9.28232 18.261 7.89658C18.2632 6.50869 17.7217 5.20459 16.7421 4.2249Z" fill="black" fill-opacity="0.45"/>
                            </svg>
                            <Link href={'/file.txt'}>
                                <span>Прикрепить файлы</span>
                            </Link>
                        </div>
            </div>
            </div>
            
            {/* <div className={styles.tasksList}>
                <div className={styles.listTitleBlock}>
                    <h2 className={styles.listTitle}>Ваши задачи</h2>

                    <div className={styles.createTaskBtn} onClick={()=>(setCreateTaskShow(true))}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.53125 2.375H8.46875C8.55208 2.375 8.59375 2.41667 8.59375 2.5V13.5C8.59375 13.5833 8.55208 13.625 8.46875 13.625H7.53125C7.44792 13.625 7.40625 13.5833 7.40625 13.5V2.5C7.40625 2.41667 7.44792 2.375 7.53125 2.375Z" fill="#1677FF"/>
                            <path d="M2.75 7.40625H13.25C13.3333 7.40625 13.375 7.44792 13.375 7.53125V8.46875C13.375 8.55208 13.3333 8.59375 13.25 8.59375H2.75C2.66667 8.59375 2.625 8.55208 2.625 8.46875V7.53125C2.625 7.44792 2.66667 7.40625 2.75 7.40625Z" fill="#1677FF"/>
                        </svg>
                        <span className={styles.createTaskSpan} >
                            Добавить задачу
                        </span>
                    </div>
                </div>
                <p className={styles.listSubtitle}>Распишите все задачи, которыми вы будете занимать в течении ведения проекта. 
                    Вы можете взять на себя задачи не только по управлению проекта, но и из других категорий</p>
            </div>
            <div className={styles.tasksListArea}>
                {
                    managerTasks.length != 0 && managerTasks.map(task => <OrderTask task={task}/>)
                }
            </div>


            <div className={styles.tasksList}>
                <div className={styles.listTitleBlock}>
                    <h2 className={styles.listTitle}>Задачи для исполнителей</h2>

                    <div className={styles.createTaskBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.53125 2.375H8.46875C8.55208 2.375 8.59375 2.41667 8.59375 2.5V13.5C8.59375 13.5833 8.55208 13.625 8.46875 13.625H7.53125C7.44792 13.625 7.40625 13.5833 7.40625 13.5V2.5C7.40625 2.41667 7.44792 2.375 7.53125 2.375Z" fill="#1677FF"/>
                            <path d="M2.75 7.40625H13.25C13.3333 7.40625 13.375 7.44792 13.375 7.53125V8.46875C13.375 8.55208 13.3333 8.59375 13.25 8.59375H2.75C2.66667 8.59375 2.625 8.55208 2.625 8.46875V7.53125C2.625 7.44792 2.66667 7.40625 2.75 7.40625Z" fill="#1677FF"/>
                        </svg>
                        <span className={styles.createTaskSpan} onClick={()=>(setCreateTaskShow(true))}>
                            Добавить задачу
                        </span>
                    </div>
                </div>
                <p className={styles.listSubtitle}>Распишите все задачи, которыми вы будете занимать в течении ведения проекта. 
                    Вы можете взять на себя задачи не только по управлению проекта, но и из других категорий</p>
            </div>


            <Dialog header={"Создание задачи"} 
                visible={createTaskShow} 
                position={'center'} 
                style={{ width: '30vw', fontFamily: 'Raleway Medium' }}
                breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                onHide={() => setCreateTaskShow(false)} 
                draggable={false} resizable={false}>
                <CreateTaskModal changeModalShowState={changeModalShowState} order={order}/>
            // </Dialog>*/}
            
        </div> 
        
    )
}

export default OrderTasks;