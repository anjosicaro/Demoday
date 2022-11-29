import styles from "../../Css/Cadastro_css/Cadastro.module.css";
import garota from "../../Images/garota.png";
import { Link } from 'react-router-dom';
import Imagem_Botao from '../../Images/Imagem_Botao.png'

function Cadastro() {
  return (
    <section className={styles.page}>
      <div className={styles.txt}>
        <h1>DONARE</h1>

        <p>Comida boa no prato de quem precisa</p>

        <div className={styles.img}>
          <img src={garota} alt="" />
        </div>
      </div>

      <div className={styles.cadastro}>
        <h1>Cadastro</h1>
        <div className={styles.linha}></div>
        <form action="">
          <input type="text" id="NomeCompleto" name="NomeCompleto" placeholder="Nome completo" /> <br />
          <input type="number" id="cpf" name="cpf" placeholder="CPF ou CNPJ" /> <br />
          <input type="number" id="RG" name="RG" placeholder="RG" /> <br />
          <input type="date" id="Nascimento" name="nascimento" placeholder="Data de Nascimento" /> <br />

          <div className={styles.textoEBotao}>
            <p>ja possui uma conta? <Link to="/login">entre aqui</Link></p>
            <input type="image" src={Imagem_Botao} alt="" width="70px" height="66px" />
          </div>
        </form>
      </div>

    </section>
  );
}
export default Cadastro;
