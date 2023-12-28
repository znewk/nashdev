import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import Pay from '../../src/components/payment';
import styles from './style.module.css';
import Head from "next/head";

const { Title } = Typography;

const Payment = () => {
 

  return (
    <div className={styles.container}>
    <Head>
        <title>NASHDEV - Оплата</title>
    </Head>

    <Pay/>
    </div>
  );
};
    

export default Payment