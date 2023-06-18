import React from "react";
import Produtos from "../../data/Produtos";
import "./TabelaProdutos.css";
const TabelaProdutos = (props) => {
    const borderColor = {
        borderColor: props.color,
        color: props.color,
    }
    return (
        <table className="TabelaProdutos"
            style={{
                borderColor: props.color,
                color: props.color
            }}
        >
            <thead>
                <tr>
                    <th style={borderColor}>
                        Id
                    </th>
                    <th style={borderColor}>
                        Nome
                    </th>
                    <th style={borderColor}>
                        Preço
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    Produtos.map(
                        (produto, i) => {
                            const style = {
                                backgroundColor : produto.id % 2 !== 0 ? props.color : "inherit",
                                color: produto.id % 2 !== 0 ? "#edf2f4" : "inherit",
                                textAlign: "left",
                                paddingLeft: "10px"
                            }
                            return (

                                <tr key={i} style={style}>
                                    <td style={{textAlign: "center"}}>{produto.id}</td>
                                    <td style={style}>{produto.nome}</td>
                                    <td style={style}>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                                </tr>
                            )
                        }
                    )
                }
            </tbody>
        </table>
    );
}
export default TabelaProdutos;