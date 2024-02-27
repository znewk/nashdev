import axios from "axios";
import API_BASE_URL from "../../config";


class PmAPI {
    assignManagerToRequest  = async (id) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Отсутствует токен авторизации');
                return;
            }
            const headers = new Headers({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            });
    
            const requestData = {
                requestId: id
            };
            const response = await fetch(`${API_BASE_URL}/assignManagerToRequest `, {
                method: 'POST', 
                headers: headers,
                body: JSON.stringify(requestData),
            });
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
    
            const responseData = await response.json();
            return responseData
        } catch (error) {
            console.error('Ошибка при выполнении запроса', error);
            return {message: 'Менеджер уже откликнулся на этот заказ'}
        }
    };


    
    // Метод getAllRequests
    getAllRequests = async (id) => {

        const updateStatuses = (statusId) => {
            const statuses = [
                { title: 'Поиск исполнителей', status: '' },
                { title: 'Утверждение исполнителей', status: '' },
                { title: 'Оплата', status: '' },
                { title: 'В работе', status: '' },
                { title: 'Завершение', status: '' },
            ];
        
            statuses.forEach((status, index) => {
                if (index < statusId - 1) {
                    status.status = 'Успешно';
                } else if (index === statusId - 1) {
                    status.status = 'В процессе';
                }
            });
        
            return statuses;
        };


        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Отсутствует токен авторизации');
                return;
            }
            const headers = new Headers({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            });
    
            const response = await fetch(`${API_BASE_URL}/getAllRequests `, {
                method: 'POST', 
                headers: headers
            });
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
    
            const responseData = await response.json();
            
            // Обновляем каждый запрос с учетом его текущего status_id
            const updatedRequests = responseData.requests.map(request => {
                return {
                    ...request,
                    statuses: updateStatuses(request.status_id)
                };
            });
    
            console.log("Обновленные данные запросов:", updatedRequests); // Логирование обновленных данных
            return updatedRequests;
    
        } catch (error) {
            console.error('Ошибка при выполнении запроса', error);
        }
    };

    getRequestsByManager = async () => {
        const updateStatuses = (statusId) => {
            const statuses = [
                { title: 'Поиск исполнителей', status: '' },
                { title: 'Утверждение исполнителей', status: '' },
                { title: 'Оплата', status: '' },
                { title: 'В работе', status: '' },
                { title: 'Завершение', status: '' },
            ];
        
            statuses.forEach((status, index) => {
                if (index < statusId - 1) {
                    status.status = 'Успешно';
                } else if (index === statusId - 1) {
                    status.status = 'В процессе';
                }
            });
        
            return statuses;
        };
    
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Отсутствует токен авторизации');
                return;
            }
            const user = JSON.parse(localStorage.getItem('user'))
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            };
    
            const response = await axios.post(`${API_BASE_URL}/getRequestsByManager`, {
                manager_id: user.user_id
            }, { headers });
    
            // Обработка ответа
            const responseData = response.data;
    
            // Обновляем каждый запрос с учетом его текущего status_id
            const updatedRequests = responseData.requests.map(request => ({
                ...request,
                statuses: updateStatuses(request.status_id)
            }));
    
            console.log("Обновленные данные запросов:", updatedRequests); // Логирование обновленных данных
            return updatedRequests;
        } catch (error) {
            console.error('Ошибка при выполнении запроса', error);
            throw error; // Проброс ошибки для дальнейшей обработки
        }
    };

    // getAllRequests = async (id) => {
    //     try {
    //         const token = localStorage.getItem('token');
    //         if (!token) {
    //             console.error('Отсутствует токен авторизации');
    //             return;
    //         }
    //         const headers = new Headers({
    //             'Authorization': `Bearer ${token}`,
    //             'Content-Type': 'application/json',
    //         });
    
    //         const response = await fetch(`${API_BASE_URL}/getAllRequests `, {
    //             method: 'POST', 
    //             headers: headers
    //         });
    //         if (!response.ok) {
    //             throw new Error(`Ошибка HTTP: ${response.status}`);
    //         }
    
    //         const responseData = await response.json();
    //         return responseData.requests
    //     } catch (error) {
    //         console.error('Ошибка при выполнении запроса', error);
    //     }
    // };

    getManagerTasksByRequest = async (id) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Отсутствует токен авторизации');
                return;
            }
            const headers = new Headers({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            });
    
            const requestData = {
                requestId: id
            };
            const response = await fetch(`${API_BASE_URL}/getManagerTasksByRequest`, {
                method: 'POST', 
                headers: headers,
                body: JSON.stringify(requestData),
            });
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
    
            const responseData = await response.json();
            return responseData.tasks
        } catch (error) {
            console.error('Ошибка при выполнении запроса', error);
            return {message: 'Менеджер уже откликнулся на этот заказ'}
        }
    };


    createTask  = async (data) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Отсутствует токен авторизации');
                return;
            }
            const headers = new Headers({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            });
    
            const response = await fetch(`${API_BASE_URL}/createTask`, {
                method: 'POST', 
                headers: headers,
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
    
            const responseData = await response.json();
            return responseData
        } catch (error) {
            console.error('Ошибка при выполнении запроса', error);
        }
    };

    
    duplicateTask  = async (id) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Отсутствует токен авторизации');
                return;
            }
            const headers = new Headers({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            });

            const data = {
                taskId: id
            }
    
            const response = await fetch(`${API_BASE_URL}/duplicateTask`, {
                method: 'POST', 
                headers: headers,
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
    
            const responseData = await response.json();
            return responseData
        } catch (error) {
            console.error('Ошибка при выполнении запроса', error);
        }
    };

    archiveTask  = async (id) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Отсутствует токен авторизации');
                return;
            }
            const headers = new Headers({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            });

            const data = {
                taskId: id
            }
    
            const response = await fetch(`${API_BASE_URL}/archiveTask`, {
                method: 'POST', 
                headers: headers,
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
    
            const responseData = await response.json();
            return responseData
        } catch (error) {
            console.error('Ошибка при выполнении запроса', error);
        }
    };
}

export default PmAPI;