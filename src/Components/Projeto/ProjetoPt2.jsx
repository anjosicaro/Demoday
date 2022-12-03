import styles from '../../Css/Projeto_css/ProjetoPt2.module.css'
function ProjetoPt2() {
    return (
        <section className={styles.projetoPT2}>
            <section className={styles.projetoPT2Esquerda}>
                <div className={styles.blocoTexto}>
                    <h1 className={styles.tituloh1}>O desperdicio, a fome e a pandemia</h1>
                    <div className={styles.linha}></div>
                    <p className={styles.textoTamanho1}>Os mercados e restaurantes são responsaveis por x quantidades de alimentos em boas condiçoes que são descartados, boa parte desses alimentos são jogados no lixo por x motivos. Nós buscamos diminuir a </p>
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