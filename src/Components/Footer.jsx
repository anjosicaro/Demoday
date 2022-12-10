import styles from '../Css/Footer.module.css'
import iconeFacebook from '../Images/iconeFacebook.png'
import iconeInstagram from '../Images/iconeInstagram.png'
import iconeGithub from '../Images/iconeGithub.png'
import iconeYoutube from '../Images/iconeYoutube.png'
import Donare2 from '../Images/logoDonare2.png'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerPT1}>
                <h1>NOS SIGA EM NOSSAS REDES <br></br>SOCIAIS:</h1>
                <div>
                    <Link><img src={iconeFacebook} alt="" /></Link>
                    <Link><img src={iconeYoutube} alt="" /></Link>
                    <Link><img src={iconeGithub} alt="" /></Link>
                    <Link><img src={iconeInstagram} alt="" /></Link>
                </div>
            </div>
            
            <div className={styles.footerPT2}>
                <h2>Empresa</h2>
                <ul>
                    <li>Sobre</li>
                    <li>Leis</li>
                    <li>Voluntarioado</li>
                </ul>
            </div>
            
            <div className={styles.footerPT3}>
                <h2>Recursos</h2>
                <ul>
                    <li>Suporte</li>
                    <li>Segurança</li>
                    <li>Comentarios</li>
                    <li>Diretrizes</li>
                    <li>Desenvolvedores</li>
                </ul>
            </div>

            <div className={styles.footerPT4}>
                <h2>Politica</h2>
                <ul>
                    <li>Termos de Privacidade</li>
                    <li>configurações de cookies</li>
                    <li>Licença</li>
                    <li>Moderação</li>
                </ul>
            </div>

            <div className={styles.linha}></div>

            <div className={styles.footerPT5}>
                <div><img src={Donare2} alt="" /></div>
                <p>COMIDA BOA NO PRATO DE QUEM PRECISA</p>
            </div>
        </footer>
    )
}
export default Footer;