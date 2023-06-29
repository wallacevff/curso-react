import React from "react";

const PassoForm = props => {
    return (
        <input
            id="passoInput"
            type="number"
            value={props.passo}
            onChange={ e => props.setPasso(e.target.value)}
        />
    );
}

export default PassoForm