import React from 'react';

interface IProps {
    title: string;
    symbol: string;
}

export const EmojiRow = (props: IProps)=>{
    return (
        <li className='flex justify-start m-3 text-lg border border-separate text-slate-600'>
            {`${props.symbol} ${props.title}`}
        </li>
    )
}