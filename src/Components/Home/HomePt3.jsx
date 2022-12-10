import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import styles from '../../Css/Home_css/HomePt3.module.css'
import prato from   '../../Images/pratoCheio.png'
import pratoVazio from '../../Images/pratoVazio.png'


function HomePt3() {
  return (
    <section className={styles.Home}>
   <div className={styles.esquerda}>
    <div className={styles.txt}>
<h1>Você pode</h1>
<h2>ENCHER ESSE PRATO</h2>
<Link to='/Cadastro'>
<button className={styles.btn}>
  DOE
</button>
</Link>
    </div>
   </div>
   <div className={styles.CarrosselContainer}>
            <Carousel>
              <Carousel.Item interval={1000}>
                <img src={pratoVazio}
                
                //   className="d-block w-100"
                //   src="holder.js/800x400?text=First slide&bg=373940"
                //   alt="First slide" 
                />
                <Carousel.Caption>
                 
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img src={prato}
                //   className="d-block w-100"
                //   src="holder.js/800x400?text=Second slide&bg=282c34"
                //   alt="Second slide"
                />
                <Carousel.Caption>
                 
                </Carousel.Caption>
              </Carousel.Item>
              
            </Carousel>
          </div>
    </section>
  )
}
export default HomePt3;