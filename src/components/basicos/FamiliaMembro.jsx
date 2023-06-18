import React from "react";

const FamiliaMembro = props => {
    return (
        <span>
            {props.Nome} <strong>{props.Sobrenome}</strong>
        </span>
    );
}
export default FamiliaMembro;