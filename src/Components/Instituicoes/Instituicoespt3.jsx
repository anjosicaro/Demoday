import styles from '../../Css/Instituicoes/InstituicoesPt3.module.css'

function InstituicoesPt3() {
    return (
        <section className={styles.InstituicoesPt3}>
            <h1>Veja o que as pessoas comentaram sobre os projetos</h1>
            <div className={styles.container}>
                <div className={styles.comentario}>
                    <div className={styles.imgTxt}>
                        <div className={styles.img}></div>
                        <h4>João Vinicius</h4>
                    </div>
                    <p>Consegui achar vários lugares que precisavam de doações rápido e fácil, adorei!</p>
                </div>
                <div className={styles.comentario}>
                    <div className={styles.imgTxt}>
                        <div className={styles.img}></div>
                        <h4>Rosiane da Silva</h4>
                    </div>
                    <p>Gostei muito da plataforma, super indicaria serviço dez</p>
                </div>
                <div className={styles.comentario}>
                    <div className={styles.imgTxt}>
                        <div className={styles.img}></div>
                        <h4>Vinicius Soares da Silva</h4>
                    </div>
                    <p>Sempre amei fazer trabalho voluntario agora consigo achar com facilidade, amei!</p>
                </div>


            </div>
        </section>
    );
};

export default InstituicoesPt3;