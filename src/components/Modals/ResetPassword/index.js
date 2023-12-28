import { Dialog } from 'primereact/dialog';
import styles from './style.module.css';
import { useState } from "react";

const ResetPasswordDialog = ({ isResetVisible, onHideReset, ...props }) => {
    const [email, setEmail] = useState(''); 

    const handleEmailChange = (e) => {
        setEmail(e.target.value); // Обновляем состояние при изменении текста в поле ввода
    };

    const handleSubmit = () => {
        // Обработка отправки формы для сброса пароля
        console.log("Отправка запроса на сброс пароля для:", email);
        // Здесь должна быть логика для отправки запроса на сброс пароля
    };

    return (
        <Dialog visible={isResetVisible} onHide={onHideReset} modal style={{ width: '30vw' }}>
            <div className={styles.container}>
                <div className={styles.form}>
                    <h1 className={styles.formTitle}>Сброс пароля</h1>
                    <input 
                        className={styles.input} 
                        type="email" 
                        placeholder="Укажите ваш Email" 
                        value={email} 
                        onChange={handleEmailChange} 
                    />
                    <div className={styles.footer}>
                        <button onClick={handleSubmit} className={styles.btn}>Отправить</button>
                        <span onClick={onHideReset} className={styles.close}>Закрыть</span>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default ResetPasswordDialog;