import React from 'react'

import './Thanks.css';

import{
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
} from 'react-icons/bs';

const emojiData ={
    unsatisfied: <BsFillEmojiFrownFill/>,
    neutral: <BsFillEmojiNeutralFill/>,
    satisfied: <BsFillEmojiSmileFill/>,
    very_satisfied: <BsFillEmojiHeartEyesFill/>,
    
};


const ThanksForm = ({data}) => {
    return(
        <div className='thanks-container'>
            <h2>Falta pouco...</h2>
            <p>Sua opnião é importante, você receberá 5 moedas para investimentos instalando nosso App e se cadastrando com o Email do formulário.</p>
            <p>Para concluir a avaliação clique no botão de Enviar abaixo.</p>
            <h3>Aqui está o resumo da sua avaliação {data.name}:</h3>
            <p className="review-data">
                <span>Satisfação com a Exchange:</span>
                {emojiData[data.review]}
            </p>
            <p className="review-data">
                <span>Comentário: </span>
                {data.comment}
            </p>
        </div>
    )
}

export default ThanksForm