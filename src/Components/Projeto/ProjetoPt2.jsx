import styles from '../../Css/Projeto_css/ProjetoPt2.module.css'
function ProjetoPt2() {
    return (
        <section className={styles.ProjetoPt2}>
            <section className={styles.projetoPt2Esquerda}>
                <div className={styles.blocoEsquerdo}>
                    <h1>O desperdicio, a fome e a pandemia</h1>
                    <hr />
                    <p>Os mercados e restaurantes são responsaveis por x quantidades de alimentos em boas condiçoes que são descartados, boa parte desses alimentos são jogados no lixo por x motivos. Nós buscamos diminuir a </p>
                </div>
            </section>
            <section className={styles.projetoPt2Direita}>
                <p className={styles.txtEsquerda}>Evitar o desperdicio</p>
                <p className={styles.txtDireito}>Ajudar quem precisa no momento que mais precisa</p>
                <p className={styles.txtEsquerda}>Levar o alimemento até quem precisa comer</p>
            </section>
        </section>
    )
}
export default ProjetoPt2;