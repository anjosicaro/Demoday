import styles from '../../Css/PerfilOng_css/PerfilOng.module.css'
import hamburgada from '../../Images/hamburgada.png'
import PerfilOngPt2 from './PerfilOngPt2'
import PerfilOngPt3 from './PerfilOngPt3'

function PerfilOng() {
    return (
        <>
            <section className={styles.Header_invisivel}></section>
            <section className={styles.page1}>
                <div>
                    <img className={styles.perfil} src={hamburgada} alt="" />
                </div>
    
            </section>
            <PerfilOngPt2 />
            <PerfilOngPt3 />
        </>
    )
}

export default PerfilOng