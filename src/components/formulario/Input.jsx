import React, {useState} from "react";
import "./Input.css";
const Input = (props) => {
    const [valor, setValor] = useState('Inicial');
    function AlteraValor(e){
        setValor(e.target.value)
    }
    return(
        <div className="Input">
            <h2>{valor}</h2>
            <input value={valor} onChange={AlteraValor}/>
            <input value={valor} readOnly/>
            <input value={"undefined"}/>
        </div>
    );
}

export default Input;