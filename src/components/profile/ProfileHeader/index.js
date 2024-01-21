import styles from './style.module.css'
import {Image} from "react-bootstrap";
import Link from "next/link";

const ProfileHeader = () => {
    return (
        <div className={styles.header}>
            <div className={styles.topLine}>
                <Link href={'/pm/orders'}>
                    <span>Мои заказы - Заказчик - Алексей Иванов</span>
                </Link>

            </div>

            <div className={styles.content}>
                <div className={styles.info}>
                    <Image src={'/avatar.png'} className={styles.avatar}/>
                    <div className={styles.bio}>
                        <span className={styles.types}>Заказчик</span>
                        <h1 className={styles.name}>Алексей Иванов</h1>
                        <span className={styles.date}>На сайте с 18.07.2022</span>
                    </div>
                </div>

                <div className={styles.stats}>
                    <div className={styles.statBlock}>
                        <span className={styles.statTitle}>10</span>
                        <span>сделанных закзов</span>
                    </div>
                    <div className={styles.vr}></div>
                    <div className={styles.statBlock}>
                        <span className={styles.statTitle}>5</span>
                        <span>оставленных отзывов</span>
                    </div>
                    <div className={styles.vr}></div>
                    <div className={styles.statBlock}>
                        <span className={styles.statTitle}>0</span>
                        <span className={styles.statDesc}>жалоб на заказчика</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;