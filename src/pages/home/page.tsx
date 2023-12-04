import Image from "next/image"
import Profile from '@/assets/img/perfil.png'

export const Home = () => {
    return (
        <>
            <div className="main">
                <div className="textSec">
                    <span>olá, sou</span>
                    <h1>Hugo Mendes Miranda</h1>
                    <span>Especialista em Educação Inclusiva</span>
                </div>
                <div className="imgSec">
                    <Image src={Profile} alt="profile" />
                </div>
            </div>
        </>
    )
}