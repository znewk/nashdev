import styles from './style.module.css'
import {Image} from "react-bootstrap";
import Link from "next/link";
import { OverlayPanel } from 'primereact/overlaypanel';
import { useRef } from 'react';

const HeaderMain = ({changeModalShowState, ...props}) => {
    const op = useRef(null);
    return (
        <header className={styles.header}>
            <Link href={'/'}>
                <Image className={styles.logo} src={'/nashdev.png'}/>
            </Link>

            <div className={styles.menu}>
            <button className={styles.button} onClick={() => changeModalShowState(false, true)}>
                <span className={styles.buttonText}>Создать заказ</span>
            </button>
            <button className={styles.button} onClick={() => changeModalShowState(true, false)}>
                <span className={styles.buttonText}>Войти</span>
            </button>
                
                <div className={styles.profileBlock}>
                <button className={styles.button1}>
                <Link href="/register">
                <a className={styles.buttonText1}>Зарегистрироваться</a>
                </Link>               
                </button>
                </div>
            </div>
        </header>
    )
}

export default HeaderMain;