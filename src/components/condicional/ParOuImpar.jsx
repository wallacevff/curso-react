import React from "react";

const ParOuImpar = (props) => {
    const isPar = props.numero % 2 === 0;
    return (
        <div>
            {isPar ?
                <span style={{color: props.color}}>Par</span> :
                <span style={{backgroundColor: props.color, color: "#edf2f4", paddingInline: "7px"}}>Ímpar</span>
            }

        </div>
    );
}

export default ParOuImpar;