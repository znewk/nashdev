import React, { useState } from 'react';
import styles from './style.module.css';
import API_BASE_URL from '../../../../config.js'
import { Form, Input, Button, Upload, Row, Col, Avatar } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, PhoneOutlined, EditOutlined } from '@ant-design/icons';
import SettingsAPI from '../../../api/settings.js';

const ChangeEmailForm = ({ changeModalShowState }) => {
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)

    const [newEmail, setNewEmail] = useState('')

    const [step, setStep] = useState(1)

    const API = new SettingsAPI()

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);

        if(values.newEmail == undefined) {
            setErrorMessage('Заполните поле!')
        } else {
            const result = await API.changePhone(values.newEmail)

            if(!result){
                setErrorMessage("Ошибка смены номера телефона")
                setSuccess(false)
                console.log(success)
            } else {
                setErrorMessage('')
                setSuccess(true)
                console.log(success)    
            }
        }

    };


    const firstStep = async () => {
        
    }

    return (
        <div className={styles.container}>
            <Form
                name="change_email"
                onFinish={onFinish}
                layout="vertical"
            >

                {
                    step == 1 ? (
                        <div>
                            <Form.Item
                                name="newEmail"
                            >
                                <div className={styles.inputBody}>
                                    <span className={styles.inputTitle}>E-mail</span>
                                    <Input  placeholder="Введите новый E-mail" onChange={e => {setNewEmail(e.target.value)}}/>
                                </div>
                            </Form.Item>

                            <span className={styles.errorMessage}>{errorMessage}</span> 
                            <span className={styles.message}>Мы отправим код на ваш новый e-mail</span>
                        
                            <div className={styles.btnBody}>
                                <button className={styles.btn} onClick={firstStep()}>Отправить код</button>
                            </div>
                        </div>
                    ) : null
                }

                {
                    step == 2 ? (
                        <div>
                            <Form.Item
                                name="verifCode"
                            >
                                <div className={styles.inputBody}>
                                    <span className={styles.inputTitle}>Введите код</span>
                                    <Input  placeholder="Введите 6-значный код" />
                                </div>
                            </Form.Item>

                            <span className={styles.errorMessage}>{errorMessage}</span> 
                            <span className={styles.message}>Проверьте письмо на своей почте</span>
                        
                            <div className={styles.btnBody}>
                                <button className={styles.btn} type='submit'>Сохранить</button>
                            </div>
                        </div>
                    ) : null
                }
                
            </Form>
            
        </div>
    );
}

export default ChangeEmailForm;