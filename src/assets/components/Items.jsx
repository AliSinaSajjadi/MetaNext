import React from 'react';
import style from "../styles/Items.module.css"
const Items = (props) => {
    return (
        <div className={style.container}>
            <img src={props.img} alt="Skate"  />
            <div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            </div>
        </div>
    );
};

export default Items;