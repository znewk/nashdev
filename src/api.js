import axios from "axios";
import API_BASE_URL from '../config.js'

const serverDomain = 'https://0e71-147-30-76-116.ngrok-free.app'

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
            console.log(responseData);
        } catch (error) {
            console.error('Ошибка при выполнении запроса', error);
        }
    };


    getOrderById = async () => {
        return {
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
                    status: ''
                },
                {
                    title: 'В работе',
                    status: ''
                },
                {
                    title: 'Завершение',
                    status: ''
                }
            ],
            deadlines: '3 месяца',
            budget: '50.000₽ - 100.000₽',
            notification: {
                title: 'Оплатите заказ',
                type: 0
            },
            responses: [
                {
                    name: 'Айдарбек',
                    rating: 5,
                    feedbacks: 384,
                    deadline: '2 недели',
                    price: 30000
                },
                {
                    name: 'Айдарбек',
                    rating: 5,
                    feedbacks: 384,
                    deadline: '2 недели',
                    price: 30000
                },
                {
                    name: 'Айдарбек',
                    rating: 5,
                    feedbacks: 384,
                    deadline: '2 недели',
                    price: 30000
                }
            ],
            isNeedPayment: true
        }

    }
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