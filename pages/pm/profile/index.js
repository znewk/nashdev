import styles from './style.module.css'
import Header from "../../../src/components/pm/Header";
import Head from "next/head";
import ProfileHeader from "../../../src/components/profile/ProfileHeader";
const Profile = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>NASHDEV - Профиль</title>
            </Head>
            <Header/>

            <ProfileHeader/>
        </div>
    )
}

export default Profile;