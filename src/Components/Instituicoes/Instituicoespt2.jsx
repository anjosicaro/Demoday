import styles from '../../Css/Instituicoes/InstituicoesPt2.module.css'
import Carousel from 'react-bootstrap/Carousel';
import ong1 from '../../Images/ong.png'
import ong2 from '../../Images/ong2.png'
import ong3 from  '../../Images/ong3.png'

function InstituicoesPt2() {
    return (
        <section className={styles.instituicoes}>
    <div className={styles.container}>
        <div className={styles.txt}>
           <h1>Conheça as ONGS e Igrejas que fazem trabalhos voltados para a fome </h1>
        </div>
        <div className={styles.CarrosselContainer}>
        <Carousel slide={false}>
      <Carousel.Item>
      <div className={styles.ong}>
        <img src={ong1} alt="" />
      </div>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className={styles.ong}>
        <img src={ong2} alt="" />
      </div>

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className={styles.ong}>
        <img src={ong3} alt="" />
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
