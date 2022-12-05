import styles from '../../Css/Home_css/Home.module.css'
import HomePt2 from './HomePt2'
import HomePt3 from './HomePt3'
import HomePt4 from './HomePt4'


function Home() {
    return (
        <>
            <section className={styles.Home}>
                <div className={styles.txt}>
                 <div className={styles.txt1}>
                 <h3>+ DA METADE DO</h3>
                   <div className={styles.brasil}>
                    <h1>BRASIL</h1>
                   </div>
                   <h3>ESTÁ PASSANDO FOME</h3>
                 </div>
                 <div className={styles.txt2}>
                    <h3>
                    Veja como você <br /> pode mudar <br />
<span> essa realidade</span> 
                    </h3>

                 </div>
                </div>
            </section>
            
            {/* <HomePt2 /> */}
            {/* <HomePt3 /> */}
            {/* <HomePt4 /> */}


        </>

    )
}
export default Home