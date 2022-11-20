import styles from "../../Css/Projeto_css/ProjetoPt3.module.css";
import icaro from "../../Images/icaro.png";
import matheus from "../../Images/matheus.png";
import vitor from "../../Images/vitor.png";
import pedro from "../../Images/pedro.png";
import lucas from "../../Images/lucas.png";
import giulia from "../../Images/giulia.png";
import casimiro from "../../Images/casimiro.png";
function ProjetoPt3() {
  return (
    <section className={styles.ProjetoPt3}>
      <div className={styles.txt}>
        <h1>
            Quem somos
        </h1>
        <p>
        Somos um grupo de jovens do Instituto PROA, durante a realização do nosso trabalho de conclusão de curso decidimos que nosso projeto seria voltado para a fome, atualmente a fome de São Paulo que vem atingendo 6,8 milhões de pessoas e nossa plataforma encontrou uma solução para esse problema.
        </p>
      </div>
      <div className={styles.img}>
        <div className={styles.aluno}>
          <img src={icaro} alt="" />
        </div>
        <div className={styles.aluno}>
          <img src={matheus} alt="" />
        </div>{" "}
        <div className={styles.aluno}>
          <img src={vitor} alt="" />
        </div>{" "}
        <div className={styles.aluno}>
          <img src={pedro} alt="" />
        </div>
      </div>
      <div className={styles.img}>
        <div className={styles.aluno}>
          <img src={lucas} alt="" />
        </div>
        <div className={styles.aluno}>
            <img src={giulia} alt="" />
        </div>
        <div className={styles.aluno}>
          <img src={casimiro} alt="" />
        </div>
      </div>
    </section>
  );
}

export default ProjetoPt3;
