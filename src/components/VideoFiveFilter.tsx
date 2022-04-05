import React from 'react';
import {FilterType} from "../App";

type DataType = {
    banknots: string;
    value: number;
    number: string;
}

type VideoFiveFilterType = {
    data: Array<DataType>;
    filter: (value: FilterType) => void;
}

export const VideoFiveFilter: React.FC<VideoFiveFilterType> = (props) => {
    return (
        <>
            <ul>
                {props.data.map((objFromMoney, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoney.banknots}</span>
                            <span> {objFromMoney.value}</span>
                            <span> {objFromMoney.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => {props.filter('All')}}>All</button>
                <button onClick={() => {props.filter('RUBLS')}}>RUBLS</button>
                <button onClick={() => {props.filter('Dollars')}}>Dollars</button>
            </div>
        </>
    )
        ;
};
