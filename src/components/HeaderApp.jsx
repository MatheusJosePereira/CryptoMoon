import Style from '../CSS/HeaderApp.module.css'

//React-boostrap
import Button from 'react-bootstrap/Button';

//Imagens
import qrcode from '../img/Qrlogo.png'
import play_store from '../img/Logo_Playstore.png'

import app_phone from '../img/ofc_app.png'

function HeaderApp() {
    return (
        <div className={Style.pai}>
            <header>
                <section className={Style.fundo_header}>
                    <div className={Style.container_header}>
                        <h1 className={Style.titulo_header}>Olá Brasil!<br></br>Conheça a CryptoMoon!</h1>
                        <p className={Style.descricao_header}>CryptoMoon a exchange que revoluciona o mercado com suas ferramentas ajudando você a alcançar a lua com suas criptomoedas&#128640;&#127765;.</p>
                        <button className={Style.button}><p className={Style.texto_button}>CADASTRE-SE</p></button>
                    </div>
                </section>
                <div className={Style.phone_body}>
                    <img src={app_phone} className={Style.img_phone} alt="App oficial"/>

                    
                    <Button className={Style.btn_playstore} variant="primary">Play Store <img className={Style.qrcode_app} src={play_store} alt="" /></Button>{' '}

                    <Button className={Style.btn_qrcode} variant="primary">Baixe o App <img className={Style.qrcode_app} src={qrcode} alt="" /></Button>{' '}
                </div>
            </header>
        </div>
    )
}

export default HeaderApp