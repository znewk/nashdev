// import styles from './style.module.css'
// import {Image} from "react-bootstrap";
// import Link from "next/link";
// import { OverlayPanel } from 'primereact/overlaypanel';
import { useRef } from 'react';
// import { Button, Dropdown, Space } from 'antd';
// import React, { useState, useEffect } from 'react';


// const HeaderMain = ({changeModalShowState, ...props}) => {
//     const op = useRef(null);
//     return (
//         <header className={styles.header}>
//             <Link href={'/'}>
//                 <Image className={styles.logo} src={'/nashdev.png'}/>
//             </Link>

//             <div className={styles.menu}>
//             <button className={styles.button} onClick={() => changeModalShowState(false, true)}>
//                 <span className={styles.buttonText}>Создать заказ</span>
//             </button>
//             <button className={styles.button} onClick={() => changeModalShowState(true, false)}>
//                 <span className={styles.buttonText}>Войти</span>
//             </button>
                
//                 <div className={styles.profileBlock}>
//                 <button className={styles.button1}>
//                 <Link href="/register">
//                 <a className={styles.buttonText1}>Регистрация</a>
//                 </Link>               
//                 </button>
//                 </div>
//             </div>
//         </header>
//     )
// }

// export default HeaderMain;




import React, { useState, useEffect } from 'react';
import { Image } from "react-bootstrap";
import Link from "next/link";
import styles from './style.module.css';

const HeaderMain = ({ changeModalShowState }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <header className={styles.header}>
            <Link href={'/'}>
                <Image className={styles.logo} src={'/nashdev.png'} />
            </Link>

            {isMobile && (
                <button onClick={toggleMenu} className={styles.hamburger}>
                    {/* Иконка гамбургера */}
                    &#9776;
                </button>
            )}

            {isMobile && isMenuVisible && (
                <div className={styles.mobileMenu}>
                    <button className={styles.button} onClick={() => changeModalShowState(false, true)}>
                        <span className={styles.buttonText}>Создать заказ</span>
                    </button>
                    <button className={styles.button} onClick={() => changeModalShowState(true, false)}>
                        <span className={styles.buttonText}>Войти</span>
                    </button>
                    <Link href="/register" className={styles.button1}>
                    <button className={styles.button1}> Зарегистрироваться </button>
                    </Link>               
                </div>
            )}

            {!isMobile && (
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
            )}
        </header>
    );
};

export default HeaderMain;

// import React, { useState, useRef } from 'react';
// import { Image } from "react-bootstrap";
// import Link from "next/link";
// import { OverlayPanel } from 'primereact/overlaypanel';
// import styles from './style.module.css';

// const HeaderMain = ({ changeModalShowState, ...props }) => {
//     const op = useRef(null);
//     const [contextMenuPosition, setContextMenuPosition] = useState(null);

//     // Функция для отображения контекстного меню
//     const showContextMenu = (event) => {
//         event.preventDefault();
//         setContextMenuPosition({ left: event.pageX, top: event.pageY });
//         op.current.toggle(event);
//     };

//     return (
//         <header className={styles.header} onContextMenu={showContextMenu}>
//             <Link href={'/'}>
//                 <Image className={styles.logo} src={'/nashdev.png'}/>
//             </Link>
//             <div className={styles.menu}>
//                     <button className={styles.button} onClick={() => changeModalShowState(false, true)}>
//                         <span className={styles.buttonText}>Создать заказ</span>
//                     </button>
//                     <button className={styles.button} onClick={() => changeModalShowState(true, false)}>
//                         <span className={styles.buttonText}>Войти</span>
//                     </button>
//                     <div className={styles.profileBlock}>
//                         <button className={styles.button1}>
//                             <Link href="/register">
//                                 <a className={styles.buttonText1}>Регистрация</a>
//                             </Link>               
//                         </button>
//                     </div>
//                 </div>
//             <OverlayPanel ref={op} style={contextMenuPosition} dismissable>
//                 <div>
//                     <Link href={'/profile'}>
//                         <a className={styles.link}>Мой профиль</a>
//                     </Link>
//                 </div>
//                 <div>
//                     <Link href={'/settings'}>
//                         <a className={styles.link}>Настройки аккаунта</a>
//                     </Link>
//                 </div>
//                 <div onClick={changeModalShowState}>
//                     <span className={styles.link}>Выход</span>
//                 </div>
//             </OverlayPanel>
//         </header>
//     );
// };

// export default HeaderMain;