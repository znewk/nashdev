import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;

            // Показываем кнопку, если прокрутка больше, чем 100 пикселей
            if (scrolled > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Добавляем слушатель события прокрутки при монтировании компонента
        window.addEventListener('scroll', handleScroll);

        // Очищаем слушатель события при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Пустой массив зависимостей гарантирует, что эффект сработает только один раз при монтировании компонента

    const scrollToTop = () => {
        // Прокручиваем вверх страницы
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        // Анимация с использованием framer-motion
        controls.start({ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 });
    }, [isVisible, controls]);

    return (
        <motion.div
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                opacity: 0,
                y: 50,
            }}
            animate={controls}
        >
            <button onClick={scrollToTop}>Наверх</button>
        </motion.div>
    );
};

export default ScrollToTop;
