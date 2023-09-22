import React, {useState} from 'react'

export const Informacoes = (props) => {
    return (
        <div className="container-informacoes" >
            <h3>{props.titulo}</h3>
            {props.texto}
        </div>
    )
}

