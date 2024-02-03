

import React, { useState } from 'react';
import styles from './style.module.css';
import { Form, Input, Upload, Button, Select } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import Tags from '../../tags';
import { Dialog } from "primereact/dialog";
import API_BASE_URL from '../../../../config.js'

const { Option } = Select;

const CreateOrderForm = ({ changeModalShowState }) => {


    

    const [showCloseModal, setShowCloseModal] = useState(false);
    const [phone, setPhone] = useState('');
    const [fileList, setFileList] = useState([]);
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [categoryIds, setCategoryIds] = useState([]);
    const token = localStorage.getItem('token');
    
    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        const fileList = e.fileList;
        setFileList(fileList); // Обновление состояния с выбранными файлами
        return fileList.map(file => file.originFileObj);
    };

    const prefixSelector = (
        <Select defaultValue="7" style={{ width: 70 }}>
            <Option value="7">+7</Option>
        </Select>
    );

    const handleTagsChange = (selectedTags) => {
        setCategoryIds(selectedTags);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
    
        formData.append('phone', phone);
        formData.append('description', description);
        formData.append('categoryIds', JSON.stringify(categoryIds));
        formData.append('title', title)
        fileList.forEach(file => {
            formData.append('files', file.originFileObj);
        });
    
        try {
            const response = await fetch(`${API_BASE_URL}/createRequest`, {
                method: 'POST',
                headers: {
                    // Заголовки
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });
        
            if (response.ok) {
                console.log("Заказ успешно создан");
                changeModalShowState(false);
            } else {
                console.error('Ошибка при создании заказа. Статус:', response.status);
            }
        } catch (error) {
            console.error('Ошибка при отправке формы:', error.message);
        }
    };

    return (
        <div className={styles.container}>
            <Form>
                <div className={styles.form}>
                    <h1 className={styles.formTitle}>Создание заказа</h1>
                    
                    <Form.Item
                        name="title"
                        rules={[{ required: true, message: 'Пожалуйста, введите наименование заказа!' }]}
                    >
                        <Input
                            placeholder="Наименование Заказа"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{ marginBottom: "20px" }}
                        />
                    </Form.Item>

                    <Form.Item name="categories">
                        <Tags onChange={handleTagsChange} />
                    </Form.Item>

                    <Form.Item
                        name="description"
                        rules={[{ required: true, message: 'Пожалуйста, опишите вашу задачу!' }]}
                    >
                        <Input.TextArea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        name="upload"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload name="logo" listType="text" onChange={normFile}>
                            <Button icon={<UploadOutlined />}>Прикрепить файл</Button>
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        rules={[{ required: true, message: 'Пожалуйста, введите ваш телефон!' }]}
                    >
                        <Input
                            addonBefore={prefixSelector}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={{ width: '100%' }}
                        />
                    </Form.Item>

                    <div className={styles.footer}>
                        <Button type="primary"  style={{ background: "#36FFB9" }} onClick={handleSubmit}>Отправить заявку</Button>
                        <span onClick={() => setShowCloseModal(true)} className={styles.close}>Создать заказ позже</span>
                    </div>
                </div>
            </Form>
            

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
    );
}

export default CreateOrderForm;