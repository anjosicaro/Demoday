import styles from '../../Css/Home_css/HomePt4.module.css'
import { Link } from 'react-router-dom'
import SejaDoador from '../../Images/IMG_sejaDoador.png'
import SejaVoluntario from '../../Images/IMG_sejaVoluntario.png'


function HomePt4() {
    return (
        <>
            <section className={styles.Home}>
                <div className={styles.Home4Pt1}>
                    <div className={styles.container_sejaVoluntario}>
                        <div className={styles.IMG_sejaVoluntario}>
                            <img src={SejaVoluntario} alt="" />
                            <Link to="/Voluntario">Saiba Mais</Link>
                        </div>
                    </div>

                    <Link className={styles.btn_cadastro} to="/Cadastro">CADASTRO</Link>

                    <div className={styles.container_sejaDoador}>
                        <div classNmae={styles.IMG_sejaDoador}>
                            <img src={SejaDoador} alt="" />
                        </div>
                        <Link to="/Apoiadores">saiba mais</Link>

                    </div>
                </div>

                <div className={styles.Home4Pt2}>
                    <div className={styles.container_textos}>
                        <div className={styles.textoEsquerdo}>
                            <p>colabore com esse projeto e ajude quem mais precisa</p>
                        </div>
                        <div className={styles.textoDireito}>
                            <p>Seja um mercado conciente sobre o disperdicio e a fome</p>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}
export default HomePt4