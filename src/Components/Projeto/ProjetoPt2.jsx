import styles from '../../Css/Projeto_css/ProjetoPt2.module.css'
function ProjetoPt2() {
    return (
        <section className={styles.projetoPT2}>
            <div className={styles.projetoPT2Esquerda}>
                <div className={styles.blocoTexto}>
                    <h1>O desperdicio e a <br></br> Fome</h1>
                    <div class={styles.linha}></div>
                    <p>Cerca de 27 milhões toneladas de comidas vão para o lixo todos os anos no Brasil. <br></br>7 milhões de pessoas estão em situação de vunerabilidade alimentar na grande metropoli de São Paulo.</p>
                </div>
            </div>

            <div className={styles.projetoPT2Direito}>
                <p className={styles.TextoEsquerdo1}>
                    Evitar o desperdicio
                </p>
                <div className={styles.background1}></div>
                <div className={styles.background2}></div>
                <p className={styles.TextoEsquerdo2}>
                    Ajudar quem precisa
                </p>
                <p className={styles.TextoEsquerdo3}>
                    Distribuir  alimementos
                </p>
                <div className={styles.background3}></div>
            </div>
        </section>
    )
}
export default ProjetoPt2;