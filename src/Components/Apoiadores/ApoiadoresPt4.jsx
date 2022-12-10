import styles from '../../Css/Apoiadores_css/ApoiadoresPt4.module.css'
import { Link } from 'react-router-dom'

function ApoiadoresPt4() {
    return (
        <>
            <section className={styles.ApoiadoresPT4}>
                <p>
                    Seja também um apoiador dessa causa
                </p>
                <Link>APOIAR</Link>
            </section>
        </>
    );
};

export default ApoiadoresPt4;