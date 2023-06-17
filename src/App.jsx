import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
export default () => 
(
    <div id="app">
        
        <ComParametro 
            titulo = "Situação do Aluno"
            aluno = "Pedro"
            nota = {9.3}
        />
        <ComParametro 
            titulo = "Situação do Aluno"
            aluno = "Maria"
            nota = {5.0}
        />
        <ComParametro 
            titulo = "Situação do Aluno"
            aluno = "João"
            nota = {3.0}
        />
        <Fragmento />
        <Primeiro />
    </div>
);