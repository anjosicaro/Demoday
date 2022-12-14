import styles from './../../Css/Login_css/Login.module.css'

function Login() {
    return (
        <>
            <div class={styles.headerFalça}></div>
            <section className={styles.Login}>
                <div className={styles.containerLogin}>
                    <div className={styles.parteEsquerda}>
                        <h1>Donare</h1>
                        <p>
                            Comida boa no <br /> prato de quem <br /> precisa
                        </p>
                    </div>

                    <div className={styles.parteDireita} >
                        <h1>entrar</h1>
                        <p>selecione o seu perfil</p>
                        <div className={styles.tiposDePerfis}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <form action="GET">
                            <input type="email" id="EmailUsuario" name="EmailUsuario" placeholder="E-mail" /> <br />
                            <input type="password" id="pwd" name="pwd" placeholder="digite sua senha"></input> <br />
                            <input type="button" value="continuar" />
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;