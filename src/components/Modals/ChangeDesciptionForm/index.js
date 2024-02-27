import React, { useState } from 'react';
import styles from './style.module.css';
import API_BASE_URL from '../../../../config.js'
import { Form, Input, Button, Upload, Row, Col, Avatar, Alert } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, PhoneOutlined, EditOutlined } from '@ant-design/icons';
import SettingsAPI from '../../../api/settings.js';
import API from '../../../api.js';

const ChangeDesciprionForm = ({ changeModalShowState, desc, order }) => {

    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)

    const api = new API()

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);

        if(values.desc == undefined) {
            setErrorMessage('Заполните поле!')
        } else {

            const data = {
                requestId: order.id,
                phone: order.phone,
                description: values.desc,
                title: order.title,
                categoryIds: "[6, 1]"
            }
            const result = await api.changeRequestTitle(data)

            if(!result.success){
                setErrorMessage(result.message)
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
                name="change_desc"
                onFinish={onFinish}
                layout="vertical"
            >

                <Form.Item
                    name="desc"
                >
                    <div className={styles.inputBody}>
                        <span className={styles.inputTitle}>Описание</span>
                        <Input  placeholder="Введите новое описание" />
                    </div>
                </Form.Item>
            
                <Form.Item className={styles.btnBody}>
                    <Button className={styles.btn} htmlType='submit'>Сохранить</Button>
                </Form.Item>


                {
                    success ? (
                        <Alert
                            message="Описание успешно обновлено"
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

export default ChangeDesciprionForm;