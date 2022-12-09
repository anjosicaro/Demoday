import { Link } from 'react-router-dom'
import styles from '../Css/Header.module.css'
import setaPraBaixo from '../Images/setaPraBaixo.png'

// import Logo2 from '../Images/Logo2.png'
import logoDonare from '../Images/logoDonare.png'
function Header() {
    return (
        <header>
            <div className={styles.logo}>
                {/* <Link to="/"><img src={logo} alt="Logo" /></Link> */}
                <Link to="/"><img src={logoDonare} alt="Logo" target={'_top'} /></Link>
            </div>
            <nav className={styles.menu}>
                <ul>
                    <li><Link to="/Projeto" target={'_top'}>Projeto</Link></li>
                    <li><Link to="/Instituicoes" target={'_top'}>Instituições</Link></li>
                    <li><Link to="/Voluntario" target={'_top'}>Voluntário</Link></li>
                    <li><Link to="/Apoiadores" target={'_top'}>Apoiadores</Link></li>
                    <div className={styles.menuDropdowns}>
                        <ul>
                            <li>
                                Meu Perfil
                                <div>
                                    <Link to="/cadastro">Faça seu cadastro</Link>
                                    <Link to="/login">entrar no meu perfil</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </ul>
                {/* <Link><button className={styles.btn}>Doar</button></Link> */}
            </nav>
        </header>
    )
}

export default Header
