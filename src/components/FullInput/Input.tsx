import React, {ChangeEvent} from 'react';

type InputPropsType = {
    input: string,
    setInput: (input: string) => void,
}

export const Input = (props: InputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setInput(event.currentTarget.value)
    }

    return (
        <input
            value={props.input}
            onChange={onChangeInputHandler}
        />
    );
};
