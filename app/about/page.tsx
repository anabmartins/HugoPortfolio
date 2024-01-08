import Image from "next/image"
import styles from './page.module.css'
import Header from '../ui/header'

const About = () => {
    return (
        <>
        <Header />
            <div className={styles.main}>
                <div className="content">
                    <Image
                        src="/hat.svg"
                        width={96}
                        height={96}
                        alt="hat"
                    />
                    <p className={styles.title}>Sobre mim</p>
                    <p className={styles.text}>Meu nome é Hugo Mendes Miranda, sou mestrando em <strong>Educação</strong> e MBA em Diversidade e Inclusão 4.0, com ênfase em gestão pedagógica, projetos educacionais e formação de professores. Desde 2016, atuo como Acompanhante Terapêutico Autônomo, focando na ressocialização e qualidade de vida. Com habilidades em <strong>comunicação</strong> e <strong>gestão</strong>, busco contribuir para ambientes educacionais inclusivos e inovadores.</p>
                </div>
                <Image
                    src="/about-img.png"
                    width={450}
                    height={450}
                    alt="hat"
                />
            </div>
            <div className={styles.main}>
                <div className={styles.content}>
                <p className={styles.altTitle}>Acompanhamento Terapêutico (AT)</p>
                <p className={styles.subtitle}>Com foco em <strong>Jovens</strong> e <strong>Adultos</strong> com transtorno do espectro autista.</p>
                <p className={styles.text}>
                O Acompanhamento Terapêutico (AT) é uma intervenção em saúde mental que proporciona aos portadores de sofrimentos mentais, emocionais e/ou físicos, o resgate e a criação de formas de estar e agir no cotidiano e no espaço urbano. Tem sempre como objetivo a autonomia, a (re)inserção social e o respeito à singularidade de cada um. Ajuda compor uma rede terapêutica (psicólogos, psiquiatras, etc.) para obtenção de maiores resultados no tratamento.
                </p>
                </div>
                <Image
                src="/helping.png"
                width={450}
                height={450}    
                alt="help"
                />
            </div>
        </>
    )
}

export default About; 