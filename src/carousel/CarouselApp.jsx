import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'


//CSS carrosel

import Style from '../carousel/CarouselApp.module.css'

//imagens carrosel
import imagem1 from '../img/1.jpg'
import imagem2 from '../img/2.jpg'
import imagem3 from '../img/3.jpg' //muito grande Não usar
import imagem4 from '../img/4.jpg'
import imagem5 from '../img/5.jpg'
import imagem6 from '../img/6.jpg'
import imagem7 from '../img/7.jpg'//substitui a imagem 3
import imagem8 from '../img/8.jpg'
import imagem9 from '../img/9.jpg'
import imagem10 from '../img/10.jpg'
import imagem11 from '../img/11.jpg'

const images = [imagem1, imagem7, imagem2, imagem4, imagem5, imagem6, imagem8, imagem9, imagem10, imagem11]



function CarouselApp() {
 
    
            const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, []);

    return (
    <div className={Style.pai_carousel}>

        <motion.div ref={carousel} className={Style.carrosel} whileTap={{ cursor: "grabbing" }}>
            <motion.div className={Style.inner}
                drag='x'
                dragConstraints={{ right: 0, left: -width }}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}>

                {images.map(image => (
                    <motion.div className={Style.item} key={image}>
                        <img src={image} alt='Texto' />
                    </motion.div>


                ))}

            </motion.div>
        </motion.div>

    </div>
)
}

export default CarouselApp