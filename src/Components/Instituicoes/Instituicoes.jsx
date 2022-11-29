import Carousel from "react-bootstrap/Carousel";
import styles from "../../Css/Instituicoes/Instituicoes.module.css";
import InstituicoesPt2 from "./Instituicoespt2";
import InstituicoesPt3 from "./Instituicoespt3";
import prato from   '../../Images/pratoCheio.png'
import pratoVazio from '../../Images/pratoVazio.png'
function Instituicoes() {
  return (
    <>
      <section className={styles.Header_invisivel}></section>
      <section className={styles.InstituicoesPt1}>
        <div className={styles.container}>
          <div className={styles.txt}>
            <h1>Você pode encher esse prato</h1>
            <p>
              Conheça as Ongs e Igrejas que lutam contra a fome que mata
              milhares de brasileiros
            </p>
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
        </div>
      </section>

      <InstituicoesPt2 />
      <InstituicoesPt3 />
    </>
  );
}

export default Instituicoes;
