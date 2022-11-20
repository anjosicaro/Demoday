import styles from '../../Css/PerfilOng_css/PerfilOng.module.css'
import imagem_ong from '../../Images/imagem_ong.png'
import PerfilOngPt2 from './PerfilOngPt2'
import PerfilOngPt3 from './PerfilOngPt3'

function PerfilOng() {
    return (
        <>
            <section className={styles.page1}>
                <div className={styles.txt1}>
                    <img src={imagem_ong} alt="" />
                    <h1>Associação do Menino Jesus</h1>
                    <p>Telefone:  (11) 3535-3535</p>
                    <p className={styles.email}>E-mail: meninojesus@gmail.com</p>

                    <div className={styles.borda}></div>
                    <div className={styles.txt2}>
                        <p>Texto sobre a ong, o que ela faz, quais suas metas e etc</p>
                    </div>
                    

                </div>
    
            </section>
            <PerfilOngPt2 />
            <PerfilOngPt3 />
        </>
    )
}

export default PerfilOng