import { useState } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import { Image } from "react-bootstrap";
import styles from './style.module.css';
import API_BASE_URL from '../../../../config.js'
import { Select } from 'antd';

const LoginForm = () => {
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [showPassword, setShowPassword] = useState(false); 
    const [error, setError] = useState('');
    const [selectedRole, setSelectedRole] = useState('');

    const roleOptions = [
        { label: 'Заказчик', value: 1 },
        { label: 'Исполнитель', value: 4 },
        { label: 'Проектный Менеджер', value: 3 },
      ];

    const goBack = () => {
        router.back(); 
    };

    const validateForm = () => {
        if (!name || !email || !password) {
            return 'Вы кое-что забыли! Чтобы зарегистрироваться, заполните все поля';
        }
        if (password.length < 8) { 
            return 'Используйте пароль сложнее';
        }
        return '';
    };

    // Функция для обработки отправки формы
    const handleRegister = async (event) => {
        event.preventDefault();
        const errorMessage = validateForm();
        if (errorMessage) {
            setError(errorMessage);
            return;
        }
        setError(''); // Предотвращаем стандартное поведение формы
    
        const userData = { name, email, password, role_id: selectedRole };
    
        try {
            // Используем переменную окружения для URL
            const response = await fetch(`${API_BASE_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
    
            if (response.ok) {
                const data = await response.json(); // Извлеките данные из ответа
                localStorage.setItem('token', data.token);
                console.log('Регистрация прошла успешно');
                router.push('/');
            } else {
                // Обработка ошибок при регистрации
                console.error('Ошибка регистрации');
            }
        } catch (error) {
            // Обработка ошибок сети и прочих ошибок
            console.error('Ошибка регистрации:', error);
        }
    };

    return (
        <div className={styles.form}>
            <div className={styles.header}>
                <button className={styles.backBtn} onClick={goBack}>
                    {/* SVG для кнопки "Назад" */}
                </button>

                <Link href={'/'}>
                    <Image src={'nashdev.png'} className={styles.logo}/>
                </Link>

                <div></div>
            </div>

            <div className={styles.formArea}>
              <center>  <h2 className={styles.formTitle}>Добро пожаловать в маркетплейс NashDev!</h2></center>

                {error && <p className={styles.errorMessage}>{error}</p>}


                <form onSubmit={handleRegister} className={styles.inputsBody}>
                    <div className={styles.inputBody}>
                        <input
                            type="text"
                            placeholder={'Имя'}
                            className={styles.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputBody}>
                        <input
                            type="email"
                            placeholder={'Email'}
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>




                    <div className={styles.inputBody}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder={'Пароль'}
                            className={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* Кнопка показа/скрытия пароля */}
                    </div>
                    
                    <div>
                    <Select
                        placeholder="Выберите роль"
                        style={{ width: '100%' }}
                        onChange={(value) => {
                            setSelectedRole(value); // Store the selected role in state
                        }}
                        >
                        {roleOptions.map((option) => (
                            <Select.Option key={option.value} value={option.value}>
                            {option.label}
                            </Select.Option>
                        ))}
                        </Select>
                    </div>


                    <div className={styles.submitBtnButton}>
                        <button type="submit" className={styles.signinBtn}>Зарегистрироваться</button>
                    </div>
                </form>
            </div>

            <div></div>
        </div>
    );
}

export default LoginForm; 