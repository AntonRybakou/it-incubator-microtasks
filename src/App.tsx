import React from 'react';
import './App.css';
import {Body} from './site/Body';
import {Footer} from './site/Footer';
import {Header} from "./site/Header";

const App = () => {
    return (
        <>
            <Header title={'NEW BODY'}/>
            <Body/>
            <Footer/>
        </>
    );
}

export default App;