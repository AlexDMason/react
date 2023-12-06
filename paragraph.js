import React from "react";

const Paragraph = (props) => {
    const {text} = props;

    return (
        <div>
            <p>hi</p>
            <p style={{color: 'green'}}>{text}</p>
        </div>
    );
};

export default Paragraph;
