import {AuthContext} from "context";
import React, {useContext} from "react";
import {Redirect} from "react-router";
import RoutedModal from "utils/RoutedModal";

const LoginModal = (props) => {
    const {
        auth: {isLoggedIn, accountType},
    } = useContext(AuthContext);
    if (isLoggedIn && accountType === "CLIENT") {
        return <Redirect to={props.match.params[0]}/>;
    } else {
        return (
            <RoutedModal
                header="Login"
                back={props.match.params[0]}
                className="w-90 w-md-70  w-lg-60"
            >
                <div className="p-5 m-auto">
                    <h1>Coming soon...</h1>
                </div>
            </RoutedModal>
        );
    }
};
export default LoginModal;
