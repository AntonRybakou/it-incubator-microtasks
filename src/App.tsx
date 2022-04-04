import React from 'react';
import './App.css';
import {Body} from './site/Body';
import {Footer} from './site/Footer';
import {Header} from "./site/Header";
import {NewComponent} from "./NewComponent";

export const App = () => {
    return (
        <>
            <NewComponent students={'new component'}/>
            {/*<Header title={'NEW HEADER'}/>*/}
            {/*<Body titleForBody={'NEW BODY'}/>*/}
            {/*<Footer titleForFooter={'NEW FOOTER'}/>*/}
        </>
    );
}