import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import Header from "./component/header/header";
import Routes from "./component/routes";

const App = (props) => {
    const x=1
    return (
        <div>
            <HashRouter>

                <Header/>
                <Routes/>

            </HashRouter>
        </div>
    );
}

export default App;
