import React from 'react';
const Button = ({ description, disabled }) => {
    return(
        <button type="button" disabled={disabled} onClick={() => console.log(description)}>{description}</button>

    );
};
export default Button