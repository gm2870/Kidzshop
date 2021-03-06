import React, { Component } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, Redirect } from "react-router-dom";
import * as actions from "../../../store/actions/index";
import Input from "../../../components/UI/Input/Input";
import Spinner from "../../../components/UI/Spinner/Spinner";
import authGirl from "../../../assets/images/feature-girl.png";

class Register extends Component {
    state = {
        controls: {
            username: {
                elementType: "TextField",
                elementConfig: {
                    name: "username",
                    type: "text",
                    margin: "normal",
                    variant: "outlined"
                },
                label: "نام کاربری",
                value: "",
                validation: {
                    required: true,
                    minLength: 3
                },
                errorMessage: "نام کاربری باید حداقل 3 کارکتر باشد.",
                valid: false,
                filledIn: false
            },
            email: {
                elementType: "TextField",
                elementConfig: {
                    name: "email",
                    type: "text",
                    margin: "normal",
                    variant: "outlined"
                },
                label: "ایمیل",
                value: "",
                validation: {
                    required: true,
                    isEmail: true
                },
                errorMessage: "ایمیل صحیح نمی باشد.",
                valid: false,
                filledIn: false
            },
            password: {
                elementType: "TextField",
                elementConfig: {
                    name: "password",
                    type: "password",
                    margin: "normal",
                    variant: "outlined"
                },
                label: "رمز عبور",
                value: "",
                validation: {
                    required: true,
                    minLength: 6
                },
                errorMessage: "رمز عبور باید حداقل 6 کارکتر باشد.",
                valid: false,
                filledIn: false
            },
            repeatPass: {
                elementType: "TextField",
                elementConfig: {
                    name: "confirmation_password",
                    type: "password",
                    margin: "normal",
                    variant: "outlined"
                },
                label: "تکرار رمز عبور",
                value: "",
                validation: {
                    required: true,
                    minLength: 6,
                    sameAsPass: true
                },
                errorMessage: "رمز عبور یکسان نیست",
                valid: false,
                filledIn: false
            }
        },
        formIsValid: false,
        formMessage: null,
        loading: false,
        siteRules: true
    };

    inputChangedHandler = (event, controlName) => {
        this.setState({ formMessage: null });
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                filledIn: false
            }
        };

        this.setState({ controls: updatedControls });
    };

    onInputBlur = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                valid: this.checkValidity(
                    event.target.value,
                    this.state.controls[controlName].validation
                ),
                filledIn: true
            }
        };
        let formIsValid = true;
        for (const inputIdentifier in updatedControls) {
            if (
                Object.prototype.hasOwnProperty.call(
                    updatedControls,
                    inputIdentifier
                )
            ) {
                formIsValid = updatedControls[inputIdentifier].valid;
            }
        }
        this.setState({ controls: updatedControls, formIsValid });
    };

    submitHandler = event => {
        event.preventDefault();
        if (!this.state.formIsValid) {
            this.setState({
                formMessage: "لطفا اطلاعات را بطور کامل وارد کنید."
            });
            return false;
        }

        this.props.onAuth(
            this.state.controls.username.value,
            this.state.controls.password.value,
            this.state.controls.email.value,
            this.state.controls.repeatPass
        );
    };

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.sameAsPass) {
            const password = this.state.controls.password.value;
            isValid = value.trim() === password && isValid;
        }
        return isValid;
    }

    render() {
        const formEelementsArray = [];
        for (const key in this.state.controls) {
            formEelementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }
        const form = formEelementsArray.map(formElement => (
            <Input
                labelName={formElement.config.label}
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                onBlur={event => this.onInputBlur(event, formElement.id)}
                filledIn={formElement.config.filledIn}
                errorMessage={formElement.config.errorMessage}
                changed={event =>
                    this.inputChangedHandler(event, formElement.id)
                }
            />
        ));

        let errorMessage = null;
        if (this.props.error) {
            if (this.props.error.username) {
                errorMessage = (
                    <p className="errorColor">
                        این نام کاربری قبلا انتخاب شده است
                    </p>
                );
            }
            if (this.props.error.email) {
                errorMessage = (
                    <p className="errorColor">این ایمیل قبلا انتخاب شده است</p>
                );
            }
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to="/" />;
        }
        return (
            <React.Fragment>
                <Grid
                    container
                    direction="row"
                    className="container auth"
                    justify="center"
                >
                    <Grid item className="auth__grid auth__grid--girl" sm={2}>
                        <img
                            src={authGirl}
                            className="auth__image"
                            alt="auth kid"
                        />
                    </Grid>
                    <Grid item xs={12} sm={10} md={7} className="form">
                        {authRedirect}
                        <Paper className="form__body">
                            {this.props.loading ? <Spinner /> : null}
                            <Link
                                to="/users/register"
                                className="registerTab active"
                            >
                                ثبت نام
                            </Link>
                            <Link to="/users/login" className="loginTab">
                                ورود
                            </Link>
                            <form onSubmit={this.submitHandler}>
                                {form}
                                <div>
                                    <div>
                                        <Checkbox
                                            onChange={this.checkboxHandler}
                                            checked={this.state.siteRules}
                                            style={{ padding: "0 0 0 5px" }}
                                        />

                                        <Link to="/" id="rules">
                                            با قوانین موافقم
                                        </Link>
                                    </div>
                                    <button className="login_btn">
                                        ثبت نام
                                    </button>
                                    <p style={{ color: "red" }}>
                                        {this.state.formMessage}
                                    </p>
                                    {errorMessage}
                                </div>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => ({
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: localStorage.getItem("token") !== null
});
const mapDispatchToProps = dispatch => ({
    onAuth: (username, password, email, repeatPass) =>
        dispatch(actions.registerAuth(username, password, email, repeatPass))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
