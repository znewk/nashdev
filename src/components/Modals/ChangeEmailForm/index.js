import React, { useState } from 'react';
import styles from './style.module.css';
import API_BASE_URL from '../../../../config.js'
import { Form, Input, Button, Upload, Row, Col, Avatar, Alert } from 'antd';
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

        if(false) {
            setErrorMessage('Заполните поле!')
        } else {
            if(step == 1) {
                if(values.newEmail == undefined) {
                    setErrorMessage('Заполните поле!')
                } else {
                    console.log('newEmaIL: ', values.newEmail);

                    const result = await API.sendVerificationCode()
    
                    if(!result){
                        setErrorMessage("Ошибка отправки кода верификации")
                        setSuccess(false)
                        console.log(success)
                    } else {
                        setErrorMessage('')
                        setStep(2)  
                    }
                }
                
            } else {
                console.log(newEmail)
                if(values.verifCode == undefined){
                    setErrorMessage('Заполните все поля!')
                } else {
                    const result = await API.changeEmail(values.newEmail, values.verifCode)

                    if(!result){
                        setErrorMessage("Неверный код верификации")
                        setSuccess(false)
                        console.log(success)
                    } else {
                        setErrorMessage('')
                        setSuccess(true)
                        console.log(success)
                        setStep(2)  
                    }
                }
            }
        }

    };


    const firstStep = async () => {
        console.log(newEmail)
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
                            <span className={styles.message}>Мы отправим код на ваш текущий e-mail для подтверждения личности</span>
                        
                            <div className={styles.btnBody}>
                                <Button className={styles.btn} htmlType='submit'>Отправить код</Button>
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
                            <span className={styles.message}>Код успешно отправлен на Вашу почту, проверьте ящик</span>
                        
                            <div className={styles.btnBody}>
                                <button className={styles.btn} type='submit'>Сохранить</button>
                            </div>
                        </div>
                    ) : null
                }
                {
                    success ? (
                        <Alert
                            message="Номер успешно обновлен"
                            type="success"
                            showIcon
                            closeable   
                        />
                    ) : null
                }
            </Form>
            
        </div>
    );
}

export default ChangeEmailForm;