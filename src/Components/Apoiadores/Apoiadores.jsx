import styles from '../../Css/Apoiadores_css/Apoiadores.module.css'
import ApoiadoresPt2 from './ApoiadoresPt2'
import ApoiadoresPt3 from './ApoiadoresPt3'

function Apoiadores(){
    return(
        <>
            <section className={styles.Header_invisivel}></section>
            <section className={styles.ApoiadoresPt1}>
                <p>
                Como ser um doador e porque doar 
                </p>
            </section>
            <ApoiadoresPt2 />
            <ApoiadoresPt3 />
        </>
    );
};

export default Apoiadores;