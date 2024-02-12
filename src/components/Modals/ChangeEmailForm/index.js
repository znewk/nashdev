import React, { useState } from 'react';
import styles from './style.module.css';
import API_BASE_URL from '../../../../config.js'
import { Form, Input, Button, Upload, Row, Col, Avatar } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, PhoneOutlined, EditOutlined } from '@ant-design/icons';

const ChangeEmailForm = ({ changeModalShowState }) => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className={styles.container}>
            <Form
                name="change_email"
                onFinish={onFinish}
                layout="vertical"
            >
                <Form.Item
                    name="neweEmail"
                >
                    <div className={styles.inputBody}>
                        <span className={styles.inputTitle}>Введите новый E-mail</span>
                        <Input.Password  placeholder="customer@nashdev.kz" />
                    </div>
                </Form.Item>

                <span className={styles.message}>Мы отправим код на ваш новый e-mail</span>
            
                <div className={styles.btnBody}>
                    <button className={styles.btn} type='submit'>Отправить код</button>
                </div>
            </Form>
            
        </div>
    );
}

export default ChangeEmailForm;