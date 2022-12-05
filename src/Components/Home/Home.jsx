import styles from "../../Css/Home_css/Home.module.css";
import HomePt2 from "./HomePt2";
import HomePt3 from "./HomePt3";
import HomePt4 from "./HomePt4";

function Home() {
  return (
    <>
      <section className={styles.Home}>
  <div className={styles.container}>
  <div className={styles.direita}>
          <div className={styles.txt}>
            <div className={styles.txt1}>
              <h3>+ DA METADE DO</h3>
              <div className={styles.brasil}>
                <h1>BRASIL</h1>
              </div>
              <h3>ESTÁ PASSANDO FOME</h3>
              <button className={styles.btn}>Voluntário</button>
            </div>
          </div>
        </div>

        <div className={styles.esquerda}>
          <div className={styles.txt}>
            <div className={styles.txt2}>
              <h3>
                Veja como você <br /> pode mudar <br />
                <span> essa realidade</span>
              </h3>
              <button className={styles.btn}>doador</button>
            </div>
          </div>
        </div>
  </div>
      </section>

      <HomePt2 />
      <HomePt3 />
      <HomePt4 />
    </>
  );
}
export default Home;
