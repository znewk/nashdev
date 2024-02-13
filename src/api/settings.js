import axios from "axios";
import API_BASE_URL from '../../config.js'

class SettingsAPI {
    changePassword = async (oldPassword, newPassword) => {
        const token = localStorage.getItem('token');

        if (!token) {
            console.error('Отсутствует токен авторизации');
            return false; // или выбросить ошибку
        }

        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        try {
            const response = await axios.post(`${API_BASE_URL}/changePassword`, {
                oldPassword: oldPassword,
                newPassword: newPassword,
            }, { headers });

            return true; // Возвращаем true, если статус успешный
        } catch (error) {
            if (error.response.status === 400) {
                return false; // Возвращаем false, если статус 400
            } else {
                console.error('Ошибка при изменении пароля:', error.response.data);
                throw error; // Пробрасываем ошибку для обработки выше
            }
        }
    };


    changePhone = async (phone) => {
        const token = localStorage.getItem('token');

        if (!token) {
            console.error('Отсутствует токен авторизации');
            return false; // или выбросить ошибку
        }

        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        try {
            const response = await axios.post(`${API_BASE_URL}/changePhone`, {
                phone: phone,
            }, { headers });

            return true; // Возвращаем true, если статус успешный
        } catch (error) {
            if (error.response.status === 400) {
                return false; // Возвращаем false, если статус 400
            } else {
                console.error('Ошибка при изменении номера телефона:', error.response.data);
                throw error; // Пробрасываем ошибку для обработки выше
            }
        }
    };

    changeName = async (name) => {
        const token = localStorage.getItem('token');

        if (!token) {
            console.error('Отсутствует токен авторизации');
            return false; // или выбросить ошибку
        }

        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        try {
            const response = await axios.post(`${API_BASE_URL}/changeName`, {
                name: name,
            }, { headers });

            return true; // Возвращаем true, если статус успешный
        } catch (error) {
            if (error.response.status === 400) {
                return false; // Возвращаем false, если статус 400
            } else {
                console.error('Ошибка при изменении имени:', error.response.data);
                throw error; // Пробрасываем ошибку для обработки выше
            }
        }
    };

    sendVerificationCode = async (name) => {
        const token = localStorage.getItem('token');

        if (!token) {
            console.error('Отсутствует токен авторизации');
            return false; // или выбросить ошибку
        }

        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        try {
            const response = await axios.post(`${API_BASE_URL}/sendVerificationCode`, {}, { headers });

            return true; // Возвращаем true, если статус успешный
        } catch (error) {
            if (error.response.status === 400) {
                return false; // Возвращаем false, если статус 400
            } else {
                console.error('Ошибка при отправке кода верификации:', error.response.data);
                throw error; // Пробрасываем ошибку для обработки выше
            }
        }
    };
}

export default SettingsAPI;
