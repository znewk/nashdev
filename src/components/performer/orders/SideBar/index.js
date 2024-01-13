import styles from './style.module.css'
import classnames from 'classnames'
import Link from "next/link";
import { useRouter } from 'next/router';


const SideBar = ({changeModalShowState, ...props}) => {
    const router = useRouter();
    const currentRoute = router.asPath;

    const isCurrentRoute = (route) => {
        if(currentRoute === route) {
            return true
        }

        return  false
    }

    return  (
        <div className={styles.container}>
            <div className={styles.tabs}>
                <Link href={'/customer/orders'}>
                    <div className={classnames(styles.tab, isCurrentRoute('/orders') && styles.tabAvtice)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.svg}>
                            <path d="M14.5 2.5H1.5C1.22344 2.5 1 2.72344 1 3V13C1 13.2766 1.22344 13.5 1.5 13.5H14.5C14.7766 13.5 15 13.2766 15 13V3C15 2.72344 14.7766 2.5 14.5 2.5ZM13.875 4.23125V12.375H2.125V4.23125L1.69375 3.89531L2.30781 3.10625L2.97656 3.62656H13.025L13.6938 3.10625L14.3078 3.89531L13.875 4.23125ZM13.025 3.625L8 7.53125L2.975 3.625L2.30625 3.10469L1.69219 3.89375L2.12344 4.22969L7.46094 8.37969C7.61444 8.49894 7.80328 8.56367 7.99766 8.56367C8.19203 8.56367 8.38088 8.49894 8.53438 8.37969L13.875 4.23125L14.3062 3.89531L13.6922 3.10625L13.025 3.625Z"
                                  fill={isCurrentRoute('/orders') ? '#1677FF' : '#000'} fill-opacity={!isCurrentRoute('/orders') && "0.88"}/>
                        </svg>
                        <span className={classnames(styles.tabTitle)}>Биржа</span>
                    </div>
                </Link>

                <Link href={'/customer/orders/my-orders/'}>
                    <div className={classnames(styles.tab, isCurrentRoute('/orders/my-orders') && styles.tabAvtice)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.svg}>
                            <path d="M14.25 3H5.125C5.05625 3 5 3.05625 5 3.125V4C5 4.06875 5.05625 4.125 5.125 4.125H14.25C14.3188 4.125 14.375 4.06875 14.375 4V3.125C14.375 3.05625 14.3188 3 14.25 3ZM14.25 7.4375H5.125C5.05625 7.4375 5 7.49375 5 7.5625V8.4375C5 8.50625 5.05625 8.5625 5.125 8.5625H14.25C14.3188 8.5625 14.375 8.50625 14.375 8.4375V7.5625C14.375 7.49375 14.3188 7.4375 14.25 7.4375ZM14.25 11.875H5.125C5.05625 11.875 5 11.9312 5 12V12.875C5 12.9438 5.05625 13 5.125 13H14.25C14.3188 13 14.375 12.9438 14.375 12.875V12C14.375 11.9312 14.3188 11.875 14.25 11.875ZM1.625 3.5625C1.625 3.67741 1.64763 3.79119 1.69161 3.89735C1.73558 4.00351 1.80003 4.09997 1.88128 4.18122C1.96253 4.26247 2.05899 4.32692 2.16515 4.37089C2.27131 4.41487 2.38509 4.4375 2.5 4.4375C2.61491 4.4375 2.72869 4.41487 2.83485 4.37089C2.94101 4.32692 3.03747 4.26247 3.11872 4.18122C3.19997 4.09997 3.26442 4.00351 3.30839 3.89735C3.35237 3.79119 3.375 3.67741 3.375 3.5625C3.375 3.44759 3.35237 3.33381 3.30839 3.22765C3.26442 3.12149 3.19997 3.02503 3.11872 2.94378C3.03747 2.86253 2.94101 2.79808 2.83485 2.75411C2.72869 2.71013 2.61491 2.6875 2.5 2.6875C2.38509 2.6875 2.27131 2.71013 2.16515 2.75411C2.05899 2.79808 1.96253 2.86253 1.88128 2.94378C1.80003 3.02503 1.73558 3.12149 1.69161 3.22765C1.64763 3.33381 1.625 3.44759 1.625 3.5625ZM1.625 8C1.625 8.11491 1.64763 8.22869 1.69161 8.33485C1.73558 8.44101 1.80003 8.53747 1.88128 8.61872C1.96253 8.69997 2.05899 8.76442 2.16515 8.80839C2.27131 8.85237 2.38509 8.875 2.5 8.875C2.61491 8.875 2.72869 8.85237 2.83485 8.80839C2.94101 8.76442 3.03747 8.69997 3.11872 8.61872C3.19997 8.53747 3.26442 8.44101 3.30839 8.33485C3.35237 8.22869 3.375 8.11491 3.375 8C3.375 7.88509 3.35237 7.77131 3.30839 7.66515C3.26442 7.55899 3.19997 7.46253 3.11872 7.38128C3.03747 7.30003 2.94101 7.23558 2.83485 7.19161C2.72869 7.14763 2.61491 7.125 2.5 7.125C2.38509 7.125 2.27131 7.14763 2.16515 7.19161C2.05899 7.23558 1.96253 7.30003 1.88128 7.38128C1.80003 7.46253 1.73558 7.55899 1.69161 7.66515C1.64763 7.77131 1.625 7.88509 1.625 8ZM1.625 12.4375C1.625 12.5524 1.64763 12.6662 1.69161 12.7723C1.73558 12.8785 1.80003 12.975 1.88128 13.0562C1.96253 13.1375 2.05899 13.2019 2.16515 13.2459C2.27131 13.2899 2.38509 13.3125 2.5 13.3125C2.61491 13.3125 2.72869 13.2899 2.83485 13.2459C2.94101 13.2019 3.03747 13.1375 3.11872 13.0562C3.19997 12.975 3.26442 12.8785 3.30839 12.7723C3.35237 12.6662 3.375 12.5524 3.375 12.4375C3.375 12.3226 3.35237 12.2088 3.30839 12.1027C3.26442 11.9965 3.19997 11.9 3.11872 11.8188C3.03747 11.7375 2.94101 11.6731 2.83485 11.6291C2.72869 11.5851 2.61491 11.5625 2.5 11.5625C2.38509 11.5625 2.27131 11.5851 2.16515 11.6291C2.05899 11.6731 1.96253 11.7375 1.88128 11.8188C1.80003 11.9 1.73558 11.9965 1.69161 12.1027C1.64763 12.2088 1.625 12.3226 1.625 12.4375Z" fill={isCurrentRoute('/orders/my-orders') ? '#1677FF' : '#000'} fill-opacity={!isCurrentRoute('/orders') && "0.88"}/>
                        </svg>
                        <span className={classnames(styles.tabTitle)}>Мои заказы</span>
                    </div>
                </Link>


                <div className={classnames(styles.tab)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.svg}>
                        <path d="M14.5 2.5H1.5C1.22344 2.5 1 2.72344 1 3V13C1 13.2766 1.22344 13.5 1.5 13.5H14.5C14.7766 13.5 15 13.2766 15 13V3C15 2.72344 14.7766 2.5 14.5 2.5ZM2.125 3.625H13.875V5.5H2.125V3.625ZM13.875 12.375H2.125V6.875H13.875V12.375ZM10.1719 11.375H12.75C12.8188 11.375 12.875 11.3188 12.875 11.25V10.125C12.875 10.0563 12.8188 10 12.75 10H10.1719C10.1031 10 10.0469 10.0563 10.0469 10.125V11.25C10.0469 11.3188 10.1031 11.375 10.1719 11.375Z" fill="black" fill-opacity="0.88"/>
                    </svg>
                    <span className={classnames(styles.tabTitle)}>Способы оплаты</span>
                </div>

                <div className={classnames(styles.tab)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.svg}>
                        <path d="M14.4506 9.77549L13.4272 8.90049C13.4756 8.60361 13.5006 8.30049 13.5006 7.99736C13.5006 7.69424 13.4756 7.39111 13.4272 7.09424L14.4506 6.21924C14.5278 6.15316 14.5831 6.06514 14.609 5.96689C14.635 5.86865 14.6304 5.76483 14.5959 5.66924L14.5819 5.62861C14.3001 4.84115 13.8782 4.11117 13.3366 3.47393L13.3084 3.44111C13.2427 3.36385 13.1552 3.30831 13.0572 3.28181C12.9593 3.25531 12.8557 3.2591 12.76 3.29268L11.4897 3.74424C11.0209 3.35986 10.4975 3.05674 9.93188 2.84424L9.68656 1.51611C9.66806 1.41618 9.61958 1.32424 9.54757 1.25252C9.47557 1.18079 9.38344 1.13267 9.28344 1.11455L9.24125 1.10674C8.42719 0.959863 7.57094 0.959863 6.75688 1.10674L6.71469 1.11455C6.61468 1.13267 6.52256 1.18079 6.45055 1.25252C6.37855 1.32424 6.33007 1.41618 6.31156 1.51611L6.06469 2.85049C5.50358 3.06303 4.98104 3.366 4.51781 3.74736L3.23813 3.29268C3.14245 3.25884 3.03874 3.25491 2.94077 3.28143C2.84281 3.30794 2.75524 3.36364 2.68969 3.44111L2.66156 3.47393C2.12054 4.11162 1.69871 4.84148 1.41625 5.62861L1.40219 5.66924C1.33188 5.86455 1.38969 6.0833 1.5475 6.21924L2.58344 7.10361C2.535 7.39736 2.51156 7.69736 2.51156 7.9958C2.51156 8.2958 2.535 8.5958 2.58344 8.88799L1.5475 9.77236C1.47031 9.83845 1.41506 9.92647 1.3891 10.0247C1.36314 10.123 1.36771 10.2268 1.40219 10.3224L1.41625 10.363C1.69906 11.1505 2.11781 11.8771 2.66156 12.5177L2.68969 12.5505C2.7554 12.6278 2.84298 12.6833 2.94088 12.7098C3.03878 12.7363 3.14242 12.7325 3.23813 12.6989L4.51781 12.2442C4.98344 12.6271 5.50375 12.9302 6.06469 13.1411L6.31156 14.4755C6.33007 14.5754 6.37855 14.6674 6.45055 14.7391C6.52256 14.8108 6.61468 14.8589 6.71469 14.8771L6.75688 14.8849C7.57842 15.0325 8.41971 15.0325 9.24125 14.8849L9.28344 14.8771C9.38344 14.8589 9.47557 14.8108 9.54757 14.7391C9.61958 14.6674 9.66806 14.5754 9.68656 14.4755L9.93188 13.1474C10.4973 12.9354 11.0237 12.6313 11.4897 12.2474L12.76 12.6989C12.8557 12.7328 12.9594 12.7367 13.0574 12.7102C13.1553 12.6837 13.2429 12.628 13.3084 12.5505L13.3366 12.5177C13.8803 11.8755 14.2991 11.1505 14.5819 10.363L14.5959 10.3224C14.6663 10.1302 14.6084 9.91143 14.4506 9.77549ZM12.3178 7.27861C12.3569 7.51455 12.3772 7.75674 12.3772 7.99893C12.3772 8.24111 12.3569 8.4833 12.3178 8.71924L12.2147 9.3458L13.3819 10.3442C13.2049 10.7519 12.9816 11.1378 12.7163 11.4942L11.2663 10.9802L10.7756 11.3833C10.4022 11.6896 9.98656 11.9302 9.53656 12.0989L8.94125 12.3224L8.66156 13.838C8.22027 13.888 7.77473 13.888 7.33344 13.838L7.05375 12.3192L6.46313 12.0927C6.01781 11.9239 5.60375 11.6833 5.23344 11.3786L4.74281 10.9739L3.28344 11.4927C3.01781 11.1349 2.79594 10.7489 2.61781 10.3427L3.7975 9.33486L3.69594 8.70986C3.65844 8.47705 3.63813 8.23643 3.63813 7.99893C3.63813 7.75986 3.65688 7.5208 3.69594 7.28799L3.7975 6.66299L2.61781 5.65518C2.79438 5.24736 3.01781 4.86299 3.28344 4.50518L4.74281 5.02393L5.23344 4.61924C5.60375 4.31455 6.01781 4.07393 6.46313 3.90518L7.05531 3.68174L7.335 2.16299C7.77406 2.11299 8.2225 2.11299 8.66313 2.16299L8.94281 3.67861L9.53813 3.90205C9.98656 4.0708 10.4038 4.31143 10.7772 4.61768L11.2678 5.0208L12.7178 4.50674C12.9834 4.86455 13.2053 5.25049 13.3834 5.65674L12.2163 6.65518L12.3178 7.27861ZM8.00063 5.09268C6.48188 5.09268 5.25063 6.32393 5.25063 7.84268C5.25063 9.36143 6.48188 10.5927 8.00063 10.5927C9.51938 10.5927 10.7506 9.36143 10.7506 7.84268C10.7506 6.32393 9.51938 5.09268 8.00063 5.09268ZM9.23813 9.08018C9.07582 9.24295 8.88292 9.37203 8.67055 9.45999C8.45817 9.54794 8.2305 9.59303 8.00063 9.59268C7.53344 9.59268 7.09438 9.40986 6.76313 9.08018C6.60035 8.91787 6.47127 8.72498 6.38332 8.5126C6.29536 8.30022 6.25027 8.07255 6.25063 7.84268C6.25063 7.37549 6.43344 6.93643 6.76313 6.60518C7.09438 6.27393 7.53344 6.09268 8.00063 6.09268C8.46781 6.09268 8.90688 6.27393 9.23813 6.60518C9.4009 6.76749 9.52998 6.96038 9.61793 7.17276C9.70589 7.38513 9.75098 7.61281 9.75063 7.84268C9.75063 8.30986 9.56781 8.74893 9.23813 9.08018Z" fill="black" fill-opacity="0.88"/>
                    </svg>
                    <span className={classnames(styles.tabTitle)}>Настройки</span>
                </div>


                <div className={classnames(styles.tab)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" className={styles.svg}>
                        <path d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM7 12.8125C3.79063 12.8125 1.1875 10.2094 1.1875 7C1.1875 3.79063 3.79063 1.1875 7 1.1875C10.2094 1.1875 12.8125 3.79063 12.8125 7C12.8125 10.2094 10.2094 12.8125 7 12.8125Z" fill="black" fill-opacity="0.88"/>
                        <path d="M8.74375 3.94844C8.275 3.5375 7.65625 3.3125 7 3.3125C6.34375 3.3125 5.725 3.53906 5.25625 3.94844C4.76875 4.375 4.5 4.94844 4.5 5.5625V5.68125C4.5 5.75 4.55625 5.80625 4.625 5.80625H5.375C5.44375 5.80625 5.5 5.75 5.5 5.68125V5.5625C5.5 4.87344 6.17344 4.3125 7 4.3125C7.82656 4.3125 8.5 4.87344 8.5 5.5625C8.5 6.04844 8.15625 6.49375 7.62344 6.69844C7.29219 6.825 7.01094 7.04688 6.80938 7.3375C6.60469 7.63437 6.49844 7.99063 6.49844 8.35156V8.6875C6.49844 8.75625 6.55469 8.8125 6.62344 8.8125H7.37344C7.44219 8.8125 7.49844 8.75625 7.49844 8.6875V8.33281C7.49925 8.18113 7.54574 8.03321 7.63187 7.90834C7.71799 7.78347 7.83975 7.68746 7.98125 7.63281C8.90313 7.27813 9.49844 6.46563 9.49844 5.5625C9.5 4.94844 9.23125 4.375 8.74375 3.94844ZM6.375 10.4375C6.375 10.6033 6.44085 10.7622 6.55806 10.8794C6.67527 10.9967 6.83424 11.0625 7 11.0625C7.16576 11.0625 7.32473 10.9967 7.44194 10.8794C7.55915 10.7622 7.625 10.6033 7.625 10.4375C7.625 10.2717 7.55915 10.1128 7.44194 9.99556C7.32473 9.87835 7.16576 9.8125 7 9.8125C6.83424 9.8125 6.67527 9.87835 6.55806 9.99556C6.44085 10.1128 6.375 10.2717 6.375 10.4375Z" fill="black" fill-opacity="0.88"/>
                    </svg>
                    <span className={classnames(styles.tabTitle)}>FAQ</span>
                </div>

                <div className={classnames(styles.tab)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.svg}>
                        <path d="M7.25009 8C7.25009 8.19891 7.32911 8.38968 7.46976 8.53033C7.61041 8.67098 7.80118 8.75 8.00009 8.75C8.199 8.75 8.38977 8.67098 8.53042 8.53033C8.67107 8.38968 8.75009 8.19891 8.75009 8C8.75009 7.80109 8.67107 7.61032 8.53042 7.46967C8.38977 7.32902 8.199 7.25 8.00009 7.25C7.80118 7.25 7.61041 7.32902 7.46976 7.46967C7.32911 7.61032 7.25009 7.80109 7.25009 8ZM10.3751 8C10.3751 8.19891 10.4541 8.38968 10.5948 8.53033C10.7354 8.67098 10.9262 8.75 11.1251 8.75C11.324 8.75 11.5148 8.67098 11.6554 8.53033C11.7961 8.38968 11.8751 8.19891 11.8751 8C11.8751 7.80109 11.7961 7.61032 11.6554 7.46967C11.5148 7.32902 11.324 7.25 11.1251 7.25C10.9262 7.25 10.7354 7.32902 10.5948 7.46967C10.4541 7.61032 10.3751 7.80109 10.3751 8ZM4.12509 8C4.12509 8.19891 4.20411 8.38968 4.34476 8.53033C4.48541 8.67098 4.67618 8.75 4.87509 8.75C5.074 8.75 5.26477 8.67098 5.40542 8.53033C5.54607 8.38968 5.62509 8.19891 5.62509 8C5.62509 7.80109 5.54607 7.61032 5.40542 7.46967C5.26477 7.32902 5.074 7.25 4.87509 7.25C4.67618 7.25 4.48541 7.32902 4.34476 7.46967C4.20411 7.61032 4.12509 7.80109 4.12509 8ZM14.4563 5.2875C14.1032 4.44844 13.597 3.69531 12.9517 3.04844C12.3109 2.40531 11.5501 1.8941 10.7126 1.54375C9.85321 1.18281 8.94071 1 8.00009 1H7.96884C7.02196 1.00469 6.10478 1.19219 5.24228 1.56094C4.4119 1.91488 3.65831 2.427 3.02353 3.06875C2.38446 3.71406 1.8829 4.46406 1.53603 5.3C1.17665 6.16563 0.995401 7.08594 1.00009 8.03281C1.00539 9.11792 1.26211 10.187 1.75009 11.1562V13.5312C1.75009 13.7219 1.82581 13.9047 1.96061 14.0395C2.0954 14.1743 2.27821 14.25 2.46884 14.25H4.8454C5.81461 14.738 6.88373 14.9947 7.96884 15H8.00165C8.93759 15 9.8454 14.8188 10.7001 14.4641C11.5334 14.1179 12.2913 13.6126 12.9313 12.9766C13.5767 12.3375 14.0845 11.5906 14.4392 10.7578C14.8079 9.89531 14.9954 8.97813 15.0001 8.03125C15.0048 7.07969 14.8204 6.15625 14.4563 5.2875ZM12.0954 12.1313C11.0001 13.2156 9.54696 13.8125 8.00009 13.8125H7.97353C7.03134 13.8078 6.0954 13.5734 5.26884 13.1328L5.13759 13.0625H2.93759V10.8625L2.86728 10.7312C2.42665 9.90469 2.19228 8.96875 2.18759 8.02656C2.18134 6.46875 2.77665 5.00625 3.86884 3.90469C4.95946 2.80312 6.41728 2.19375 7.97509 2.1875H8.00165C8.7829 2.1875 9.54071 2.33906 10.2548 2.63906C10.9517 2.93125 11.5767 3.35156 12.1142 3.88906C12.6501 4.425 13.072 5.05156 13.3642 5.74844C13.6673 6.47031 13.8188 7.23594 13.8157 8.02656C13.8063 9.58281 13.1954 11.0406 12.0954 12.1313Z" fill="black" fill-opacity="0.88"/>
                    </svg>
                    <span className={classnames(styles.tabTitle)}>Поддержка</span>
                </div>
            </div>

            {/*<div className={styles.hr}></div>*/}

            {/*<button className={styles.createOrder} onClick={()=>{changeModalShowState(true)}}>*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">*/}
            {/*        <path d="M10.5013 6.66602V9.99935M10.5013 9.99935V13.3327M10.5013 9.99935H13.8346M10.5013 9.99935H7.16797" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round"/>*/}
            {/*        <path d="M10.5013 18.3327C15.1037 18.3327 18.8346 14.6017 18.8346 9.99935C18.8346 5.39698 15.1037 1.66602 10.5013 1.66602C5.89893 1.66602 2.16797 5.39698 2.16797 9.99935C2.16797 14.6017 5.89893 18.3327 10.5013 18.3327Z" stroke="#1C1C1C" stroke-width="1.5"/>*/}
            {/*    </svg>*/}

            {/*    <span>Создать заказ</span>*/}
            {/*</button>*/}
        </div>
    )
}

export default SideBar;