import React from "react"
import { Button } from "../Button/Button"

export const Navbur = ()=>{
    return  <div className="space-y-2 relative">
      <Button disabled={false}/>
    <span className="block w-8 h-1  bg-gray-600 absolute top-3 left-4"></span>
    <span className="block w-8 h-1 bg-gray-600 absolute top-6 left-4"></span>
    <span className="block w-8 h-1 bg-gray-600 absolute top-9 left-4"></span>
  </div> 
}