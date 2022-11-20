import styles from '../../Css/Home_css/HomePt3.module.css'
import PratoGrafico from '../../Images/PratoGrafico.png'


function HomePt3() {
  return (
    <section className={styles.Home}>
      <div className={styles.container_ImagemPrato}>
        <img src={PratoGrafico} alt="grafico em formato de prato" />
      </div>

      <div className={styles.container_Texto}>
        <p>A insegurança alimentar em São Paulo</p>
      </div>
    </section>
  )
}
export default HomePt3;