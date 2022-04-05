import React from 'react';
import './App.css';
import {Button} from "./components/Button";
// import {NewComponent} from "./components/NewComponent";

// const topCars = [
//     {manufacturer: 'BMW', model: 'm5cs'},
//     {manufacturer: 'Mercedes', model: 'e63s'},
//     {manufacturer: 'Audi', model: 'rs6'},
// ];

export const App = () => {

    const Button1Foo = (subscriber: string, age: number) => {
        console.log(`Hello, I'm ${subscriber} and I'm ${age} years old`)
    }

    const Button2Foo = (subscriber: string, age: number) => {
        console.log(`Hello, I'm ${subscriber} and I'm ${age} years old`);
    }

    const Button3Foo = () => {
        console.log("I'm STUPID");
    }



    return (
        <>
            <Button name={'YouTubeChannel-1'} callBack={() => Button1Foo("VASYA", 21)}/>
            <Button name={'YouTubeChannel-2'} callBack={() => Button2Foo('IVAN', 30)}/>
            <Button name={'Stupid Button'} callBack={Button3Foo}/>
        </>
    );
}