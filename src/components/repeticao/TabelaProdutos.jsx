import React from "react";
import Produtos from "../../data/Produtos";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./TabelaProdutos.css";
const TabelaProdutos = (props) => {
    const borderColor = {
        borderColor: props.color,
    }
    const textAlign = {
        textAlign: "left",
        borderColor: props.color,
        paddingLeft: "10px"
    }
    return (
        <table className="TabelaProdutos"
            style={{borderColor: props.color,
                    color: props.color}}
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
                        (produto, i) =>
                            <tr key={i}>
                                <td>{produto.id}</td>
                                <td style={textAlign}>{produto.nome}</td>
                                <td style={textAlign}>R$ {produto.preco.toFixed(2).replace('.',',')}</td>
                            </tr>
                    )
                }
            </tbody>
        </table>
    ); 
}
export default TabelaProdutos;