import { Dialog } from 'primereact/dialog';
import styles from './style.module.css';
import { useRouter } from 'next/router';
import API_BASE_URL from '../../../../config.js'
import {useState} from "react";
import { Select } from 'antd'; 


const Auth = ({ isVisible, onHide, ...props }) => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); 

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const handleSubmit = async () => {
        const userData = { email, password };
        try {
            const response = await fetch(`${API_BASE_URL}/auth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log(data.user.role_id);
                localStorage.setItem('token', data.token);
    
                // Check if the user's role_id is 1 and redirect accordingly
                if (data.user.role_id === 1) {
                    router.push('/customer/orders/my-orders');
                } else if (data.user.role_id === 4) {
                    router.push('/performer/orders');
                } else if (data.user.role_id === 3) {
                    router.push('/pm/orders')
                }
            } else if (response.status === 500) {
                setErrorMessage('Неправильные данные!'); 
            } else {
                console.error('Ошибка запроса. Статус:', response.status);
            }
        } catch (error) {
            console.error('Ошибка сети:', error);
        }
    };

    return (
        <Dialog visible={isVisible} onHide={onHide} modal>
            <div className={styles.container}>
                <div className={styles.form}>
                    <h1 className={styles.formTitle}>Добро пожаловать!</h1>
                    <center>{errorMessage && <div className={styles.error}>{errorMessage}</div>} </center>
                    <input
                        className={styles.input}
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className={styles.credentialsOptions}>
                        <div className={styles.rememberMe}>
                            <input
                                id="rememberMe"
                                type="checkbox"
                                checked={rememberMe}
                                onChange={handleRememberMeChange}
                            />
                            <label htmlFor="rememberMe">Запомнить меня</label>
                        </div>
                        <span onClick={props.onForgotPassword} className={styles.forgotPassword}>
                            Забыли пароль?
                        </span>
                    </div>

                    <div className={styles.footer}>
                        <button onClick={handleSubmit} className={styles.btn}>Войти</button>
                        <span onClick={onHide} className={styles.close}>Закрыть</span>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default Auth;