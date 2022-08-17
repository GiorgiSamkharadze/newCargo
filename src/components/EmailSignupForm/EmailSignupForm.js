import {useValidation} from "hooks";
import React, {useState} from "react";
import {SpinnerButton, ValidatedInput} from "utils";
import emailSignupFormValidations from "./emailSignupFormValidations";

const EmailSignupForm = () => {
    const [email, setEmail] = useState("");
    const {errors, validate} = useValidation(emailSignupFormValidations);
    const onChange = ({target: {value}}) => {
        setEmail(value);
        validate({email: value}, "email");
    };
    const onSubmit = (e) => {
        e.preventDefault();
        validate({email: email});
    };
    return (
        <form className="js-validate mb-3" onSubmit={onSubmit}>
            <div className="form-row">
                <div className="col-sm-8 mb-2">
                    <div className="js-form-message">
                        <label className="sr-only" htmlFor="signupSrEmail">
                            Your email
                        </label>
                        <div className="input-group input-group-pill">
                            <ValidatedInput
                                type="email"
                                className="form-control"
                                name="email"
                                value={email}
                                id="signup_Email"
                                placeholder="Your email"
                                onChange={onChange}
                                error={errors.email ? true : false}
                            />
                        </div>
                    </div>
                    {errors.email && (
                        <label className="text-danger ml-2 font-weight-light text-xs">
                            {errors.email}
                        </label>
                    )}
                </div>

                <div className="col-sm-4">
                    <SpinnerButton
                        type="submit"
                        className="btn btn-primary btn-pill btn-wide"
                    >
                        Get Started
                    </SpinnerButton>
                </div>
            </div>
        </form>
    );
};
export default EmailSignupForm;
