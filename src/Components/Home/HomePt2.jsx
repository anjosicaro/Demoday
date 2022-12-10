import { Link } from "react-router-dom";
import styles from "../../Css/Home_css/HomePt2.module.css";
import grafico from "../../Images/grafico.png";
function HomePt2() {
  return (
    <section className={styles.Home}>
      <div className={styles.container}>
        <div className={styles.cima}>
          <div className={styles.containerImg}>
            <img src={grafico} alt="" className={styles.img} />
          </div>
          <div className={styles.txt}>
            <h1 className={styles.milhoes}>7 milhões</h1>
            <h3>pessoas passando fome em São Paulo</h3>
          </div>
        </div>

        <div className={styles.baixo}>
          <div className={styles.containerCard} >

            {/* ong */}
            <div className={styles.Card}>
           <div className={styles.txt2}>
           <div className={styles.title}>
           <h3>ONG</h3>
            <div className={styles.linha}></div>
           </div>
            <p>Projeto Donare quer ajudar,facilitar e dar visibilidade a sua ONG</p>
          <Link to='/Cadastro'>
          <button className={styles.btn}
           >Cadastre-se</button>
          </Link>
           </div>
            </div>

            {/* doador */}
            <div className={styles.Card}>
            <div className={styles.txt2}>
           <div className={styles.title}>
           <h3>DOADOR</h3>
            <div className={styles.linha}></div>
           </div>
            <p> Você pode ajudar a por comida no prato de quem precisa</p>
           <Link to='/Cadastro'>
           <button className={styles.btn}
           >Cadastre-se</button>
           </Link>
           </div>
          
            </div>

            {/* voluntario */}

            <div className={styles.Card}>
            <div className={styles.txt2}>
           <div className={styles.title}>
           <h3>VOLUNTÁRIO</h3>
            <div className={styles.linha}></div>
           </div>
            <p>Você pode ajudar doando seu  tempo sendo voluntário </p>
           <Link to='/Voluntario'>
           <button className={styles.btn}
           >Saiba mais</button>
           </Link>
           </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomePt2;
