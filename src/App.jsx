import React from "react";
import {
    Primeiro,
    ComParametro,
    Fragmento,
    Aleatorio,
    Card,
    Cards,
    FamiliaMembro,
    Familia
} from "./importHelper";

export default () =>
(
    <div id="app">
        
        <Cards>

        <Card
                titulo="Familia"
                color="#22223b"
            >
                <Familia Sobrenome="Vidal">
                    <FamiliaMembro Nome="Wallace" />
                    <FamiliaMembro Nome="Andressa" />
                    <FamiliaMembro Nome="Rafaela" Sobrenome="Rocha"/>
                </Familia>
            </Card>

            <Card
                titulo="Desafio Aleatório"
                color="red"
            >
                <Aleatorio
                    max={10}
                    min={5}
                />
            </Card>

            <Card
                titulo="Com Parâmetro"
                color="#ffc300"
            >
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota={9.3}
                />
            </Card>

            <Card
                titulo="Fragmento"
                color="purple"
            >
                <Fragmento />
            </Card>

            <Card
                titulo="Com Parâmetro"
                color="#8338ec"
            >
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota={9.3}
                />
            </Card>

            <Card
                titulo="Primeiro"
                color="#023047"
            >
                <Primeiro />
            </Card>

        </Cards>
    </div>
);