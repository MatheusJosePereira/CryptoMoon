import Style from '../CSS/SessaoInvestidoresApp.module.css'
//Carrosel swiper ("imagens dentro do componente")
import CarouselApp from '../carousel/CarouselApp'

//gif

import talk from '../img/talk.gif'

//
import {motion} from 'framer-motion'

export default function SessaoInvestidoresApp(){
    return(
        <div>
            <section>
                <div className={Style.Sessao_investidores}>
                    <h1 className={Style.titulo_sessao}>Analise e Converse com os Melhores Investidores</h1>
                    <CarouselApp/>
                    <div className={Style.corpo_adicionais}><h2 className={Style.adicionais}>+2MIL Investidores Usando a plataforma</h2>
                    <h2 className={Style.adicionais}>+100 Paises com diversos tipos de moedas</h2>
                    <h2 className={Style.adicionais}>+Auxilio de CopyTrade</h2>
                    </div>
                    
                    <div className={Style.descricao_investidores}><p>MoonTalk, desenvolvida para você conversar, analisar e copiar os investimentos dos investidores que você apoia em tempo real.</p>
                    <motion.button className={Style.botao}
                    whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.3 }}>Converse já</motion.button>
                    
                    </div>
                </div>
                
                
            </section>
        </div>
    )
}