import React from "react";
import "./Card.css";

const Card = props => {
    var children = undefined;
    if (props.children.length) {
        children = props.children.map(
            (el, i) => React.cloneElement(el, { key: i, color: props.color })
        );
    }
    else {
        children = React.cloneElement(props.children, {color: props.color});
    }
    return (
        <div className="Card"
            style={{
                backgroundColor: props.color,
                borderColor: props.color,
                ...props.styles
            }}
        >
            <div className="Title">
                {props.titulo}
            </div>
            <div className="Content">
                {
                    children
                }
            </div>
        </div>

    );
}

export default Card;