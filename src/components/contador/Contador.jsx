import React from "react";
export default class Contador extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         numero: props.numeroInicial
    //     }
    // }

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passo != undefined ? this.props.passo : 1
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
    setPasso = (e) => {
        this.setState({
            passo: parseInt(e.target.value)
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
                <p>Valor Inicial: {this.state.numero}</p>
                <input
                    id="passoInput"
                    type="number"
                    value={this.state.passo}
                    onChange={this.setPasso}
                />
                <div style={{
                    display: "flex",
                    justifyContent: "center"
                    }}>
                    <button
                        className="btn btn-primary"
                        onClick={this.inc}
                        style={{
                            marginTop: "10px",
                            width: "40px",
                            height: "40px",
                            textAlign: "center",
                            alignContent: "center",
                            borderRadius: "100%"
                        }}
                    >+</button>
                    <button
                        className="btn btn-danger"
                        onClick={this.dec}
                        style={{
                            marginTop: "10px",
                            width: "40px",
                            height: "40px",
                            marginLeft: "10px",
                            textAlign: "center",
                            alignContent: "center",
                            borderRadius: "100%"
                        }}
                    >-</button>
                </div>
            </div>
        );
    }
}