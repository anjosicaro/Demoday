import styles from '../../Css/PerfilOng_css/PerfilOng.module.css'
import hamburgada from '../../Images/hamburgada.png'
import PerfilOngPt2 from './PerfilOngPt2'
import PerfilOngPt3 from './PerfilOngPt3'

function PerfilOng() {
    return (
        <>
            <section className={styles.Header_invisivel}></section>
            <section className={styles.page1}>
                
            <div className={styles.card}>
              <div className={styles.foto}>
                <img src={hamburgada} alt="" />
              </div>
              <h1>Hamburgada do Bem</h1>
              <h4>Telefone:  (11) 3535-3535</h4>
              <h4>E-mail: hamburgadadobem@gmail.com</h4>
              <p>
              A hamburgada do bem é uma ong que nasceu em 2015 ,com intuito de levar amor diversão e informação para crianças em comunidades carentes.

Hoje já atendeu quase 100 mil crianças em 4 países com mais de 50 mil voluntários participantes.               </p>
            </div>
    
            </section>
            <PerfilOngPt2 />
            <PerfilOngPt3 />
        </>
    )
}

export default PerfilOng