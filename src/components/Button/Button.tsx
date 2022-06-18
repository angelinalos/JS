import styles from './index.module.css'
import React from 'react';



interface IProps{
    text:string;
    disabled: boolean;
    type?: "primary" | "secondary";
}

export const Button = (props: IProps)=>{
    return (
    <button disabled={props.disabled} className={`${styles.button} ${props.disabled ? styles.disabled : ""} ${props.type ? styles[props.type] : styles.primary} `}>
        {props.text}
        </button>
        );
}