//Components
import { GrFormNext, GrFormPrevious, GrformPrevious } from 'react-icons/gr';
import UserForm from '../forms/Userform';
import ReviewForm from '../forms/ReviewForm';
import Thanks from '../forms/Thanks';
import { FiSend } from 'react-icons/fi';
//Hooks

import useForm from '../hooks/useForm';
import { useState } from 'react';

//etapas
import Steps from '../forms/Steps';

//Estilo
import Style from '../CSS/SessaoJornadaApp.module.css'

const formTemplate = {
    name: "",
    email: "",
    review: "",
    comment: "",
};


export default function SessaoJornadaApp() {

    const [data, setData] = useState(formTemplate)

    const updateFieldHandler = (key, value) => {
        setData((prev) => {
            return { ...prev, [key]: value }
        });
    }

    const FormComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />
];

    const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } = useForm(FormComponents)

    return (
        <div>
            <div className={Style.cabecalho}>
                <h2>Deixe sua avaliação</h2>
                <p>Ficamos felizes com a sua visita, utilize o formulário abaixo para avaliar a Exchange</p>
            </div>
            <div className={Style.form_container}>
                <Steps currentStep={currentStep} />
                <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
                    <div className={Style.inputs_container}>{currentComponent}</div>
                    <div className={Style.actions}>

                        {!isFirstStep && (
                            <button type='button' onClick={() => changeStep(currentStep - 1)}>
                                <GrFormPrevious />
                                <span className={Style.voltar}>Voltar</span>
                            </button>
                        )}
                        {!isLastStep ? (
                            <button type='submit'>
                                <span className={Style.voltar}>Avançar</span>
                                <GrFormNext />
                            </button>
                        ) : (
                            <button type='button'>
                                <span className={Style.voltar}>Enviar</span>
                                <FiSend />
                            </button>
                        )}

                    </div>
                </form>
            </div>
        </div>
    );
}