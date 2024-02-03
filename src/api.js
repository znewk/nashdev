import axios from "axios";
import API_BASE_URL from '../config.js'


class API {

    getRequestsByCreator = async () => {
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
    
            // const statusId =  1;
    
            const response = await fetch(`${API_BASE_URL}/getRequestsByCreator`, {
                method: 'POST', 
                headers: headers,
                // body: JSON.stringify({ statusId: statusId }), 
            });
    
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
    
            const responseData = await response.json();
            return responseData.requests
        } catch (error) {
            console.error('Ошибка при выполнении запроса', error);
        }
    };

    getRequestsForPm = async () => {
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
    
            const response = await fetch(`${API_BASE_URL}/getAllRequests`, {
                method: 'POST', 
                headers: headers,
            });
    
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
    
            const responseData = await response.json();
            // Фильтрация запросов, где manager пустой
            const filteredRequests = responseData.requests.filter(request => request.manager === "");
            return filteredRequests;
        } catch (error) {
            console.error('Ошибка при выполнении запроса', error);
        }
    };

    
    getApplicationResponses = async (id) => {


    try {

        
            const token = localStorage.getItem('token');

            if (!token) {
                console.error('Отсутствует токен авторизации');
                return;
            }

        const response = await fetch('https://api.nashdeveloper.kz/getApplicationResponses', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
        body: JSON.stringify({ requestId: id }) // Отправка ID в теле запроса
        });
    
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
    
        const data = await response.json();
        console.log("Полученные данные:", data);
    
        if (data.success && data.applications) {
            data.applications.forEach(application => {
                console.log(`ID: ${application.id}, Исполнитель: ${application.name}, Запрос ID: ${application.request_id}`);
                // Дополнительная обработка для каждого элемента, если необходимо
            });
        }
    
        return data.applications; // Возврат данных о заявках
    
    } catch (error) {
        console.error('Ошибка при выполнении запроса: ', error);
        return null; // Возврат null в случае ошибки
    }
}


    // getOrderById = async () => {
    //     return {
    //         id: '12203309',
    //         date: '16.02.2022',
    //         title: 'Android разработка',
    //         currentStatus: {
    //             title: 'Оплата',
    //             status: 'Ожидает'
    //         },
    //         statuses: [
    //             {
    //                 title: 'Модерация',
    //                 status: 'Успешно'
    //             },
    //             {
    //                 title: 'Поиск исполнителей',
    //                 status: 'Успешно'
    //             },
    //             {
    //                 title: 'Утверждение исполнителей',
    //                 status: 'Успешно'
    //             },
    //             {
    //                 title: 'Оплата',
    //                 status: ''
    //             },
    //             {
    //                 title: 'В работе',
    //                 status: ''
    //             },
    //             {
    //                 title: 'Завершение',
    //                 status: ''
    //             }
    //         ],
    //         deadlines: '3 месяца',
    //         budget: '50.000₽ - 100.000₽',
    //         notification: {
    //             title: 'Оплатите заказ',
    //             type: 0
    //         },
    //         responses: [
    //             {
    //                 name: 'Айдарбек',
    //                 rating: 5,
    //                 feedbacks: 384,
    //                 deadline: '2 недели',
    //                 price: '30 000 тг'
    //             },
    //             {
    //                 name: 'Айдарбек',
    //                 rating: 5,
    //                 feedbacks: 384,
    //                 deadline: '2 недели',
    //                 price: '30 000 тг'
    //             },
    //             {
    //                 name: 'Айдарбек',
    //                 rating: 5,
    //                 feedbacks: 384,
    //                 deadline: '2 недели',
    //                 price: '30 000 тг'
    //             }
    //         ],
    //         isNeedPayment: true
    //     }

    // }



// Функция для получения заказов по ID с обновлением статусов
 getOrderById = async () => {
    // Локальное определение функции updateStatuses
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
        const response = await fetch('https://api.nashdeveloper.kz/getRequestsByCreator', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();
        if (!data || !data.success) {
            return null;
        }

        // Обновляем каждый заказ с учетом его текущего status_id
        const updatedRequests = data.requests.map(request => {
            return {
                ...request,
                statuses: updateStatuses(request.status_id)
            };
        });

        console.log("Обновленные данные запросов:", updatedRequests); // Логирование обновленных данных
        return updatedRequests;

    } catch (error) {
        console.error('Ошибка при выполнении запроса: ', error);
        return null;
    }
};


    getAllOrders = async (name, password) => {
        let data = {
            name: name,
            password: password
        }

        // await axios.post(`${serverDomain}/login/`, data, { useCredentails: true })

        // status:
        // 0 - Модерация
        // 1 - Поиск исполнителей
        // 2 - Утверждение исполнителей
        // 3 - Оплата
        // 4 - В работе
        // 5 - Завершение
        //
        // subStatus:
        // 0 - Ожидает
        // 1 - В процессе
        // 2 - Успешно

        // type:
        // 0 - Оплата
        // 1 - Выберите исполнителей


        return [
            {
                id: '12203309',
                date: '16.02.2022',
                title: 'Android разработка',
                currentStatus: {
                    title: 'Оплата',
                    status: 'Ожидает'
                },
                statuses: [
                    {
                        title: 'Модерация',
                        status: 'Успешно'
                    },
                    {
                        title: 'Поиск исполнителей',
                        status: 'Успешно'
                    },
                    {
                        title: 'Утверждение исполнителей',
                        status: 'Успешно'
                    },
                    {
                        title: 'Оплата',
                        status: 'Ожидает'
                    },
                    {
                        title: 'В работе',
                        status: 'Ожидает'
                    },
                    {
                        title: 'Завершение',
                        status: 'Ожидает'
                    }
                ],
                deadlines: '3 месяца',
                budget: '50.000₽ - 100.000₽',
                notification: {
                    title: 'Оплатите заказ',
                    type: 0
                }
            },
            {
                id: '12203309',
                date: '16.02.2022',
                title: 'Android разработка',
                currentStatus: {
                    title: 'Оплата',
                    status: 'Ожидает'
                },
                statuses: [
                    {
                        title: 'Модерация',
                        status: 'Успешно'
                    },
                    {
                        title: 'Поиск исполнителей',
                        status: 'Успешно'
                    },
                    {
                        title: 'Утверждение исполнителей',
                        status: 'Успешно'
                    },
                    {
                        title: 'Оплата',
                        status: 'Ожидает'
                    },
                    {
                        title: 'В работе',
                        status: 'Ожидает'
                    },
                    {
                        title: 'Завершение',
                        status: 'Ожидает'
                    }
                ],
                deadlines: '3 месяца',
                budget: '50.000₽ - 100.000₽',
            },
            {
                id: '12203309',
                date: '16.02.2022',
                title: 'Android разработка',
                currentStatus: {
                    title: 'Модерация',
                    status: 'Ожидает'
                },
                statuses: [
                    {
                        title: 'Модерация',
                        status: 'Ожидает'
                    },
                    {
                        title: 'Поиск исполнителей',
                        status: 'Ожидает'
                    },
                    {
                        title: 'Утверждение исполнителей',
                        status: 'Ожидает'
                    },
                    {
                        title: 'Оплата',
                        status: 'Ожидает'
                    },
                    {
                        title: 'В работе',
                        status: 'Ожидает'
                    },
                    {
                        title: 'Завершение',
                        status: 'Ожидает'
                    }
                ],
                deadlines: '3 месяца',
                budget: '50.000₽ - 100.000₽',
                notification: {
                    title: 'Выберите исполнителя',
                    type: 1
                }
            },
            {
                id: '12203309',
                date: '16.02.2022',
                title: 'Android разработка',
                currentStatus: {
                    title: 'Оплата',
                    status: 'Ожидает'
                },
                statuses: [
                    {
                        title: 'Модерация',
                        status: 'Успешно'
                    },
                    {
                        title: 'Поиск исполнителей',
                        status: 'Успешно'
                    },
                    {
                        title: 'Утверждение исполнителей',
                        status: 'Успешно'
                    },
                    {
                        title: 'Оплата',
                        status: 'Ожидает'
                    },
                    {
                        title: 'В работе',
                        status: 'Ожидает'
                    },
                    {
                        title: 'Завершение',
                        status: 'Ожидает'
                    }
                ],
                deadlines: '3 месяца',
                budget: '50.000₽ - 100.000₽'
            },
        ]
    }
}

export default API;