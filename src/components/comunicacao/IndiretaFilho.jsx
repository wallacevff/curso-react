import React, { useState } from "react";

const IndiretaFilho = props => {
    const cb = props.quanoClicar;
    const min = 50;
    const max = 70;
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min;
    const gerarNerd = () => Math.random() > 0.5;
    const [clicked, setClicked] = useState(false);
    return (
        <div>
            <div>
                Filho</div>
            <button style={{
                borderRadius: "10px",
                backgroundColor: clicked ? "#38a3a5": "#9a031e",
                color: clicked ? "#caf0f8" : "#edf2f4",
                borderColor: clicked ? "#38a3a5": "#9a031e"
            }} onClick={
                function (e) {
                    e.preventDefault();
                    setClicked(!clicked);
                    props.quanoClicar("João", gerarIdade(), gerarNerd());
                }
            }
            >{clicked ? "Fornecer Informações" : "Ocultar"}</button>
        </div>
    );
}

export default IndiretaFilho;