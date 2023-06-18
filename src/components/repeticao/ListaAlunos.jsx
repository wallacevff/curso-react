import React from "react";
import alunos from "../../data/Alunos";
import "./ListaAlunos.css";
const ListaAlunos =  props => {
    return(
        <ul className="ListaAlunos" style={{borderColor: props.color}}>
            {alunos.map( (aluno, i) => 
            <li key={i}>
                {aluno.nomme} - {aluno.nota.toFixed(2).replace('.',',')}
            </li>
            )}
        </ul>
    );
}
export default ListaAlunos;