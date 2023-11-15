import React from 'react';
import style from "../../styles/option.module.css"

interface OptionProps {
  img: string;
  text: string;
}

const Option: React.FC<OptionProps> = (props) => {
  return (
    <div className={style.container}>
      <img src={props.img} alt="Option" />
      <h3>{props.text}</h3>
    </div>
  );
};

export default Option;