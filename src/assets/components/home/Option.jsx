import React from 'react';
import style from "../../styles/option.module.css"
const Option = (props) => {
    return (
        <div className={style.container}>
            <img  src={props.img}/>
            <h3>{props.text}</h3>
        </div>
    );
};

export default Option;