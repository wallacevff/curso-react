import React from "react";
import "./Familia.css";
const Familia = props => {
    return (
        <div className="Familia">
            {/* {
                React.Children.map(
                    props.children,
                    (el) => React.cloneElement(
                        el, props)
                )
            } */}
            {
                    props.children.map(
                    (child, i) => {
                        
                        let sobrenome = typeof(child.props.Sobrenome) != "undefined" ? child.props.Sobrenome : props.Sobrenome;
                        return React.cloneElement(child, {Sobrenome: sobrenome, key: i});
                    }
                    
                )
            }
        </div>
    );
}

export default Familia;