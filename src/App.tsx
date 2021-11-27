import React from 'react';
import RouterWrapper from "./components/RouterWrapper";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import {Container} from "react-bootstrap";
import {BrowserRouter, HashRouter} from "react-router-dom";

const App = () => {
    return (
        <HashRouter>
            <NavBar/>
            <Container>
                <RouterWrapper/>
            </Container>
        </HashRouter>
    );
};

export default App;