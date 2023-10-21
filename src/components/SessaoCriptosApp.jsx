
import Style from '../CSS/SessaoCriptosApp.module.css'

//framer motion

import {motion} from 'framer-motion'


//Imagens carrosel 1
import CHAINLINK from '../img/CHAINLINK.png'
import TRON from '../img/TRON.png'
import WAVES from '../img/WAVES.png'
import ZCASH from '../img/ZCASH.png'
import BITCOIN from '../img/BITCOIN.png'
import TEZOS from '../img/TEZOS.png'
import SOLANA from '../img/SOLANA.png'
import POLYGON from '../img/POLYGON.png'

//Imagens carrosel 2

import POLKADOT from '../img/POLKADOT.png'
import COSMOS from '../img/COSMOS.png'
import DOGECOIN from '../img/DOGECOIN.png'
import FILECOIN from '../img/FILECOIN.png'
import LITECOIN from '../img/LITECOIN.png'
import DAI from '../img/DAI.png'
import KUSAMA from '../img/KUSAMA.png'
import ETHERUM from '../img/ETHERUM.png'


export default function SessaoCriptosApp(){
    return(

       

        <div>
             {/*Carousel linear 1*/}
            <h1 className={Style.titulo_criptos}>Algumas das Criptomoedas que trabalhamos</h1>
            <div className={Style.logos}>
                <div className={Style.logos_slide}>
                    <img src={TRON} alt="" />
                    <img src={CHAINLINK}/>
                    <img src={WAVES} alt="" />
                    <img src={ZCASH} alt="" />
                    <img src={BITCOIN}/>
                    <img src={TEZOS} alt="" />
                    <img src={SOLANA} alt="" />
                    <img src={POLYGON}/>
                </div>
                  <div className={Style.logos_slide}>
                    <img src={TRON} alt="" />
                    <img src={CHAINLINK}/>
                    <img src={WAVES} alt="" />
                    <img src={ZCASH} alt="" />
                    <img src={BITCOIN}/>
                    <img src={TEZOS} alt="" />
                    <img src={SOLANA} alt="" />
                    <img src={POLYGON}/>
                </div>
            </div>

            {/*Carousel invertido 2*/ }
            <div className={Style.logos}>
                <div className={Style.logos_slide2}>
                    <img src={COSMOS} alt="" />
                    <img src={POLKADOT}/>
                    <img src={DOGECOIN} alt="" />
                    <img src={FILECOIN} alt="" />
                    <img src={LITECOIN}/>
                    <img src={DAI} alt="" />
                    <img src={KUSAMA} alt="" />
                    <img src={ETHERUM}/>
                </div>
                  <div className={Style.logos_slide2}>
                    <img src={COSMOS} alt="" />
                    <img src={POLKADOT}/>
                    <img src={DOGECOIN} alt="" />
                    <img src={FILECOIN} alt="" />
                    <img src={LITECOIN}/>
                    <img src={DAI} alt="" />
                    <img src={KUSAMA} alt="" />
                    <img src={ETHERUM}/>
                </div>
            </div>
            <motion.button className={Style.button_investiragora}
                    whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.3 }}>Investir agora</motion.button>
        </div>
    )
}