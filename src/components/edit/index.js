import React from 'react';
import { Form, Input, Button, Upload, Row, Col, Avatar, Alert } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, PhoneOutlined, EditOutlined } from '@ant-design/icons';
import './style.module.css'
import {Dialog} from "primereact/dialog";
import {useState} from "react";
import ChangePasswordForm from '../Modals/ChangePasswordForm';
import ChangeEmailForm from '../Modals/ChangeEmailForm';
import ChangeNameForm from '../Modals/ChangeNameForm';
import ChangePhoneForm from '../Modals/ChangePhoneForm';

const Edit = () => {
  // const token = localStorage.getItem('token');

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };



  const [passwordModalShow, setPasswordModalShow] = useState(false)
  const changePasswordModalShow = (state) => {
    setPasswordModalShow(state)
  }

  const [emailModalShow, setEmailModalShow] = useState(false)
  const changeEmailModalShow = (state) => {
    setEmailModalShow(state)
  }

  const [nameModalShow, setNameModalShow] = useState(false)
  const changeNameModalShow = (state) => {
    setNameModalShow(state)
  }

  const [phoneModalShow, setPhoneModalShow] = useState(false)
  const changePhoneModalShow = (state) => {
    setPhoneModalShow(state)
  }

  const uploadButton = (
    <Button>Загрузить фото профиля</Button>
  );

  return (
    <Form
      name="profile_form"
      onFinish={onFinish}
      layout="vertical"
    >

      <Dialog visible={passwordModalShow} header={'Изменение пароля'} position={'center'} style={{ width: '35vw', fontFamily: 'Raleway Regular'}} onHide={() => setPasswordModalShow(false)} draggable={false} resizable={false}>
        <ChangePasswordForm/>
      </Dialog>

      <Dialog visible={emailModalShow} header={'Изменение e-mail'}  position={'center'} style={{ width: '50vw', fontFamily: 'Raleway Regular'}}  onHide={() => setEmailModalShow(false)} draggable={false} resizable={false}>
        <ChangeEmailForm/>
      </Dialog>

      <Dialog visible={nameModalShow} header={'Изменение имени пользователя'}  position={'center'} style={{ width: '50vw', fontFamily: 'Raleway Regular'}}  onHide={() => setNameModalShow(false)} draggable={false} resizable={false}>
        <ChangeNameForm/>
      </Dialog>

      <Dialog visible={phoneModalShow} header={'Изменение номера телефона'}  position={'center'} style={{ width: '50vw', fontFamily: 'Raleway Regular'}}  onHide={() => setPhoneModalShow(false)} draggable={false} resizable={false}>
        <ChangePhoneForm/>
      </Dialog>

      <Row gutter={24} align="middle" style={{ marginBottom: 24 }}>
        <Col>
          <Avatar size={64} icon={<UserOutlined />} />
        </Col>
        <Col>
          <Form.Item
            name="upload"
            valuePropName="fileList"
            style={{marginTop:15}}
          >
          <Button type="link">Загрузить фото пользователя</Button>

          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col xs={24} sm={8}>
          <Form.Item
            name="name"
          >
            <Input prefix={<UserOutlined />} placeholder="Имя" value={''} suffix={<EditOutlined onClick={()=>{changeNameModalShow(true)}}/>}/>
          </Form.Item>
        </Col>
        <Col xs={24} sm={8}>
          <Form.Item
            name="email"
          >
            <Input prefix={<MailOutlined />} type="email" placeholder="E-mail" suffix={<EditOutlined onClick={()=>{changeEmailModalShow(true)}}/>} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col xs={24} sm={8}>
          <Form.Item
            name="phone"
          >
            <Input prefix={<PhoneOutlined />} placeholder="Контактный номер телефона" suffix={<EditOutlined onClick={()=>{changePhoneModalShow(true)}}/>}/>
          </Form.Item>
        </Col>
        <Col xs={24} sm={8} >
    <Form.Item
      name="password"
    >
      <Input.Password prefix={<LockOutlined />} placeholder="Пароль" />
    </Form.Item>
    <Form.Item>
    <Button onClick={()=>{
      changePasswordModalShow(true)
    }}>Изменить Пароль</Button>

    </Form.Item>
    </Col>
    </Row>
    </Form>
  );
};

export default Edit;