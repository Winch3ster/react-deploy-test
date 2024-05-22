/* eslint-disable no-unused-vars */
import React from 'react'

export const SorryButton = () => {
    function saySorry(){
        console.log("Sorry mate!");
    }
  return (
    <button onClick={saySorry}>Sorry</button>
  )
}
