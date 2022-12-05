import styles from '../../Css/Voluntario_css/VoluntarioPt2.module.css'

function VoluntarioPt2() {
    return (
        <section className={styles.VoluntarioPT2}>
            <div className={styles.folhetoVoluntario}>
                <h1 className={styles.tituloh1}>Valuntários</h1>
                <h2 className={styles.tituloh2}>Combo Solidariedade</h2>
                <div className={styles.textos}>
                    <h3 className={styles.tituloh3}>Ajudar alguém que precisa <span className={styles.linha}>..........................</span></h3>
                    <p className={styles.tituloTamanho1}>Você pode ajudar pessoas doando <br></br> alimentos e roupas em bom estado
                    </p >
                    <h3 className={styles.tituloh3}>Voluntario <span className={styles.linha}>.........................................................</span></h3>
                    <p className={styles.tituloTamanho1}>Você pode ajudar pessoas doando <br></br>alimentos e roupas em bom estado
                    </p>
                    <h3 className={styles.tituloh3}>Doador <span className={styles.linha}>................................................................</span></h3>
                    <p className={styles.tituloTamanho1}>Você pode ajudar pessoas doando <br></br> alimentos e roupas em bom estado
                    </p>
                </div>
            </div>
        </section>
    )
}

export default VoluntarioPt2;
