import React, { useState } from "react";
//useState-function:
//component name must be uppercase
//must be in the function/component body
//cannot call conditionally


export const UseSateBasics = ()=>{
    //useState declare
    // const [text, setText] = useState('random title');
    // const clickHandler =()=>{
    //     if(text === 'random title'){
    //         setText('Hello world');
    //     // alert('welcome')
    //     }else{
    //         setText('random title');
    //     }
    // };
    // return(
    //     <React.Fragment>
    //         <h1>{text}</h1>
    //         <button type="button" onClick={clickHandler}>Change here</button>
    //     </React.Fragment>
    // );

    //SIMPLE COUNTER
    const [counter, setCounter] = useState(0);
    //increase
    const increaseCounter = ()=>{
        // setCounter(counter+1);
        setTimeout(() => {
            setCounter((prevState) => {
                return prevState + 1;
            });
        },200);
    };

    //descrease
    const decreaseCounter = ()=>{
        // setCounter(counter-1);
        setTimeout(() => {
            setCounter((prevState) =>{
                return prevState -1;
            });
        },20);
    };
    //reset
    const resetCounter = ()=>{
        setCounter(0);
    };

    return(
        <section style={{margin:'5rem'}}>
            <h2>Simple Counter</h2>
            <h1>{counter}</h1>
            <button type="button" onClick={increaseCounter}>+</button>
            <button type="button" onClick={decreaseCounter}>-</button>
            <button type="button" onClick={resetCounter}>reset</button>
        </section>
    );

}; 
