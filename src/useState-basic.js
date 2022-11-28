import React, { useState } from "react";
//useState-function:
//component name must be uppercase
//must be in the function/component body
//cannot call conditionally


export const UseSateBasics = ()=>{
    //useState declare
    const [text, setText] = useState('random title');
    const clickHandler =()=>{
        if(text === 'random title'){
            setText('Hello world');
        // alert('welcome')
        }else{
            setText('random title');
        }
    };
    return(
        <React.Fragment>
            <h1>{text}</h1>
            <button type="button" onClick={clickHandler}>Change here</button>
        </React.Fragment>
    );

}; 
