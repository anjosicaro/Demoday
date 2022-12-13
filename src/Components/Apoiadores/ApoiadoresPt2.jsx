import styles from "../../Css/Apoiadores_css/ApoiadoresPt2.module.css";

import Card1 from "../../Images/Card1Apoiadores.png";
import Card2 from "../../Images/Card2Apoiadores.png";
import Card3 from "../../Images/Card3Apoiadores.png";
function ApoiadoresPt2() {
  return (
    <>
      <section className={styles.Apoiadores}>
        <div className={styles.container}>
          <div className={styles.containerCards}>
            <div className={styles.card}>
              <div className={styles.icone}>
                <img src={Card1} alt="" />
              </div>
              <h4>Dimunir o desperdicio </h4>
              <p>
                alimentos em bom estado
                são disperdicados diariamente,
                os quais poderiam ir para o prato de alguém
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.icone}>
                <img src={Card2} alt="" />
              </div>
              <h4>Ajudar uma pessoa</h4>
              <p>
                Solidariedae é um ato de bondade e compreensão com o próximo
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.icone}>
                <img src={Card3} alt="" />
              </div>
              <h4>Ser reconhecido </h4>
              <p>
                Todos aqueles que se dispoem a ajudar de alguma forma recebem o selo de aprovação donare
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ApoiadoresPt2;
