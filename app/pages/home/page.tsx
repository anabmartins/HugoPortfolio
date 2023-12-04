import Image from "next/image"
import styles from './page.module.css'

export const Home = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.card}>
                    <div className={styles.textSec}>
                        <span className={styles.ola}>olá, sou</span>
                        <h1>Hugo Mendes Miranda</h1>
                        <span className={styles.desc}>Especialista em <strong>Educação Inclusiva</strong></span>
                    </div>
                    <div className={styles.imgSec}>
                        <Image src="" 
                        width={60}
                        height={60}
                        alt="profile" />
                    </div>
                </div>
            </div>
        </>
    )
}