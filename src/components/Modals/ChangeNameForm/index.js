import React, { useState } from 'react';
import styles from './style.module.css';
import API_BASE_URL from '../../../../config.js'
import { Form, Input, Button, Upload, Row, Col, Avatar, Alert } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, PhoneOutlined, EditOutlined } from '@ant-design/icons';
import SettingsAPI from '../../../api/settings.js';

const ChangeNameForm = ({ changeModalShowState }) => {

    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)

    const API = new SettingsAPI()

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);

        if(values.name == undefined) {
            setErrorMessage('Заполните поле!')
        } else {
            const result = await API.changeName(values.name)

            if(!result){
                setErrorMessage("Ошибка смены имени пользователя")
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
                name="change_name"
                onFinish={onFinish}
                layout="vertical"
            >

                <Form.Item
                    name="name"
                >
                    <div className={styles.inputBody}>
                        <span className={styles.inputTitle}>Имя</span>
                        <Input  placeholder="Введите новое имя" />
                    </div>
                </Form.Item>
            
                <Form.Item className={styles.btnBody}>
                    <Button className={styles.btn} htmlType='submit'>Сохранить</Button>
                </Form.Item>


                {
                    success ? (
                        <Alert
                            message="Имя успешно обновлено"
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

export default ChangeNameForm;