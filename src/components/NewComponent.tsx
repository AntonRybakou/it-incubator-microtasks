import React from "react";
import n from './NewComponent.module.css';


type NewComponentType = {
    data: Array<TopCarsType>,
}

type TopCarsType = {
    manufacturer: string;
    model: string;
}


export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <table className={n.table}>
                <tr className={n.table__titles}>
                    <th className={n.table__title}>Index</th>
                    <th className={n.table__title}>Manufacturer</th>
                    <th className={n.table__title}>Model</th>
                </tr>
                {props.data.map((data, index) => {
                        return (
                            <tr className={n.table__items}>
                                <td className={n.table_item} key={index}>{index + 1}</td>
                                <td className={n.table_item} key={index}>{data.manufacturer}</td>
                                <td className={n.table_item} key={index}>{data.model}</td>
                            </tr>
                        )
                    }
                )}
            </table>
        </>
    )
}