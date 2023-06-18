import React from "react";
import alunos from "../../data/Alunos";
import "./ListaAlunos.css";
const ListaAlunos =  props => {
    return(
        <div className="ListaAlunos" style={{borderColor: props.color}}>
            {alunos.map( (aluno, i) => 
            <div key={i} style={{
                backgroundColor: i % 2 !== 0 ? props.color : "inherit",
                color: i % 2 !== 0 ? "#edf2f4" : "inherit",
                }}>
                {aluno.nome} - {aluno.nota.toFixed(2).replace('.',',')}
            </div>
            )}
        </div>
    );
}
export default ListaAlunos;