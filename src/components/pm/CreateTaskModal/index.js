import React, { useState } from 'react';
import styles from './style.module.css';
import { Form, Input, Upload, Button, Select } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import Tags from '../../tags';
import { Dialog } from "primereact/dialog";
import PmAPI from '../../../api/pm';
import classnames from 'classnames'

const { Option } = Select;

const CreateTaskModal = ({ changeModalShowState, order }) => {
    const [showCloseModal, setShowCloseModal] = useState(false);
    const token = localStorage.getItem('token');
    const API = new PmAPI()

    const [assignStatusMessage, setAssignStatusMessage] = useState("")
    const [submited, setSubmited] = useState(false)

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDecription] = useState('')

    const [subtaskTitle, setSubtaskTitle] = useState('')
    const [subtaskDescription, setSubtaskDescription] = useState('')

    const [subtasks, setSubtasks] = useState([])
    const [subtaskCount, setSubtaskCount] = useState(1)

    const handleSumbit = async (id) => {

        console.log('asdsadsd')
        const data = {
            title: title,
            category: category,
            description: description,
            subtasks: [{subtask_title: subtaskTitle, subtask_description: subtaskDescription}],
            request_id: id
        }

        const response = await API.createTask(data)
        console.log(response)

        changeModalShowState(false)
    }

    return (
        <div className={styles.container}>
        
            <span className={styles.id}>ID:{order.id}</span>
            

            <div className={styles.list}>
                <p className={styles.listTitle}>Опишите задачу</p>

                <div>
                    <input type={"text"} placeholder={'Название задачи*'} className={styles.input} onInput={(e) => setTitle(e.target.value)}/>
                    <input type={"text"} placeholder={'Категория задачи*'} className={styles.input} onInput={(e) => setCategory(e.target.value)}/>

                    <textarea placeholder={'Описание задачи*'} className={classnames(styles.input, styles.textarea)} onInput={(e) => setDecription(e.target.value)}>

                    </textarea>
                </div>
            </div>


            <div className={styles.list}>
                <h3 className={styles.bigTitle}>Ваши подзадачи</h3>
                <p className={styles.listTitle}>Распишите подробные действия (подзадачи), следуя которым вы сможете выполнить поставленную задачу</p>

                {Array.from({ length: subtaskCount }).map((_, index) => (
                    <div key={index}>
                        <p className={styles.listTitle}>Подзадача {index+1}</p>
                        <input
                            type="text"
                            placeholder={`Название подзадачи`}
                            className={styles.input}
                            onInput={(e) => setSubtaskTitle(e.target.value)}
                        />
                        <textarea
                            placeholder={`Описание подзадачи`}
                            className={classnames(styles.input, styles.textarea)}
                            onInput={(e) => setSubtaskDescription(e.target.value)}
                        ></textarea>
                    </div>
                ))}

                <div className={styles.createSubtaskBtn} onClick={()=>{
                    setSubtaskCount(subtaskCount+1)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M7.53125 2.375H8.46875C8.55208 2.375 8.59375 2.41667 8.59375 2.5V13.5C8.59375 13.5833 8.55208 13.625 8.46875 13.625H7.53125C7.44792 13.625 7.40625 13.5833 7.40625 13.5V2.5C7.40625 2.41667 7.44792 2.375 7.53125 2.375Z" fill="#1677FF"/>
                        <path d="M2.75 7.40625H13.25C13.3333 7.40625 13.375 7.44792 13.375 7.53125V8.46875C13.375 8.55208 13.3333 8.59375 13.25 8.59375H2.75C2.66667 8.59375 2.625 8.55208 2.625 8.46875V7.53125C2.625 7.44792 2.66667 7.40625 2.75 7.40625Z" fill="#1677FF"/>
                    </svg>
                    <span>Добавить подзадачу</span>
                </div>

                <div className={styles.footer}>
                    <button onClick={()=>changeModalShowState(false)}>Отмена</button>
                    <button onClick={()=>{handleSumbit(order.id)}}>Сохранить</button>
                </div>
            </div>
        </div>
    );
}

export default CreateTaskModal;