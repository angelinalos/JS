import styles from './user.module.css'
import React from 'react'
interface IProps{
    text:string;
}



export const User = (props: IProps)=>{
    return <div className="purple darken-2">{props.text}</div>   
}