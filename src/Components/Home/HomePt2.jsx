import styles from "../../Css/Home_css/HomePt2.module.css";

function HomePt2() {
  return (
    <section className={styles.Home}>
      <div className={styles.borda}></div>

      <div className={styles.txt}>
        <h1>Cerca de 27 milhões de toneladas de alimentos vão para o lixo todos os dias no Estado de São Paulo</h1>
        <br />
        <div className={styles.linha}></div>
        <br />
        <p>
          Os mercados e restaurantes são responsaveis por x quantidades de alimentos em boas condiçoes que são descartados, boa parte desses alimentos são jogados no lixo por x motivos. Nós buscamos diminuir a desigualdade alimentar através da doação dos mercados que por algum motivo não irão comercializar um alimento em bom estado.
        </p>
      </div>
    </section>
  );
}
export default HomePt2;
