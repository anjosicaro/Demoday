import styles from '../../Css/Projeto_css/ProjetoPt2.module.css'
function ProjetoPt2() {
    return (
        <section className={styles.projetoPT2}>
            <section className={styles.projetoPT2Esquerda}>
                <div className={styles.blocoTexto}>
                    <h1>O desperdicio e a <br></br> Fome</h1>
                    <div class={styles.linha}></div>
                    <p>Cerca de 27 milhões toneladas de comidas vão para o lixo todos os anos no Brasil. <br></br>7 milhões de pessoas estão em situação de vunerabilidade alimentar na grande metropoli de São Paulo.</p>
                </div>
            </section>

            <section className={styles.projetoPT2Direito}>
                <p className={styles.textoEsquerdo1}>
                    Evitar o desperdicio
                </p>
                <p className={styles.textoDireito2}>
                    Ajudar quem precisa no <br></br> momento que mais precisa
                </p>
                <p className={styles.textoEsquerdo2}>
                    Levar o alimemento até <br></br>quem precisa comer
                </p>
            </section>
        </section>
    )
}
export default ProjetoPt2;