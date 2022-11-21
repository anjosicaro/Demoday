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
     <div className={styles.container}>
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
          <h1>
          Ícaro <br />
          Anjos
        </h1>
        </div>
        
        
        <div className={styles.aluno}>
          <img src={matheus} alt="" />
          <h1>
         Matheus <br />
          Barros
        </h1>
        </div>{" "}
        <div className={styles.aluno}>
          <img src={vitor} alt="" />
          <h1>
          Vitor <br />
          Silva
        </h1>
        </div>{" "}
        <div className={styles.aluno}>
          <img src={pedro} alt="" />
          <h1>
         Pedro  <br />
         Lazaro
        </h1>
        </div>
      </div>
      <div className={styles.img}>
        <div className={styles.aluno}>
          <img src={lucas} alt="" />
          <h1>
          Lucas <br />
          Damasceno
        </h1>
        </div>
        <div className={styles.aluno}>
            <img src={giulia} alt="" />
            <h1>
         Giulia <br />
          Santos
        </h1>
        </div>
        <div className={styles.aluno}>
          <img src={casimiro} alt="" />
          <h1>
        Casimiro <br />
          Tompson
        </h1>
        </div>
      </div>

     </div>
    </section>
  );
}

export default ProjetoPt3;
