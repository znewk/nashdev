import styles from './main.module.css'
import Head from "next/head";

const Error = () => {

    return (
        <div className={styles.container}>

            <Head>
                <title>Упс!</title>
                <link rel="icon" href="/icon.png" />
            </Head>
           

           <div>
                404
           </div>
        </div>
    )
}

export default Error;