import React from 'react'

import './Userform.css'

const UserForm = ({data, updateFieldHandler}) => {
    return (
        <div>
            <div className='form_control'>
                <label htmlFor="name">Nome:</label>
                <input type="text"
                    name="text"
                    id="name"
                    placeholder="Digite o seu nome"
                    required 
                    value={data.name || ""}
                    onChange={(e) => updateFieldHandler("name", e.target.value)}/>
            </div>
            <div className='form_control'>
                <label htmlFor="email">E-mail:</label>
                <input type="email"
                    name="email"
                    id="email"
                    placeholder="Digite o seu Email"
                    required 
                    value={data.email || ""}
                    onChange={(e) => updateFieldHandler("email", e.target.value)}/>
            </div>
        </div>
    )
}

export default UserForm