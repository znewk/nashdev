import React, { useState } from 'react';
import styles from './style.module.css';
import API_BASE_URL from '../../../../config.js'
import { Form, Input, Button, Upload, Row, Col, Avatar } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, PhoneOutlined, EditOutlined } from '@ant-design/icons';

const ChangePasswordForm = ({ changeModalShowState }) => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
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
                        <Input  placeholder="Введите текущий пароль" />
                    </div>
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                >
                    <div className={styles.inputBody}>
                        <span className={styles.inputTitle}>Подтвердите новый пароль</span>
                        <Input  placeholder="Введите текущий пароль" />
                    </div>
                </Form.Item>

                <span className={styles.message}>Должен состоять не менее чем из 8 символов и содержать буквы и цифры</span>
            
                <div className={styles.btnBody}>
                    <button className={styles.btn} type='submit'>Сохранить</button>
                </div>
            </Form>
            
        </div>
    );
}

export default ChangePasswordForm;