import Image from "next/image"
import styles from './page.module.css'

const About = () => {
    return (
        <>
            <div className={styles.main}>
                <div className="content">
                    <Image
                        src="/hat.svg"
                        width={96}
                        height={96}
                        alt="hat"
                    />
                    <p className={styles.title}>Sobre mim</p>
                    <p className={styles.text}>Me chamo Hugo Mendes Miranda, mestrando em Educação e MBA em Diversidade e Inclusão 4.0, com ênfase em gestão pedagógica, projetos educacionais e formação de professores. Desde 2016, atuo como Acompanhante Terapêutico Autônomo, focando na ressocialização e qualidade de vida. Com habilidades em comunicação e gestão, busco contribuir para ambientes educacionais inclusivos e inovadores.</p>
                </div>
                <Image
                    src="/about-img.png"
                    width={450}
                    height={450}
                    alt="hat"
                />
            </div>
        </>
    )
}

export default About; 