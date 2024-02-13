import React, { useState } from 'react';
import styles from './style.module.css';
import API_BASE_URL from '../../../../config.js'
import { Form, Input, Button, Upload, Row, Col, Avatar, Alert } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, PhoneOutlined, EditOutlined } from '@ant-design/icons';
import SettingsAPI from '../../../api/settings.js';

const ChangePhoneForm = ({ changeModalShowState }) => {

    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)

    const API = new SettingsAPI()

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);

        if(values.phone == undefined) {
            setErrorMessage('Заполните поле!')
        } else {
            const result = await API.changePhone(values.phone)

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

    return (
        <div className={styles.container}>
            

            <Form
                name="change_phone"
                onFinish={onFinish}
                layout="vertical"
            >

                <Form.Item
                    name="phone"
                >
                    <div className={styles.inputBody}>
                        <span className={styles.inputTitle}>Номер телефона</span>
                        <Input  placeholder="Введите новый номер телефона" />
                    </div>
                </Form.Item>

                <span className={styles.errorMessage}>{errorMessage}</span> 
            
                <Form.Item className={styles.btnBody}>
                    <Button className={styles.btn} htmlType='submit'>Сохранить</Button>
                </Form.Item>


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

export default ChangePhoneForm;