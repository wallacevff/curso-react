import React from "react";

export default props => {
    return (
        <span>
            {props.Nome} <strong>{props.Sobrenome}</strong>
        </span>
    );
}