import styles from "../../Css/Cadastro_css/Cadastro.module.css";
import garota from "../../Images/garota.png";

function Cadastro() {
  return (
    <section className={styles.page}>
      <div className={styles.txt}>
        <h1>DONARE</h1>

        <p>Comida boa no prato de quem precisa</p>

        <div className={styles.img}>
          <img src={garota} alt="" />
        </div>
      </div>
      <div className={styles.cadastro}>
        <h1>Cadastro</h1>
        <div className={styles.linha}></div>
      </div>
    
    </section>
  );
}
export default Cadastro;
