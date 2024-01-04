import React, { useState } from 'react';
import styles from './style.module.css'
import { Form, Input, Upload, Button, Select } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import Tags from '../../tags';
import { Dialog } from "primereact/dialog";

const { Option } = Select;

const CreateOrderFormNoReg = ({ isVissible, changeModalShowState, ...props }) => {
    const [showCloseModal, setShowCloseModal] = useState(false);

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const prefixSelector = (
        <Select defaultValue="7" style={{ width: 70 }}>
            <Option value="7">+7</Option>
        </Select>
    );
    
    return (
        
        <div className={styles.container}>

            <div className={styles.form}>
                <h1 className={styles.formTitle}>Создание заказ</h1>

                <div className={styles.infoTitleBlock}>
                        <span className={styles.infoTitle}>Выберите категорию</span>
                </div>
                <div className={styles.infoTitleBlock}>
                    <span className={styles.infoTitle}>
                        <Tags/>
                    </span>
                </div>


                <div className={styles.infoTitleBlock}>

                    <span className={styles.infoTitle}>Опишите вашу задачу</span>
                </div>


                <div className={styles.textAreaBody}>
                <Form.Item  validateStatus="">
                <Input.TextArea/>
                </Form.Item>
                </div>

                <div className={styles.file}>
                <Form.Item
                name="upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Прикрепить Файл</Button>
                </Upload>
                </Form.Item>
                </div>

                <div className={styles.infoTitleBlock} style={{marginTop: 50}}>
                    <span className={styles.infoTitle}>Номер телефона для связи</span>
                </div>
                <div className=''> 
                <Form.Item
                        name="phone"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item>
                
                </div>

                <div className={styles.footer}>
                    <button className={styles.btn}>Отправить заявку</button>
                    <span onClick={()=>setShowCloseModal(true)} className={styles.close}>Продолжить без создания заказа</span>
                </div>


            </div>


            <Dialog header="Выход из создания заказа" visible={showCloseModal} style={{ width: '25vw' }} onHide={() => setShowCloseModal(false)} draggable={false}>
                <p className={styles.desc} style={{textAlign: "center"}}>
                    Вы точно хотите выйти из создания заказала?
                    Ваша информация не сохранится.
                </p>
                <div className={styles.modalButtons}>
                    <button className={styles.decline} onClick={()=>{setShowCloseModal(false)}}>Отмена</button>
                    <button className={styles.btn} style={{padding: '10px 50px'}} onClick={()=>{setShowCloseModal(false); changeModalShowState(false)}}>Выйти</button>
                </div>
            </Dialog>
        </div>
    )
}

export default CreateOrderFormNoReg;