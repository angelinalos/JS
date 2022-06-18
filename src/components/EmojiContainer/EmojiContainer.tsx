import { EmojiRow } from "../EmojiRow/EmojiRow"
import React from 'react';


const emojies = [
  {
    title: "100",
    symbol: "💯",
    keywords:
      "hundred points symbol symbol wow wow win win perfect perfect parties parties",
  },
  {
    title: "1234",
    symbol: "🔢",
    keywords: "input symbol for numbers symbol",
  },
  {
    title: "Grinning",
    symbol: "😀",
    keywords: "grinning face happy smiley emotion emotion",
  },
]

export const EmojiContainer = () => {
  return (
    <ul className="w-60 border-4 border-stone-300 m-4">
      {emojies.map((item) => {
        return <EmojiRow symbol={item.symbol} title={item.title} />
      })}
    </ul>
  )
}
