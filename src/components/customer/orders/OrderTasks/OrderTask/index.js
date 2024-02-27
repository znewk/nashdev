import styles from '../style.module.css'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import PmAPI from '../../../../../api/pm';

const OrderTask = ({task, ...props}) => {
    const API = new PmAPI()

    const [showSubtasks, setShowSubtasks] = useState(false)

    
    const items = [
        {
            label: <span onClick={async()=>{API.duplicateTask(task.id)}}>Дублировать задачу</span>,
            key: '0',
        },
        {
            label: <span onClick={async()=>{API.archiveTask(task.id)}}>Архивировать задачу</span>,
            key: '1',
        }
    ];
    

    return (
        <div className={styles.task}>
            <div className={styles.taskHeader}>
                <div className={styles.taskTitleBlock}>
                    <h2 className={styles.listTitle} style={{marginRight: 15}}>{task.title}</h2>
                    <span className={styles.listSubtitle}>{task.subtasks.length} задачи</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none"
                    style={{cursor: 'pointer', transform: showSubtasks && "rotate(180deg)", transition: '0.3s'}}
                    onClick={() => setShowSubtasks(!showSubtasks)}
                >
                    <path d="M13.8125 4H12.6406C12.5609 4 12.4859 4.03906 12.439 4.10313L7.99995 10.2219L3.56089 4.10313C3.51402 4.03906 3.43902 4 3.35933 4H2.18745C2.08589 4 2.02652 4.11563 2.08589 4.19844L7.59527 11.7937C7.79527 12.0687 8.20464 12.0687 8.40308 11.7937L13.9125 4.19844C13.9734 4.11563 13.914 4 13.8125 4Z" fill="black" fill-opacity="0.45"/>
                </svg>
            </div>
            

            <AnimatePresence>
                {showSubtasks && (
                    <motion.div
                        className={styles.subtasksList}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {task.subtasks.map(subtask => (
                            <div className={styles.subtaskItem}>
                                <div className={styles.taskHeader}>
                                    <div className={styles.taskTitleBlock}>
                                        <h2 className={styles.listTitle}>{subtask.title}</h2>
                                    </div>

                                    <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            style={{cursor: 'pointer'}}
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <path d="M4.125 11.9766C4.125 12.1489 4.15895 12.3196 4.22491 12.4788C4.29087 12.6381 4.38755 12.7828 4.50942 12.9046C4.6313 13.0265 4.77599 13.1232 4.93523 13.1892C5.09447 13.2551 5.26514 13.2891 5.4375 13.2891C5.60986 13.2891 5.78053 13.2551 5.93977 13.1892C6.09901 13.1232 6.2437 13.0265 6.36558 12.9046C6.48745 12.7828 6.58413 12.6381 6.65009 12.4788C6.71605 12.3196 6.75 12.1489 6.75 11.9766C6.75 11.8042 6.71605 11.6335 6.65009 11.4743C6.58413 11.3151 6.48745 11.1704 6.36558 11.0485C6.2437 10.9266 6.09901 10.8299 5.93977 10.764C5.78053 10.698 5.60986 10.6641 5.4375 10.6641C5.26514 10.6641 5.09447 10.698 4.93523 10.764C4.77599 10.8299 4.6313 10.9266 4.50942 11.0485C4.38755 11.1704 4.29087 11.3151 4.22491 11.4743C4.15895 11.6335 4.125 11.8042 4.125 11.9766ZM10.6875 11.9766C10.6875 12.3247 10.8258 12.6585 11.0719 12.9046C11.3181 13.1508 11.6519 13.2891 12 13.2891C12.3481 13.2891 12.6819 13.1508 12.9281 12.9046C13.1742 12.6585 13.3125 12.3247 13.3125 11.9766C13.3125 11.6285 13.1742 11.2946 12.9281 11.0485C12.6819 10.8023 12.3481 10.6641 12 10.6641C11.6519 10.6641 11.3181 10.8023 11.0719 11.0485C10.8258 11.2946 10.6875 11.6285 10.6875 11.9766ZM17.25 11.9766C17.25 12.3247 17.3883 12.6585 17.6344 12.9046C17.8806 13.1508 18.2144 13.2891 18.5625 13.2891C18.9106 13.2891 19.2444 13.1508 19.4906 12.9046C19.7367 12.6585 19.875 12.3247 19.875 11.9766C19.875 11.6285 19.7367 11.2946 19.4906 11.0485C19.2444 10.8023 18.9106 10.6641 18.5625 10.6641C18.2144 10.6641 17.8806 10.8023 17.6344 11.0485C17.3883 11.2946 17.25 11.6285 17.25 11.9766Z" fill="black" fill-opacity="0.45"/>
                                            <Space>
                                                Click me
                                                <DownOutlined />
                                            </Space>
                                        </svg>
                                    </Dropdown>
                                </div>

                                <div className={styles.taskTitleBlock}>
                                    <div className={styles.taskPriceBlock}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 4.79063 4.79063 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 11.2094 11.2094 13.8125 8 13.8125ZM8.74531 7.6375L8.34844 7.54531V5.44688C8.94219 5.52813 9.30937 5.9 9.37187 6.35625C9.37969 6.41875 9.43281 6.46406 9.49531 6.46406H10.1969C10.2703 6.46406 10.3281 6.4 10.3219 6.32656C10.2266 5.35313 9.425 4.72813 8.35469 4.62031V4.10938C8.35469 4.04063 8.29844 3.98438 8.22969 3.98438H7.79063C7.72188 3.98438 7.66563 4.04063 7.66563 4.10938V4.625C6.55937 4.73281 5.69375 5.34375 5.69375 6.48438C5.69375 7.54063 6.47188 8.05 7.28906 8.24531L7.675 8.34375V10.5734C6.98438 10.4812 6.59688 10.1125 6.51719 9.61563C6.50781 9.55625 6.45469 9.5125 6.39375 9.5125H5.67188C5.59844 9.5125 5.54063 9.575 5.54688 9.64844C5.61719 10.5078 6.26875 11.2984 7.65938 11.4V11.8906C7.65938 11.9594 7.71563 12.0156 7.78438 12.0156H8.22812C8.29687 12.0156 8.35312 11.9594 8.35312 11.8891L8.35 11.3938C9.57344 11.2859 10.4484 10.6313 10.4484 9.45625C10.4469 8.37188 9.75781 7.8875 8.74531 7.6375ZM7.67344 7.38438C7.58594 7.35938 7.5125 7.33594 7.43906 7.30625C6.91094 7.11562 6.66563 6.80781 6.66563 6.41094C6.66563 5.84375 7.09531 5.52031 7.67344 5.44688V7.38438ZM8.34844 10.5781V8.48906C8.39687 8.50312 8.44062 8.51406 8.48594 8.52344C9.225 8.74844 9.47344 9.06094 9.47344 9.54062C9.47344 10.1516 9.01406 10.5188 8.34844 10.5781Z" fill="#2F54EB"/>
                                        </svg>
                                        <span>{task.price ? task.price.toLocaleString() : '30 000'} KZT</span>
                                    </div>
                                    <div className={styles.taskTime}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 4.79063 4.79063 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 11.2094 11.2094 13.8125 8 13.8125Z" fill="black" fill-opacity="0.45"/>
                                            <path d="M10.7297 9.97811L8.50156 8.36718V4.5C8.50156 4.43125 8.44531 4.375 8.37656 4.375H7.625C7.55625 4.375 7.5 4.43125 7.5 4.5V8.80311C7.5 8.84374 7.51875 8.88124 7.55156 8.90467L10.1359 10.789C10.1922 10.8297 10.2703 10.8172 10.3109 10.7625L10.7578 10.1531C10.7984 10.0953 10.7859 10.0172 10.7297 9.97811Z" fill="black" fill-opacity="0.45"/>
                                        </svg>

                                        <span>{task.work_time ? task.work_time : '1 неделя'}</span>
                                    </div>
                                </div>
                                <p className={styles.subtaskDesc}>{subtask.description}</p>

                                <div className={styles.tags}>
                                    {task.tags ? task.tags : 'Менеджмент'}
                                </div>                                
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <hr style={{marginTop: 15}}/>
        </div>
    )
}


export default OrderTask