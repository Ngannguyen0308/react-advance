import React, {useState} from 'react';

function UseStateObject(){
    //useState object
    const [person, setPerson] = useState({
        name: 'Peter',
        age: '24',
        message: 'random message',

    });

    // change message
    const changeHandler = () => {
        //ternary opera
        setPerson({...person, message:'hello world'})

    };

    return(
        <>
            <h1>{person.name}</h1>
            <h1>{person.age}</h1>
            <h1>{person.message}</h1>
            <button type='button' onClick={changeHandler}>Change message</button>
        </>
    );
}
export default UseStateObject;