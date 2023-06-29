import React from "react";
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

export default class Contador extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         numero: props.numeroInicial
    //     }
    // }

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passo !== undefined ? this.props.passo : 1
    }
    // constructor(props){
    //     super(props);
    //     this.inc = this.inc.bind(this);
    //     this.dec = this.dec.bind(this);
    // }
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }
    setPasso = (novoPasso) => {
        this.setState({
            passo: parseInt(novoPasso)
        })
    }
    render() {
        return (
            <div style={
                {
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "no-wrap"
                }
            }>
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm
                    passo={this.state.passo}
                    setPasso={this.setPasso}
                />
                <Botoes
                    setInc={this.inc}
                    setDec={this.dec}
                />
            </div>
        );
    }
}