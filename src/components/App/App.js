import React from "react";
import {Switch, Route, Router} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {AuthContextProvider} from "context";
import {history} from "components/History";
import {ClientRoutes, AdminRoutes} from "routes";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ScrollToTop from "utils/ScrollToTop";

function App() {
    return (
        <>
            <AuthContextProvider>
                <ToastContainer />
                <BrowserRouter>
                    <Router history={history}>
                        <ScrollToTop />
                        <Switch>
                            <Route path="/manage" component={AdminRoutes} />
                            <Route path="/" component={ClientRoutes} />
                        </Switch>
                    </Router>
                </BrowserRouter>
            </AuthContextProvider>
        </>
    );
}

export default App;
