import React from "react";
import If, {Else} from "./If";
const UsuarioInfo = (props) => {
    const usuario = props.usuario || {};
    return (
        <div>
            <If test={usuario && usuario.nome}>
                <div style={{ color: props.color }}>
                    Seja bem vindo <strong>{usuario.nome}</strong>!
                </div>
                <Else >
                    <div style={{ color: props.color }}>
                        Seja bem vindo <strong>Cupade</strong>!
                    </div>
                </Else>
            </If>
        </div>
    );
}

export default UsuarioInfo;