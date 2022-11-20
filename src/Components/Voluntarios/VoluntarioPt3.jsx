import styles from "../../Css/Voluntario_css/VoluntarioPt3.module.css"
import motorista2 from '../../Images/motorista2.png'
import { Link } from 'react-router-dom'

function VoluntarioPt3() {
    return (
        <section className={styles.page3}>

            <div className={styles.txt3}>
                <h1>Motorista voluntario</h1>
                <br />
                <p>
                    Muitas ongs não possuem condições de ir buscar o alimento doado, pensando nisso nós desenvolvemos a possibilidade de você que possui veiculo poder ir buscar os alimentos doados
                </p>
                <Link to="/Cadastro">se inscreva</Link>
            </div>

            <div className={styles.borda}></div>

            <div className={styles.motorista2}>
                <img src={motorista2} alt="" />
            </div>

            {/* <div className={styles.onda}>
                <img src={onda_voluntario} alt="" />
            </div> */}

        </section>
    )
}

export default VoluntarioPt3;