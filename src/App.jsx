import React from "react";
import {
    Primeiro,
    ComParametro,
    Fragmento,
    Aleatorio,
    Card,
    Cards,
    FamiliaMembro,
    Familia,
    ListaAlunos,
    TabelaProdutos,
    ParOuImpar,
    UsuarioInfo,
    DiretaPai,
    IndiretaPai
} from "./importHelper";

const App = () => {
    const styles = {
        cartao: {
            height: "fit-content",
        }
    };
    return (
        <div id="app">
            <Cards>
            <Card
                    titulo="#10 - Comunicação Indireta"
                    color="#8338ec"
                    styles={styles.cartao}
                >
                    <IndiretaPai />
                </Card>
                <Card
                    titulo="#09 - Comunicação Direta"
                    color="#00b4d8"
                    styles={styles.cartao}
                >
                    <DiretaPai />
                </Card>
                <Card
                    titulo="#08 - Renderização Condicional"
                    color="#b5838d"
                    styles={styles.cartao}
                >
                    <ParOuImpar
                        numero={20}
                    />
                    <ParOuImpar
                        numero={21}
                    />
                    <ParOuImpar
                        numero={190}
                    />
                    <UsuarioInfo
                        usuario={{ nome: "Wallace" }}
                    />
                    <UsuarioInfo
                        usuario={{ email: "wall@wallace.com" }}
                    />
                    <UsuarioInfo
                        usuario={{ nome: "Frederico" }}
                    />
                    <UsuarioInfo />
                </Card>
                <Card
                    titulo="#07 - Tabela Produtos"
                    color="#274472"
                    styles={styles.cartao}
                >
                    <TabelaProdutos />
                </Card>
                <Card
                    titulo="#06 - Repetção"
                    color="#adb5bd"
                    styles={styles.cartao}
                >
                    <ListaAlunos />
                </Card>

                <Card
                    titulo="#05 - Familia"
                    color="#22223b"
                >
                    <Familia Sobrenome="Vidal">
                        <FamiliaMembro Nome="Wallace" />
                        <FamiliaMembro Nome="Andressa" />
                        <FamiliaMembro Nome="Rafaela" Sobrenome="Rocha" />
                        <FamiliaMembro Nome="Ricardo" Sobrenome="Fortuna" />
                    </Familia>
                </Card>

                <Card
                    titulo="#04 - Desafio Aleatório"
                    color="red"
                >
                    <Aleatorio
                        max={10}
                        min={5}
                    />
                </Card>

                <Card
                    titulo="#03 - Fragmento"
                    color="purple"
                >
                    <Fragmento />
                </Card>

                <Card
                    titulo="#02 - Com Parâmetro"
                    color="#8338ec"
                >
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Pedro"
                        nota={9.3}
                    />
                </Card>

                <Card
                    titulo="#01 - Primeiro"
                    color="#023047"
                >
                    <Primeiro />
                </Card>

            </Cards>
        </div>
    )
};

export default App;