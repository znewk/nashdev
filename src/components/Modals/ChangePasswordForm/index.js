import React, { useState } from 'react';
import styles from './style.module.css';
import API_BASE_URL from '../../../../config.js'
import { Form, Input, Button, Upload, Row, Col, Avatar, Alert } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, PhoneOutlined, EditOutlined } from '@ant-design/icons';
import SettingsAPI from '../../../api/settings.js';

const ChangePasswordForm = ({ changeModalShowState }) => {

    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)

    const API = new SettingsAPI()

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);

        if(values.currentPassword == undefined || values.newPassword == undefined || values.confirmPassword == undefined){
            setErrorMessage('Заполните все поля!')
            console.log(errorMessage)
        } else if (values.currentPassword.length < 8 || values.newPassword.length < 8 || values.confirmPassword.length < 8) {
            setErrorMessage('Минимальная длина пароля 8 символов')
        } else if (values.newPassword != values.confirmPassword) {
            setErrorMessage('Пароли не совпадают!')
        } else {
            const result = await API.changePassword(values.currentPassword, values.confirmPassword)

            if(!result){
                setErrorMessage("Неверный текущий пароль!")
                setSuccess(false)
                console.log(success)
            } else {
                setErrorMessage('')
                setSuccess(true)
                console.log(success)    
            }
        }

    };

    return (
        <div className={styles.container}>
            

            <Form
                name="change_password"
                onFinish={onFinish}
                layout="vertical"
            >
                <Form.Item
                    name="currentPassword"
                >
                    <div className={styles.inputBody}>
                        <span className={styles.inputTitle}>Текущий пароль</span>
                        <Input.Password  placeholder="Введите текущий пароль" />
                    </div>
                </Form.Item>

                <Form.Item
                    name="newPassword"
                >
                    <div className={styles.inputBody}>
                        <span className={styles.inputTitle}>Новый пароль</span>
                        <Input  placeholder="Введите новый пароль" />
                    </div>
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                >
                    <div className={styles.inputBody}>
                        <span className={styles.inputTitle}>Подтвердите новый пароль</span>
                        <Input  placeholder="Введите новый пароль ещё раз" />
                    </div>
                </Form.Item>

                <span className={styles.errorMessage}>{errorMessage}</span> 
                <span className={styles.message}>Должен состоять не менее чем из 8 символов и содержать буквы и цифры</span>
            
                <Form.Item className={styles.btnBody}>
                    <Button className={styles.btn} htmlType='submit'>Сохранить</Button>
                </Form.Item>


                {
                    success ? (
                        <Alert
                            message="Пароль успешно обновлен"
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

export default ChangePasswordForm;