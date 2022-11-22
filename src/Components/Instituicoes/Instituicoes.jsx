import styles from '../../Css/Instituicoes/Instituicoes.module.css'
import InstituicoesPt2 from './Instituicoespt2'
import InstituicoesPt3 from './Instituicoespt3'

function Instituicoes() {
    return (
        <>
            <section className={styles.Header_invisivel}></section>
            <section className={styles.InstituicoesPt1}>
            <div className={styles.container}>
         <div className={styles.txt}>
         <h1>Você pode encher esse prato</h1>
                <p>Conheça as Ongs e Igrejas que lutam contra a fome que mata milhares de brasileiros</p>
         </div>
                <div className={styles.img}>
carrossel
                </div>
            </div>
            </section>

            <InstituicoesPt2 />
            <InstituicoesPt3 />
        </>
    )
}
export default Instituicoes;