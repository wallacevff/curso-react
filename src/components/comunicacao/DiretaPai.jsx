import React from "react";
import DieretaFilho from "./DiretaFilho";

const DiretaPai = props => {

    return (
        <div>
            <DieretaFilho  nome="Filho 1" idade={20} nerd={true}/>
            <DieretaFilho  nome="Filho 2" idade={17} nerd={false}/>
        </div>
    );
}

export default DiretaPai;