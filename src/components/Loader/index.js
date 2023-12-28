import styles from './style.module.css'
import {Image} from "react-bootstrap";

const Loader = () => {
    return (
        <div className={styles.container}>
            <Image src={'/loader.png'} className={styles.loader}/>
        </div>
    )
}

export default Loader;