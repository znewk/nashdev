import styles from './style.module.css'
import {Image} from "react-bootstrap";
import Link from "next/link";
import { OverlayPanel } from 'primereact/overlaypanel';
import { useRef, useState, useEffect } from 'react';
import { Button, Dropdown, Space } from 'antd';
import { useRouter } from 'next/router';

const Header = ({changeModalShowState, ...props}) => {
    const op = useRef(null);

    const [user, setUser] = useState('')
    const router = useRouter()

    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])


    const logOut = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')

        router.push('/')
    }


    const items = [
        // {
        //     key: '1',
        //     label: (
        //         <a rel="noopener noreferrer" href="/orders">
        //             Биржа
        //         </a>
        //     ),
        // },
        {
            key: '2',
            label: (
                <a rel="noopener noreferrer" href="/customer/orders/my-orders">
                    Мои заказы
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a rel="noopener noreferrer" href="/customer/cards">
                    Способы оплаты
                </a>
            ),
        },
        {
            key: '4',
            label: (
                <a rel="noopener noreferrer" href="/customer/edit">
                    Настройки
                </a>
            ),
        },
        {
            key: '5',
            label: (
                <a rel="noopener noreferrer" href="/customer/faq">
                    FAQ
                </a>
            ),
        },
        {
            key: '6',
            label: (
                <a rel="noopener noreferrer" href="/customer/contactus">
                    Поддержка
                </a>
            ),
        },
        {
            key: '7',
            label: (
                <span onClick={()=>{changeModalShowState(true)}}>
                    Создать заказ
                </span>
            ),
        },
    ];
    return (
        <header className={styles.header}>
            <Link href={'/'}>
                <Image className={styles.logo} src={'/nashdev.png'}/>
            </Link>

            <div className={styles.menu}>
               <button className={styles.button} onClick={()=>{changeModalShowState(true)}}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                       <path d="M10.875 7.5H8.5V5.125C8.5 5.05625 8.44375 5 8.375 5H7.625C7.55625 5 7.5 5.05625 7.5 5.125V7.5H5.125C5.05625 7.5 5 7.55625 5 7.625V8.375C5 8.44375 5.05625 8.5 5.125 8.5H7.5V10.875C7.5 10.9438 7.55625 11 7.625 11H8.375C8.44375 11 8.5 10.9438 8.5 10.875V8.5H10.875C10.9438 8.5 11 8.44375 11 8.375V7.625C11 7.55625 10.9438 7.5 10.875 7.5Z" fill="black" fill-opacity="0.88"/>
                       <path d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 4.79063 4.79063 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 11.2094 11.2094 13.8125 8 13.8125Z" fill="black" fill-opacity="0.88"/>
                   </svg>
                   <span className={styles.buttonText}>Создать заказ</span>
               </button>


                <div className={styles.profileBlock} onMouseEnter={((e) => op.current.toggle(e))}>
                    <div className={styles.profileImgBody}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M11.737 10.4398C11.4791 9.82895 11.1048 9.27405 10.635 8.80605C10.1667 8.33671 9.61186 7.96251 9.00123 7.7041C8.99576 7.70137 8.99029 7.7 8.98482 7.69727C9.83658 7.08203 10.3903 6.07988 10.3903 4.94922C10.3903 3.07617 8.87271 1.55859 6.99967 1.55859C5.12662 1.55859 3.60904 3.07617 3.60904 4.94922C3.60904 6.07988 4.16275 7.08203 5.01451 7.69863C5.00904 7.70137 5.00357 7.70273 4.99811 7.70547C4.38561 7.96387 3.836 8.33438 3.36432 8.80742C2.89497 9.27578 2.52077 9.83058 2.26236 10.4412C2.00851 11.039 1.8716 11.6799 1.85904 12.3293C1.85868 12.3439 1.86124 12.3584 1.86657 12.372C1.8719 12.3856 1.8799 12.398 1.8901 12.4084C1.90029 12.4189 1.91247 12.4272 1.92592 12.4328C1.93937 12.4385 1.95382 12.4414 1.96842 12.4414H2.78873C2.84889 12.4414 2.89674 12.3936 2.89811 12.3348C2.92545 11.2793 3.34928 10.2908 4.0985 9.5416C4.87369 8.76641 5.90318 8.33984 6.99967 8.33984C8.09615 8.33984 9.12564 8.76641 9.90084 9.5416C10.6501 10.2908 11.0739 11.2793 11.1012 12.3348C11.1026 12.3949 11.1504 12.4414 11.2106 12.4414H12.0309C12.0455 12.4414 12.06 12.4385 12.0734 12.4328C12.0869 12.4272 12.099 12.4189 12.1092 12.4084C12.1194 12.398 12.1274 12.3856 12.1328 12.372C12.1381 12.3584 12.1407 12.3439 12.1403 12.3293C12.1266 11.6758 11.9913 11.04 11.737 10.4398ZM6.99967 7.30078C6.37213 7.30078 5.7815 7.05605 5.33717 6.61172C4.89283 6.16738 4.64811 5.57676 4.64811 4.94922C4.64811 4.32168 4.89283 3.73105 5.33717 3.28672C5.7815 2.84238 6.37213 2.59766 6.99967 2.59766C7.62721 2.59766 8.21783 2.84238 8.66217 3.28672C9.1065 3.73105 9.35123 4.32168 9.35123 4.94922C9.35123 5.57676 9.1065 6.16738 8.66217 6.61172C8.21783 7.05605 7.62721 7.30078 6.99967 7.30078Z" fill="white"/>
                        </svg>
                    </div>

                    <span className={styles.profileBlockTitle}>{user.name}</span>

                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="black">
                        <path d="M12.086 3.5H11.0606C10.9909 3.5 10.9252 3.53418 10.8842 3.59023L7.00005 8.94414L3.11587 3.59023C3.07486 3.53418 3.00923 3.5 2.9395 3.5H1.91411C1.82525 3.5 1.77329 3.60117 1.82525 3.67363L6.64595 10.3195C6.82095 10.5602 7.17915 10.5602 7.35279 10.3195L12.1735 3.67363C12.2268 3.60117 12.1749 3.5 12.086 3.5Z" fill=""/>
                    </svg>
                </div>
                <OverlayPanel ref={op}>
                    <Link href={'/profile'}>
                        <div >
                            <span className={styles.link}>Мой профиль</span>
                        </div>

                    </Link>
                    <Link href={'/customer/edit'}>
                        <div>
                            <span className={styles.link}>Настройки аккаунта</span>
                        </div>

                    </Link>

                    
                    <div onClick={()=>logOut()}>
                        <span className={styles.link}>Выход</span>
                    </div>
                </OverlayPanel>
            </div>

            <Dropdown
                menu={{
                    items,
                }}
                placement="bottomRight"
            >
                <Image src={'/header/menu.png'} className={styles.menuIcon}/>
            </Dropdown>
        </header>
    )
}

export default Header;