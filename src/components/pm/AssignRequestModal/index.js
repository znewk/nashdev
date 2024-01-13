import React, { useState } from 'react';
import styles from './style.module.css';
import { Form, Input, Upload, Button, Select } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import Tags from '../../tags';
import { Dialog } from "primereact/dialog";
import PmAPI from '../../../api/pm';

const { Option } = Select;

const AssignRequestModal = ({ changeModalShowState, order }) => {
    const [showCloseModal, setShowCloseModal] = useState(false);
    const token = localStorage.getItem('token');
    const API = new PmAPI()

    const [assignStatusMessage, setAssignStatusMessage] = useState("")
    const [submited, setSubmited] = useState(false)

    const handleSumbit = async (id) => {
        const response = await API.assignManagerToRequest(id)

        console.log(response)

        if(response.message = "Менеджер назначен на заявку"){
            setAssignStatusMessage("Менеджер назначен на заявку")
        } else if (response.message = "Менеджер уже откликнулся на этот заказ") {
            setAssignStatusMessage("Менеджер уже откликнулся на этот заказ")
        }
        setSubmited(true)
    }

    return (
        <div className={styles.container}>
            {
                assignStatusMessage == "" || assignStatusMessage == "Менеджер назначен на заявку" ? (
                    <p>
                        Теперь это ваш заказ. Для того чтобы начать работу над ним 
                        вам необходимо прописать задание, которое позволит найти исполнителей под расписанные задачи. <br/><br/>
                        На написание технического задания вам дается <b>3 дня</b>. 
                        Если вы не успеете за это время, заказ автоматически попадет снова на биржу. Данный заказ теперь находится в разделе 
                        <b>“Мои заказы”</b> 
                    </p>
                ) : (
                    <p>
                        Упс! <br/><br/>
                        Кто-то уже взял этот заказ в работу! 
                    </p>
                )
            }
            

            {
                submited ? null : (
                    <div className={styles.footer}>
                            <span onClick={()=>changeModalShowState(false)} className={styles.close}>Отказаться от проекта</span>
                            <button className={styles.btn} onClick={()=>handleSumbit(order.id)}>Начать работу</button>
                    </div>
                )
            }
            
        </div>
    );
}

export default AssignRequestModal;