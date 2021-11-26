import React from 'react';
import RouterWrapper from "./components/RouterWrapper";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import {Container} from "react-bootstrap";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Container>
                <RouterWrapper/>
            </Container>
        </BrowserRouter>
    );
};

export default App;