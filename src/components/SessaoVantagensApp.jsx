import Style from '../CSS/SessaoVantagensApp.module.css'


//Icones Boostrap
import 'bootstrap-icons/font/bootstrap-icons.css';

//framer motion

import {motion} from 'framer-motion'


export default function SessaoVantagensApp() {
    return (
        <div className={Style.corpo_vantagens}>
            <h1 className={Style.titulo_vantagens}>Negocie Qualquer Tipo de Criptomoeda com Liquidez, Velocidade e Total Controle</h1>
            <section className={Style.corpo_conteudo}>


                <div className={Style.corpo_lvtc}>
                    <motion.div whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }} className={Style.icon_body}>
                        <svg whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }} xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-speedometer2" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                            <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z" />
                        </svg>
                    </motion.div>
                    <h3 className={Style.titulo_velocidade}>Velocidade</h3>
                    <p className={Style.descricao_velocidade}>Engine de atualizações com latências de 60 microssegundos</p>


                    <motion.div whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }} className={Style.icon_body2}>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-currency-exchange" viewBox="0 0 16 16">
                            <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z" />
                        </svg>
                    </motion.div>
                    <h3 className={Style.titulo_velocidade2}>Liquidez</h3>
                    <p className={Style.descricao_velocidade2}>Negocie criptos sem se preocupar com o desmembramento de valores</p>

                    <motion.div whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }} className={Style.icon_body}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                    </motion.div>
                    <h3 className={Style.titulo_velocidade}>Total Controle</h3>
                    <p className={Style.descricao_velocidade}>Consiga analisar seus investimentos de maneira fácil e rápida com uma interface simples e objetiva</p>





                </div>

                <div className={Style.imagem_vantagens}></div>
            </section>
        </div>
    )
}