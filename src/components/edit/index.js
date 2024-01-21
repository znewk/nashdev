import React from 'react';
import { Form, Input, Button, Upload, Row, Col, Avatar } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons';
import './style.module.css'
const Edit = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const uploadButton = (
    <Button>Загрузить фото профиля</Button>
  );

  return (
    <Form
      name="profile_form"
      onFinish={onFinish}
      layout="vertical"
    >
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
          <Button type="link">Загрузить Фото Профиля</Button>

          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col xs={24} sm={8}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Пожалуйста, введите ваше имя!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Имя" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={8}>
          <Form.Item
            name="email"
            rules={[{ type: 'email', message: 'Введите корректный E-mail!' }]}
          >
            <Input prefix={<MailOutlined />} type="email" placeholder="E-mail" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col xs={24} sm={8}>
          <Form.Item
            name="phone"
          >
            <Input prefix={<PhoneOutlined />} placeholder="Контактный номер телефона" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={8} >
    <Form.Item
      name="password"
      rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль!' }]}
    >
      <Input.Password prefix={<LockOutlined />} placeholder="Пароль" />
    </Form.Item>
    <Form.Item>
    <Button>Изменить Пароль</Button>

    </Form.Item>
    </Col>
    </Row>
    </Form>
  );
};

export default Edit;