import Image from "next/image"
import styles from './page.module.css'

export const Home = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.card}>
                    <div className={styles.textSec}>
                        <span className={styles.ola}>olá, sou</span>
                        <h1 className={styles.name}>Hugo Mendes Miranda</h1>
                        <span className={styles.desc}>Especialista em <strong>Inclusão e Diversidade</strong> e Acompanhante Terapêutico (AT)</span>
                    </div>
                    <div className={styles.imgSec}>
                        <Image src="/perfil1.png" 
                        width={350}
                        height={350}
                        alt="profile" />
                    </div>
                        <Image src="/ep_arrow-up-bold.svg" 
                        width={40}
                        height={40}
                        className={styles.arrowdown}
                        alt="seta" />
                </div>
            </div>
        </>
    )
}