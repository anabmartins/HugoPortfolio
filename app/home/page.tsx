import Image from "next/image"
import styles from './page.module.css'

const Home = () => {
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
                            width={340}
                            height={340}
                            alt="profile" />
                    </div>
                </div>
                <Image src="/ep_arrow-up-bold.svg"
                    width={50}
                    height={50}
                    className={styles.arrowdown}
                    alt="seta" />
            </div>
        </>
    )
}

export default Home;