import Style from '../CSS/SessaoCelularApp.module.css'

//Icones boostrap
import 'bootstrap-icons/font/bootstrap-icons.css';


//Framer motion

import {motion} from 'framer-motion'

//imagens
import logo_celular from '../img/CryptoMoon.png'
import cartao from '../img/cartao.png'
import lua from '../img/lua.jpg'


export default function SessaoCelularApp() {
    return (
        <div>
            <div className={Style.Phone_sessao}>
                <div><img className={Style.logo_phone} src={logo_celular} alt="" /></div>
                <h2 className={Style.bemvindo}>Bem vindo a CryptoMoon</h2>
            </div>
            <div><img className={Style.cartao_sessao} src={cartao} alt="" /></div>
            <div><img className={Style.lua} src={lua} alt="" /></div>
            <div className={Style.efeito_lua}></div>
            <div className={Style.efeito_celular}></div>

            <section className={Style.sessao_pai}>
                



                <div className={Style.topicos_sessao}><h1 className={Style.titulo_sessao}>Gerencie tudo a qualquer hora onde estiver</h1>

                    <div className={Style.sessao_seguro}>
                        <motion.div whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }} className={Style.seguro}><svg  xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-shield" viewBox="0 0 16 16">
                            <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                        </svg>
                        </motion.div>
                        <div className={Style.texto_seguro}>
                            <h1 className={Style.titulo_seguro}>Segurança</h1>
                            <p className={Style.paragrafo_seguro}>Sua segurança é garantida com nosso sistema de defesa de roubo de dados e invasão de software.</p>
                        </div>
                    </div>
                    <div className={Style.sessao_seguro}>
                        <motion.div whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }} className={Style.seguro}><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
                            <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                        </svg></motion.div>
                        <div className={Style.texto_seguro}>
                            <h1 className={Style.titulo_seguro}>Melhor Suporte</h1>
                            <p className={Style.paragrafo_seguro}>Os melhores atendentes e helpers de todo o brasil com atendimentos de 24hrs.</p>
                        </div>
                    </div>
                    <div className={Style.sessao_seguro}>
                        <motion.div whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }} className={Style.seguro}><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" />
                        </svg></motion.div>
                        <div className={Style.texto_seguro}>
                            <h1 className={Style.titulo_seguro}>Acompanhe Cotações</h1>
                            <p className={Style.paragrafo_seguro}>Facil acesso aos novos valores e gerenciamento do que está em alta no mercado.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>


    )
}