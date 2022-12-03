import styles from '../../Css/Projeto_css/Projeto.module.css'
import ProjetoPt2 from './ProjetoPt2'
import ProjetoPt3 from './ProjetoPt3';

function Projeto() {
    return (
        <>

            <section className={styles.Projeto}>
                <div className={styles.txt}>
                    <h1> <span className={styles.cor_roxa}>O projeto</span> <span className={styles.cor_vermelha}>Donare</span> </h1>
                    <br />
                    <p>O Projeto nasceu da pergunta: Por que mais da metade do Brasil não possui o que comer nas três refeições?</p>
                </div>
            </section>
            <ProjetoPt2 />
            <ProjetoPt3 />
        </>
    )
}
export default Projeto;