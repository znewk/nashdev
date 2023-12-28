import styles from './style.module.css'
import Head from "next/head";
import LoginForm from "../../src/components/auth/LoginForm";

const Auth = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>NASHDEV - Вход</title>
            </Head>

            <LoginForm/>
        </div>
    )
}

export default Auth;