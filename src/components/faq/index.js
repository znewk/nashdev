import React from 'react';
import { Collapse } from 'antd';
import './style.module.css';


const containerStyle = {
    margin: '0 auto', // Центрирование на странице
  };
const headerStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
  
  };
  
  const textStyle = {
    fontSize: '17px',
    maxWidth: '800px', // Максимальная ширина контейнера

  };

const text = "Предоставляемый персональный менеджер берет на себя ответственность за назначение задач специалистам, активное взаимодействие по рабочим вопросам и тщательный контроль за результатами."; // Ваш текст
const text2 = "На платформу NashDev каждому клиенту выделяется индивидуальный менеджер, который является единым контактным лицом для решения всех вопросов, связанных с использованием платформы";
const items = [
  {
    key: '1',
    label: <div style={headerStyle}>Кто следит за тем, чтобы специалисты выполняли свои задачи?</div>,
    children: <p style={textStyle}>{text}</p>,
  },
  {
    key: '2',
    label: <div style={headerStyle}>С кем можно связаться для решения любых вопросов на этой платформе?</div>,
    children: <p style={textStyle}>{text2}</p>,
  },
];

const FaqComponent = () => {
  return (
    <div style={containerStyle}> 

    <Collapse defaultActiveKey={['1']} ghost items={items} />
  </div>
  );
};

export default FaqComponent;