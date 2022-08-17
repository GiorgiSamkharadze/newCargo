import React, {useState, useContext} from "react";
import {ValidatedInput} from "utils";
import useRequest from "hooks/useRequest";
import useValidation from "hooks/useValidation";
import SpinnerButton from "utils/SpinnerButton";
import {AuthContext} from "context";
import {usernameLoginFormValidations} from "./UsernameLoginFormValidations";
import {history} from "components/History";

const UsernameLoginForm = ({loginRequest, admin}) => {
    const [user, setUser] = useState({username: "", password: ""});
    const [login, isLoggingIn] = useRequest(loginRequest);
    const {errors, validate, addErrors} = useValidation(
        usernameLoginFormValidations
    );
    const {setAuth} = useContext(AuthContext);
    const onChangeHandler = ({target: {name, value}}) => {
        const newUser = {...user, [name]: value};
        setUser(newUser);
        validate(newUser, name).catch((e) => {});
    };
    const OnSubmitHandler = async (e) => {
        e.preventDefault();
        validate(user)
            .then((r) => {
                login(user)
                    .then((response) => {
                        setAuth({
                            accessToken: response.data.token,
                            isLoggedIn: true,
                            accountType: admin ? "ADMIN" : "AGENT",
                        });
                        history.push(admin ? "/admin" : "/agent");
                        window.location.reload();
                    })
                    .catch((e) => {
                        if (e.response.status === 401) {
                            const errors = {
                                email: "Invalid email/password",
                                password: "Invalid email/password",
                            };
                            addErrors(errors);
                        }
                    });
            })
            .catch((e) => {});
    };
    return (
        <form className="js-validate" onSubmit={OnSubmitHandler}>
            <div className="mb-5 mb-md-7">
                <h6 className="badge badge-pill badge-primary">
                    {admin ? "ADMIN" : "AGENT"}
                </h6>
                <h1 className="h2">
                    Welcome back to {admin ? "Admin login" : "Agent login"}
                </h1>
                <p>Login to manage your account.</p>
            </div>

            <div className="js-form-message form-group">
                <ValidatedInput
                    label="Username"
                    type="username"
                    name="username"
                    className="form-control"
                    value={user.username}
                    placeholder="Username"
                    error={errors.username}
                    onChange={onChangeHandler}
                />
            </div>

            <div className="js-form-message form-group">
                <ValidatedInput
                    label="Password"
                    type="password"
                    name="password"
                    className="form-control"
                    value={user.password}
                    id="signinSrPassword"
                    placeholder="********"
                    error={errors.password}
                    onChange={onChangeHandler}
                />
            </div>

            <div className="row align-items-center mb-5">
                <div className="col-sm-6 mb-3 mb-sm-0"></div>

                <div className="col-sm-6 text-sm-right">
                    <SpinnerButton
                        type="submit"
                        loading={isLoggingIn}
                        className="btn btn-primary transition-3d-hover"
                    >
                        Login
                    </SpinnerButton>
                </div>
            </div>
        </form>
    );
};

export default UsernameLoginForm;
