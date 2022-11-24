import styles from '../../Css/Instituicoes/InstituicoesPt2.module.css'
import Carousel from 'react-bootstrap/Carousel';

function InstituicoesPt2() {
    return (
        <section className={styles.instituicoes}>
    <div className={styles.container}>
        <div className={styles.txt}>
           <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h1>
        </div>
        <div className={styles.CarrosselContainer}>
        <Carousel slide={false}>
      <Carousel.Item>
      <div className={styles.ong}>
        amarelo
      </div>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className={styles.ong}>
        azul
      </div>

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className={styles.ong}>
        verde
      </div>

        <Carousel.Caption>
     
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </div>

    </div>
        </section>
    )
}

export default InstituicoesPt2;
