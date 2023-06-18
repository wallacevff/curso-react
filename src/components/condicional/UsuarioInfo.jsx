import React from "react";
import If from "./If";
const UsuarioInfo = (props) => {
    const usuario = props.usuario || {};
    return (
        <div>
            <If test={usuario && usuario.nome}>
                <div style={{ color: props.color }}>
                    Seja bem vindo <strong>{props.usuario.nome}</strong>!
                </div>
            </If>
            <If test={!usuario || !usuario.nome}>
                <div style={{ color: props.color }}>
                    Seja bem vindo <strong>Cupade</strong>!
                </div>
            </If>
        </div>
    );
}

export default UsuarioInfo;