import styles from '../../Css/Apoiadores_css/ApoiadoresPt3.module.css'

function ApoiadoresPt3(){
    return(
        <section className={styles.ApoiadoresPt2}>
            <h1>
            Empresas Parceiras do projeto
            </h1>
            <div className={styles.containerMercados}>
                <div className={styles.Mercados}>
                <div className={styles.divAmarela}></div>
                <div className={styles.divVermelha}></div>
                <div className={styles.divAmarela}></div>
                <div className={styles.divVermelha}></div>
                </div>
               <div className={styles.Mercados}>
               <div className={styles.divVermelha}></div>
                <div className={styles.divAmarela}></div>
                <div className={styles.divVermelha}></div>
                <div className={styles.divAmarela}></div>
               </div>
              <div className={styles.Mercados}>
              <div className={styles.divAmarela}></div>
                <div className={styles.divVermelha}></div>
                <div className={styles.divAmarela}></div>
                <div className={styles.divVermelha}></div>
              </div>
            </div>
        </section>
    );
};

export default ApoiadoresPt3;
