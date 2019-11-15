import React from "react";
import { TextField, Checkbox } from "@material-ui/core";
const input = props => {
    let inputElement = null;
    switch (props.elementType) {
        case "TextField":
            inputElement = (
                <TextField
                    className="auth_input"
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                    onBlur={props.onBlur}
                />
            );
            break;

        case "CheckBox":
            inputElement = <Checkbox />;
            break;
        case "radio":
            inputElement = <input type="radio" />;
            break;
        default:
            inputElement = <TextField className="auth_input" />;
            break;
    }
    return (
        <div className="input_body">
            <label>{props.labelName}</label>
            {inputElement}
            <p
                className={
                    props.invalid && props.filledIn && props.value !== ""
                        ? "showError"
                        : "hideError"
                }
            >
                {props.errorMessage}
            </p>
        </div>
    );
};
export default input;
