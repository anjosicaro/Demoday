import fotografias from '../../Images/fotografias.png'
import styles from '../../Css/Voluntario_css/Voluntario.module.css'
import VoluntarioPt2 from './VoluntarioPt2'

function Voluntario() {
    return (
        <>
            <div className={styles.headerInvisivel}></div>
            <section className={styles.VoluntarioPT1}>
                <p>
                    Existem muitas formas <br></br> de ajudar o próximo
                </p>
                <div className={styles.containerFotografias}>
                    <img src={fotografias} alt="" />
                </div>
            </section>
            <VoluntarioPt2 />
        </>
    )
}

export default Voluntario;