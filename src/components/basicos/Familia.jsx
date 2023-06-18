import React from "react";
import "./Familia.css";
export default props => {
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
                        console.log(sobrenome);
                        return React.cloneElement(child, {Sobrenome: sobrenome, key: i});
                    }
                    
                )
            }
        </div>
    );
}