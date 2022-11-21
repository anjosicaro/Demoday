import styles from '../../Css/Instituicoes/InstituicoesPt3.module.css'

function InstituicoesPt3() {
    return (
        <section className={styles.InstituicoesPt3}>
            <h1>Veja o que as pessoas comentaram sobre os projetos</h1>
         <div className={styles.container}>
            <div className={styles.comentario}>
               <div className={styles.imgTxt}>
               <div className={styles.img}></div>
                <h4>Nome da pessoa</h4>
               </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit natus velit placeat et? Assumenda, inventore. Numquam minus nemo voluptatum</p>
            </div>
            <div className={styles.comentario}>
               <div className={styles.imgTxt}>
               <div className={styles.img}></div>
                <h4>Nome da pessoa</h4>
               </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit natus velit placeat et? Assumenda, inventore. Numquam minus nemo voluptatum</p>
            </div>
            <div className={styles.comentario}>
               <div className={styles.imgTxt}>
               <div className={styles.img}></div>
                <h4>Nome da pessoa</h4>
               </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit natus velit placeat et? Assumenda, inventore. Numquam minus nemo voluptatum</p>
            </div>
        

         </div>
        </section>
    );
};

export default InstituicoesPt3;