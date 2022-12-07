import styles from '../../Css/PerfilOng_css/PerfilOngPt2.module.css'
import sacola_alimentos from '../../Images/sacola_alimentos.png'

function PerfilOngPt2(){
    return(
        <>
            <section className={styles.page2}>
                
                <div className={styles.card}>

                    {/* <img className={styles.sacola} src={sacola_alimentos} alt="" /> */}

                    <h1 className={styles.titulo}>Precisamos da sua ajuda, seja um voluntário</h1>

                    <h2>Cozinheiro</h2>
                    <p>Doe um tempo do seu dia para cozinha para nossa ong</p>

                    <hr />

                    <h2>Faxineiro</h2>
                    <p>Doe um tempo do seu dia para auxiliar na limpeza de nossa ong</p>

                    <hr />

                    <h2>Administrativo</h2>
                    <p>Doe um tempo do seu dia para auxilia na administração de nossa ong</p>

                </div>
            </section>

            
        </>
    )
}
export default PerfilOngPt2;