import React from "react";

export default (props) => {
    const status = props.nota >= 7 ? "Aprovado" : (
        props.nota < 4 ? "Reprovado" : "Prova Final"
    );
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{`${props.aluno} tem nota ${props.nota}`}</h3>
            <p>{status}</p>
        </div>
    );
}