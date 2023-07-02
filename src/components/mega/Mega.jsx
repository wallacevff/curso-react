import React, { useState } from "react";

const Mega = (props) => {
    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max - min) + min);
        return array.includes(aleatorio) ?
            gerarNumeroNaoContido(min, max, array) : aleatorio
    }

    function gerarNumeros(qtde) {
        const numeros = Array(qtde).fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums);
                return [...nums, novoNumero]
            }, [])
            .sort((a, b) => a - b);
        return numeros;
    }

    //const qtde = props.qtde || 6;
    const [qtde, setQtde] = useState(props.qtde || 6);
    const numerosIniciais = Array(qtde).fill(0);
    const [numeros, setNumeros] = useState(numerosIniciais);
    
    return (
        <div>
            <h2 style={{color: props.color, margin: "10px"}}>
                <strong>Mega</strong>
            </h2>
            <h3 style={{color: "#DBB488"}}><strong>{numeros.join(" ")}</strong></h3>
            <div style={{margin: "20px", color: props.color}}>
                <label htmlFor="">Quantidade de Números</label>
                <input 
                min="6" max="15"
                type="number"
                name="Quantidade de Números"
                value={qtde}
                onChange={
                    (e) => setQtde(parseInt(e.target.value)
                    )}
                style={{width: "inherit"}}
                
                />
            </div>
            <button
                className="btn"
                style={{ backgroundColor: props.color, borderColor: props.color, color: "white" }}
                onClick={_ => setNumeros(gerarNumeros(qtde))}
            >Gerar Números
            </button>
        </div>
    );
}

export default Mega;