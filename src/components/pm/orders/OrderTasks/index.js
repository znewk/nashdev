import { useEffect, useState } from 'react';
import CreateTaskModal from '../../CreateTaskModal';
import styles from './style.module.css'
import { Dialog } from 'primereact/dialog';
import PmAPI from '../../../../api/pm';

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
                    <h2 className={styles.listTitle}>Задачи</h2>
                </div>
                
                <p className={styles.listSubtitle}>Распишите все задачи, которыми вы будете занимать в течении ведения проекта. 
                    Вы можете взять на себя задачи не только по управлению проекта, но и из других категорий</p>
            </div>

            <div className={styles.tasksList}>
                <div className={styles.listTitleBlock}>
                    <h2 className={styles.listTitle}>Ваши задачи</h2>

                    <div className={styles.createTaskBtn} >
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
            <div className={styles.tasksListArea}>
                {
                    managerTasks.length != 0 && managerTasks.map(task => (
                        <div className={styles.task}>
                            <h2 className={styles.listTitle}>{task.title}</h2>
                            <p className={styles.listSubtitle}>{task.description}</p>
                            <p className={styles.listSubtitle}>{task.category}</p>

                            <div className={styles.subtasksList}>
                                {
                                    task.subtasks.map(subtask => (
                                        <div className={styles.subtaskItem}>
                                            <h2 className={styles.listTitle}>{subtask.title}</h2>
                                            <p className={styles.listSubtitle}>{subtask.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
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
            </Dialog>
        </div>
    )
}

export default OrderTasks;