import React, {ChangeEvent, useState} from 'react';

type FullInputType = {
    addNewMessage: (value: string) => void,
}

export const FullInput = (props: FullInputType) => {

    // Setting a local state to catch input values
    let [input, setInput] = useState('')
    // Function to add each input value to local state
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.currentTarget.value)
    }
    // Function to add everything from input state (all input values) to addNewMessage
    const onClickButtonHandler = () => {
        props.addNewMessage(input);
        setInput('')
    }

    return (
        <div>
            <input
                value={input}
                onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};