import React from "react";

const Botoes = props => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center"
            }}>
            <button
                className="btn btn-primary"
                onClick={props.setInc}
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
                onClick={props.setDec}
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
    );
}

export default Botoes