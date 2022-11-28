import React, {useState} from 'react';
import {data} from './data';

const UseStateArray = () => {
    //useState array
    const [people, setPeole] = useState(data);

    //remove item
    const removeItem = (id) =>{
        let newPeople = people.filter((person) => person.id !== id);
        setPeole(newPeople);
    }
    // clear item
    const clearHandle = () =>{
        setPeole([])
    }
    // change item
    const changeHandler = () =>{
        setPeole({name: 'hello world'})
    }
    return (
        <>
            {/* map() -> list item */}
            {people.map((person)=>{
                const {id, name} = person;
                return(
                    <div key={id}>
                        <h3>{name}</h3>
                        {/* remove button */}
                        <button type='button' onClick={()=>removeItem(id)}>Remove item</button>
                    </div>
                );
            })}

            {/* clear button */}
            <button type='button' onClick={clearHandle}>Clear item</button>
            {/* useState object - change item */}
            <button type='button' onClick={changeHandler}>Change item</button>
        </>
    );
}

export default UseStateArray;