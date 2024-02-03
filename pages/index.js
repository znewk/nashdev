import Head from "next/head";
import styles from "./main.module.css"
import {useEffect, useState} from "react";
import axios from 'axios'
import HeaderMain from "../src/components/HeaderMain";
import Auth from "../src/components/Modals/Auth";
import CreateOrderFormNoReg from "../src/components/Modals/CreateOrderFormNoReg";
import {Dialog} from "primereact/dialog";
import ResetPasswordDialog from "../src/components/Modals/ResetPassword";
import CreateOrderForm from "../src/components/Modals/CreateOrderForm";

const Index = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [createOrderShow, setCreateOrderShow] = useState(false);
    const [isResetPasswordVisible, setIsResetPasswordVisible] = useState(false);

    const changeModalShowState = (isAuthVisible, isCreateOrderVisible, isResetPasswordVisible = false) => {
        setIsModalVisible(isAuthVisible);
        setCreateOrderShow(isCreateOrderVisible);
        setIsResetPasswordVisible(isResetPasswordVisible);
    };

 

    return(
        <div>
            <Head>
                <title>NASHDEV - Главная</title>
                {/* <link rel="icon" href="/logo.png" /> */}
            </Head>


            <div>
                <HeaderMain changeModalShowState={changeModalShowState} />
                <Auth isVisible={isModalVisible} onHide={() => changeModalShowState(false, false, false)} onForgotPassword={() => changeModalShowState(false, false, true)} />            <ResetPasswordDialog isResetVisible={isResetPasswordVisible} onHideReset={() => setIsResetPasswordVisible(false)} />
                <Dialog visible={createOrderShow} onHide={() => setCreateOrderShow(false)} draggable={false}>
                <CreateOrderFormNoReg changeModalShowState={changeModalShowState} />
                </Dialog>
            </div>

            <section className="bg-gradient-to-r from-white from-10% via-[#a6fee7] via-30%  to-white to-90%">
                <div className="h-screen flex items-center">
                <div className="text-center mx-auto">
                    <h1 className="text-6xl font-black">
                    Лучшие IT-специалисты
                    <p className="mt-4">для вашего проекта</p>
                    </h1>
                    <h2 className="text-2xl mt-9">
                    <p>Напишем техническое задание, подберем команду</p>{" "}
                    <p className="mt-1">профессионалов и обеспечим полное управление</p>{" "}
                    <p className="mt-1">проектом за оптимальную цену</p>
                    </h2>
                    <button className="bg-[#333333] text-white px-5 py-2 rounded-full hover:bg-[#88ffdb] mt-7 h-20w-20 w-52">
                    Оставить Заявку
                    </button>
                    <p className="mt-6">
                    <img src="/nashdev_main/Group_337.png" alt="Hero section photo" />
                    </p>
                </div>
                </div>
            </section>

            <section className="bg-[#333333]">
                <div className="  flex items-center">
                <div className="mx-auto text-white text-center">
                    <h2 className="text-5xl text-center mt-14">Какую боль мы закрываем</h2>
                    <div className="lg:grid lg:grid-cols-2 grid-cols-1 gap-40 lg:gap-14 ">
                    <div className="flex items-center mt-4 ml-4 ">
                        <img src="/nashdev_main/section_2/5.png" className="w-16 h-16" alt="Разработка" />{" "}
                        <h2 className="text-2xl ml-4 ">Разработка IT решения</h2>{" "}
                    </div>
                    <div className="flex items-center mt-4 ml-4">
                        <img src="/nashdev_main/section_2/Group_82.png" className="w-16 h-16" alt="Проекты" />{" "}
                        <h2 className="text-2xl ml-4">Управление Проектом</h2>{" "}
                    </div>
                    <div className="flex items-center mt-4 ml-4">
                        <img src="/nashdev_main/section_2/2.png" className="w-16 h-16" alt="IT специалисты" />{" "}
                        <h2 className="text-2xl ml-4">Проверенные специалисты</h2>{" "}
                    </div>
                    <div className="flex items-center mt-4 ml-4">
                        <img src="/nashdev_main/section_2/3.png" className="w-16 h-16" alt="техническое задание" />{" "}
                        <h2 className="text-2xl ml-4">Чёткое техническое задание</h2>{" "}
                    </div>
                    <div className="flex items-center mt-4  ml-4">
                        <img src="/nashdev_main/section_2/5.png" className="w-16 h-16" alt="договора" />{" "}
                        <h2 className="text-2xl ml-4">Составление договоров</h2>{" "}
                    </div>
                    <div className="flex items-center mt-4 ml-4">
                        <img src="/nashdev_main/section_2/Group_84.png" className="w-16 h-16" alt="Тестирование" />{" "}
                        <h2 className="text-2xl ml-4">Тестирование продукта</h2>{" "}
                    </div>
                    </div>
                    <div className="flex justify-center items-center p-12">
                    <button className="bg-[#01f3a9] text-white px-5 py-2 rounded-full hover:bg-[#88ffdb] ">
                        Заказать Услугу
                    </button>
                    </div>
                </div>
                </div>
            </section>

            <section className="bg-[#f5f5f5f5]">
                <div className="flex items-center">
                    <div className="mx-auto text-black text-center p-8">
                        <h2 className="text-5xl text-center ">Безопасно, качественно без переплат</h2>
                        <div className="flex justify-center items-center text-left p-8">
                            <img src="/nashdev_main/section_3/1.png" class="w-16 h-16" alt="Программисты" />
                            <h2 className="text-4xl ml-4">Проверенные IT-специалисты<br/><span class="text-lg">Подберем лучших разработчиков с необходимыми навыками и опытом  </span></h2>
                        </div>
                        <div className="flex justify-center items-center text-left p-8">
                            <img src="/nashdev_main/section_3/2.png" class="w-16 h-16" alt="Качество" />
                            <h2 className="text-4xl ml-4">Контроль качества<br/><span class="text-lg">Подберем лучших разработчиков с необходимыми навыками и опытом  </span></h2>
                        </div>
                        <div className="flex justify-center items-center text-left p-8">
                            <img src="/nashdev_main/section_3/3.png" class="w-16 h-16" alt="Бюджет" />
                            <h2 className="text-4xl ml-4">Экономия бюджета <br/><span class="text-lg">Подберем лучших разработчиков с необходимыми навыками и опытом  </span></h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#ffffff]">
                <div className="mx-auto text-black text-center">
                    <div className="container mx-auto w-full">
                        <div className="relative wrap overflow-hidden p-10">
                            <h2 className="text-6xl"> Как мы работаем?</h2>

                            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>

                            {/* right timeline */}
                            <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                                </div>
                                <div className="mt-10 order-1 bg-[#25d4d4] rounded-lg shadow-xl w-5/12 px-6 py-4">
                                    <h3 className="mb-3 font-bold text-gray-800 text-xl">Оставьте заявку</h3>
                                    <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Опишите простыми словами вашу идею или задачу.</p>
                                </div>
                            </div>

                            {/* left timeline */}
                            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                                </div>
                                <div className="order-1 bg-[#01f3a9] rounded-lg shadow-xl w-5/12 px-6 py-4">
                                    <h3 className="mb-3 font-bold text-white text-xl">С вами свяжется наш менеджер</h3>
                                    <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Дайте ответы на вопросы для составления описания задач для разработчиков.</p>
                                </div>
                            </div>

                            {/* right timeline */}
                            <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                                </div>
                                <div className="order-1 bg-[#25d4d4] rounded-lg shadow-xl w-5/12 px-6 py-4">
                                    <h3 className="mb-3 font-bold text-gray-800 text-xl ">Оценка проекта и подбор кадров</h3>
                                    <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Получите коммерческое предложение с ценами, списком специалистов и сроками реализации.</p>
                                </div>
                            </div>

                            {/* left timeline */}
                            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
                                </div>
                                <div className="order-1 bg-[#01f3a9] rounded-lg shadow-xl w-5/12 px-6 py-4">
                                    <h3 className="mb-3 font-bold text-white text-xl">Подписание договора и управление проектом</h3>
                                    <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Получайте отчет о статусе проекта в любом удобном для Вас формате.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects">
                <div className="mx-auto text-black text-center">
                    <h2 className="text-5xl p-8">Примеры реализованных проектов</h2>
                </div>

                <div className="lg:grid lg:grid-cols-2 grid-cols-1 gap-6 mt-14">
                    <div className="container bg-gray-200 rounded-lg shadow-md lg:w-2/3 mx-auto p-5">
                        <h2 className="text-2xl">Платформа для венчурного фонда Bglobal</h2>
                        <h2>Система предназначена для стартапов и предпринимателей. Позволяет пользователю ознакомиться со всеми мероприятиями заказчика, подать заявку, ознакомиться с проектами стартапов.</h2>
                        <img src="/nashdev_main/projects/Bglobal.PNG" className="w-[100%] h-52" alt="Bglobal проект" />
                    </div>
                    <div className="bg-gray-200 p-3 rounded-lg shadow-md lg:w-2/3 mx-auto">
                        <h2 className="text-2xl">Интернет-магазин зубной пасты Argymax</h2>
                        <h2>На сайте реализованы каталог, карточка товара, возможность добавления товара в корзину, оформление заказа и окно быстрого просмотра товара.</h2>
                        <img src="/nashdev_main/projects/2.jpg" className="w-[100%] h-60" alt="Интернет-магазин" />
                    </div>
                    <div className="container bg-gray-200 p-4 rounded-lg shadow-md lg:w-2/3 mx-auto">
                        <h2 className="text-2xl">Система регулирования отчетности заводов</h2>
                        <h2>Внутренняя система регулирования отчетности заводов по переработке всторсырья г. Кызылорда.</h2>
                        <img src="/nashdev_main/projects/3.png" className="w-[100%] h-60" alt="Автоматизация всторсырья" />
                    </div>
                    <div className="container bg-gray-200 p-3 rounded-lg shadow-md lg:w-2/3 mx-auto">
                        <h2 className="text-2xl">Сайт Алматинского Корейского национального центра</h2>
                        <h2>Информационный сайт для общественной организации с целью расширения связей и просвещения в корейскую культуру.</h2>
                        <img src="/nashdev_main/projects/4.png" className="w-[100%] h-60" alt="Сайт Корейского национального центра" />
                    </div>
                </div>
            </section>

            <section className="bg-cover bg-center h-[60%] section-bg flex items-center mt-12 w-[100%] bg-gradient-to-r from-white from-10% via-[#a6fee7] via-30% to-white to-90%">
                <div className="mx-auto text-black text-center">
                    <h2 className="mx-auto text-3xl md:text-5xl text-black p-5">Поделитесь идеей или задачей и мы предложим ее решение</h2>
                    <h2 className="text-2xl text-black p-3">Оставьте контакты и наш Project Manager свяжется с вами</h2>
                    <button className="bg-[#01f3a9] text-white px-5 py-2 rounded-full hover:bg-[#88ffdb] w-44 h-12 p-4">Заказать Услугу</button>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                    <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-5xl">Наши Партнеры</h2>
                    <div className="grid grid-cols-3 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-5 dark:text-gray-400">
                        <a href="#" className="flex justify-center items-center">
                            <img src="/nashdev_main/companies/__1.png" alt="alem school логотип" />
                        </a>
                        <a href="#" className="flex justify-center items-center">
                            <img src="/nashdev_main/companies/__2022-12-02__135730.png" alt="skillbox логотип" />
                        </a>
                        <a href="#" className="flex justify-center items-center">
                            <img src="/nashdev_main/companies/__2022-12-02__135959.png" alt="geekbrains логотип" />
                        </a>
                        <a href="#" className="flex justify-center items-center">
                            <img src="/nashdev_main/companies/__2022-12-02__140051.png" alt="lerna логотип" />
                        </a>
                        <a href="#" className="flex justify-center items-center w-full sm:w-auto">
                            <img src="/nashdev_main/companies/__2022-12-02__140536.png" alt="Нетология логотип" />
                        </a>
                    </div>
                </div>
            </section>

            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md" id="contact">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Опишите Вашу задачу</h2>
                    <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">и мы обязательно подберём для вас подходящее решение</p>
                    <form action="#" class="space-y-8">
                    <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Номер Телефона</label>
                        <input type="text" id="phone" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+7 999 999 9999" required />
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Задача</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Опишите вашу задачу в двух словах"></textarea>
                    </div>
                    <div class="flex justify-center items-center">
                        <button type="submit" class="bg-[#01f3a9] py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-c sm:w-fit hover:bg-success-800 focus:ring-4 focus:outline-none focus:ring-success-300 dark:bg-success-600 dark:hover:bg-success-700 dark:focus:ring-success-800">Отправить сообщение</button>
                    </div>
                    </form>
                </div>
                </section>
        </div>
    )
}

export default Index;