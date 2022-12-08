import styles from '../../Css/Apoiadores_css/ApoiadoresPt3.module.css'
import fotoProa from '../../Images/fotoProa.png'
import fotoSenac from '../../Images/fotoSenac.png'
import fotoFAAP from '../../Images/fotoFAAP.png'

function ApoiadoresPt3() {
    return (
        <section className={styles.ApoiadoresPT3}>
            <h1>Empresas Parceiras do projeto</h1>

            <div className={styles.containerApoiadores}>
                <div><img src={fotoProa} alt="" /></div>
                <div><img src={fotoSenac} alt="" /></div>
                <div><img src={fotoFAAP} alt="" /></div>
            </div>
        </section>
    );
};

export default ApoiadoresPt3;
