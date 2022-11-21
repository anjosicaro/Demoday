import styles from '../../Css/Apoiadores_css/Apoiadores.module.css'
import ApoiadoresPt2 from './ApoiadoresPt2'
import ApoiadoresPt3 from './ApoiadoresPt3'
import ApoiadoresPt4 from './ApoiadoresPt4'

function Apoiadores(){
    return(
        <>
       <section className={styles.ApoiadoresPt1}>

       <div className={styles.txt}>
            <h1>
            Vantagens de ser um apoiador do Projeto Donare
            </h1>
        </div>
          
       </section>
       <ApoiadoresPt2 />
            <ApoiadoresPt3 />
            <ApoiadoresPt4 />
        </>
    );
};

export default Apoiadores;