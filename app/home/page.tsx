'use client'
import Image from "next/image"
import styles from './page.module.css'
import React, { useState, useEffect } from 'react';

const Home = () => {

    const [isExpanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Define uma altura de referência (ajuste conforme necessário)
            const triggerHeight = 300;

            // Verifica se o scroll atingiu a altura de referência para expandir o card
            if (scrollY > triggerHeight && !isExpanded) {
                setExpanded(true);
            } else if (scrollY <= triggerHeight && isExpanded) {
                setExpanded(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Remove o listener ao desmontar o componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isExpanded]);

    console.log(isExpanded);
    

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