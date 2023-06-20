import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = props => {
    const [nome, setNome] = useState("?");
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false);
    const [clicked, setClicked] = useState(false);

    function fornecerInformações(nome, idade, nerd) {
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
        setClicked(!clicked);
    }
    console.log(IndiretaPai);
    return (
        <div>{
            clicked &&
            <>
                <span>{nome} </span>
                <span><strong>{idade}</strong> </span>
                <span>{nerd ? "Verdadeiro" : "False"}</span>
            </>
        }

            <IndiretaFilho quanoClicar={fornecerInformações} />
        </div>
    );
}

export default IndiretaPai;