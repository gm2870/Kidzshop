import React from 'react';
import { TextField, Checkbox } from '@material-ui/core';
const input = (props) => {

    let inputElement = null;
    switch (props.elementType) {
        case ("TextField"):
            inputElement = <TextField 
            className="auth_input"
             {...props.elementConfig}
              value={props.value}
              onChange={props.changed} />;            
            break;
        case ('CheckBox'):
          inputElement = <Checkbox />;
          break;
        default:
            inputElement = <TextField className="auth_input" />
            break;
    };
    return (
        <div className="input_body">
            <label>{props.labelName}</label>
            {inputElement}
        </div>
      

    );

};
export default input ;