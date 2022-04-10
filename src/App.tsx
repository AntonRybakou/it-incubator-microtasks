import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput/FullInput";
import {Input} from "./components/FullInput/Input";
import {Button} from "./components/FullInput/Button";

export type FilterType = 'All' | 'RUBLS' | 'Dollars';

/*
Lesson 2 - map
import {NewComponent} from "./components/NewComponent";
const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'},
];
*/

/*Lesson 3 - Button

import {Button} from "./components/Button";

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
    <div className={"App"}>
        <Button name={'YouTubeChannel-1'} callBack={() => Button1Foo("VASYA", 21)}/>
        <Button name={'YouTubeChannel-2'} callBack={() => Button2Foo('IVAN', 30)}/>
        <Button name={'Stupid Button'} callBack={Button3Foo}/>
    </div>
);*/

/*Lesson 4 - useState

let [a, setA] = useState(1);

const onClickHandler = () => {
    setA(++a);
    console.log(a);
}
const onClickHandlerReset = () => {
    setA(a = 1)
    console.log(a);
}

return (
    <div className={"App"}>
        <h1>{a}</h1>
        <button onClick={onClickHandler}>number</button>
        <button onClick={onClickHandlerReset}>0</button>
    </div>
);*/

/*
Lesson 5 - filter

import {VideoFiveFilter} from "./components/VideoFiveFilter";

export type FilterType = 'All' | 'RUBLS' | 'Dollars';

export const App = () => {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('All')

    let currentMoney = money;

    if (filter === 'RUBLS') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS')
    }
    if (filter === 'Dollars') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton);
    }

    return (
        <>
            <VideoFiveFilter data={currentMoney} filter={onClickFilterHandler}/>
        </>

    );
}*/

// Lesson 6 - input

type MessageType = {
    message: string;
}

export const App = () => {

    // Setting global state
    let [message, setMessage] = useState<Array<MessageType>>([
        {message: 'message 1'},
        {message: 'message 2'},
        {message: 'message 3'},
    ])
    // Set local global state for Input
    let [input, setInput] = useState('')
    // Function to add new message (for FullInput component)
    const addMessage = (value: string) => {
        let newMessage: MessageType = {message: value};
        setMessage([newMessage, ...message])
    }
    // Function to add new message from global input state
    const callBackButtonHandler = () => {
        addMessage(input);
        setInput('');
    }

    return (
        <div className={'App'}>
            {/*<FullInput addNewMessage={addMessage}/>*/}

            {/*<div>
                <input/>
                <button>+</button>
            </div>*/}

            <Input input={input} setInput={setInput}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )

}