import styles from '../../Css/Projeto_css/Projeto.module.css'
import ProjetoPt2 from './ProjetoPt2'
import ProjetoPt3 from './ProjetoPt3';

function Projeto() {
    return (
        <>
            <section className={styles.headerInvisivel}></section>

            <section className={styles.projetoPT1}>
                <section className={styles.projetoPT1Esquerda}>
                    <h1 className={styles.tituloH1}><span className={styles.corRoxa}>O projeto </span><br /><span className={styles.corVermelha}>Donare</span></h1>
                    
                    <p className={styles.textoTamanho1}>O Projeto nasceu da pergunta: Por que <br></br>mais da metade do Brasil não possui o <br></br> que comer nas três refeições?
                    </p>
                </section>

                <section className={styles.projetoPT1Direito}></section>
            </section >
            <ProjetoPt2 />
            <ProjetoPt3 />
        </>
    )
}
export default Projeto;