import { Dialog } from 'primereact/dialog'; // Убедитесь, что это импортировано
import styles from './style.module.css';
import { useState } from "react";
import classnames from "classnames";
import {Image} from "react-bootstrap";

const Pay = () => {

    const [step, setStep] = useState(1)
    const [choosedPaymentVariant, setChoosedPaymentVariant] = useState('')
    const [toPayment, setToPayment] = useState(false)

    const goToNextStep = () => {
        setStep(step+1)
    }
    const goBackStep = () => {
        setStep(step-1)
    }

    return (
           <div className={styles.container}>
               {
                   step == 1 && (
                       <div className={styles.form}>
                           <h1 className={styles.formTitle}>Оформление!</h1>
                           <p className={styles.formSubtitle}>Наша платформа зарезервирует оплату и переведёт её исполнителю, только когда вы одобрите и завершите проект. </p>
                           <div className={styles.line}>
                               <span className={styles.lineTitle}>Аналитика</span>
                               <span className="text-price">30 000 тг</span>
                           </div>
                           <div className={styles.line}>
                               <span className={styles.lineTitle}>Аналитика</span>
                               <span className="text-price">30 000 тг</span>
                           </div>
                           <div className={styles.line}>
                               <span className={styles.lineTitle}>Невозвращаемая сумма</span>
                               <span className="text-price">0 тг</span>
                           </div>
                           <div className={classnames(styles.line, styles.lineResult)}>
                               <span className={classnames(styles.lineTitle, styles.lineTitleResult)}>Итого</span>
                               <span className="text-price">30 000 тг</span>
                           </div>
                           <div className={styles.footer}>

                               <button className={styles.close}>Назад</button>
                               <button  className={styles.btn} onClick={goToNextStep}>Продолжить</button>

                           </div>
                       </div>
                   )
               }
               {
                   step == 2 && (
                       <div className={styles.form}>
                            <div className={styles.formHeader}>
                                <span className={styles.goBackStep} onClick={goBackStep}>Назад к оформлению заказа</span>
                            </div>

                           <h1 className={styles.formTitle}>Оплата за проект №896506</h1>

                           <h1 className={styles.formTitle}>30 000 тг</h1>


                           {
                               !toPayment ? (
                                   <div className={styles.chooseVariant}>
                                       <div className={classnames( styles.paymentVariants)}>
                                           <div className={classnames(choosedPaymentVariant == 'kaspi' && styles.choosed, styles.paymentVariant)} style={{
                                               display: 'flex',
                                               alignItems: 'center',
                                               justifyContent: 'center'
                                           }}
                                                onClick={()=> {
                                                    setChoosedPaymentVariant('kaspi')
                                                }}
                                           >
                                               <Image className={styles.kaspiQr} src={'/kaspi_qr.png'}

                                               />
                                           </div>

                                           <div className={classnames(styles.paymentVariant, choosedPaymentVariant == 'card' && styles.choosed)}
                                                onClick={()=> {
                                                    setChoosedPaymentVariant('card')
                                                }}
                                           >
                                               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                               >
                                                   <path d="M21.75 3.75H2.25C1.83516 3.75 1.5 4.08516 1.5 4.5V8.25H22.5V4.5C22.5 4.08516 22.1648 3.75 21.75 3.75ZM1.5 19.5C1.5 19.9148 1.83516 20.25 2.25 20.25H21.75C22.1648 20.25 22.5 19.9148 22.5 19.5V10.3125H1.5V19.5ZM15.0703 15.1875C15.0703 15.0844 15.1547 15 15.2578 15H19.125C19.2281 15 19.3125 15.0844 19.3125 15.1875V16.875C19.3125 16.9781 19.2281 17.0625 19.125 17.0625H15.2578C15.1547 17.0625 15.0703 16.9781 15.0703 16.875V15.1875Z" fill="#1C1C1C"/>
                                               </svg>
                                               <h1>Карта</h1>
                                           </div>
                                       </div>
                                       <button className={classnames(styles.btn, styles.paymentBtn)} onClick={()=> {
                                           setToPayment(true)
                                       }}>Оплатить 30 000 тг</button>
                                   </div>
                               ) : choosedPaymentVariant == 'kaspi' ? (
                                   <div className={styles.kaspi}>
                                        <Image src={'/kaspi.png'}/>
                                       <div className={styles.kaspiSteps}>
                                            <div className={styles.kaspiStep}>
                                                <div className={styles.kaspiStepValue}>
                                                    1
                                                </div>

                                                <span>Запустите приложение вашего банка</span>
                                            </div>

                                           <div className={styles.kaspiStep}>
                                               <div className={styles.kaspiStepValue}>
                                                   2
                                               </div>

                                               <span>Отсканируйте QR-код</span>
                                           </div>

                                           <div className={styles.kaspiStep}>
                                               <div className={styles.kaspiStepValue}>
                                                   3
                                               </div>

                                               <span>Подтвердите платёж</span>
                                           </div>
                                       </div>
                                   </div>
                               ) : (
                                   <div>
                                       <h1>карта</h1>
                                   </div>
                               )
                           }

                       </div>
                   )
               }
            </div>
    );
};

export default Pay;