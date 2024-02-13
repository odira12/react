import { useState } from 'react';

const ConditionalRendering =()=>{
    const[display, setDisplay]= useState(true);
    let output;
    if(display){
        return(
            <div>
                <h1> Display is true hence this line is displayed</h1>
            </div>
        )
    }else{
        return(
            <div>
                <h1> Display is false: </h1>
            </div>
        )
    }

    // Ternary Conditional
return display ?
(
    <div>
        <h1>Display is true hence this line is displayed</h1>
    </div>
): (
    <div>
        <h1> Display is false hence display is not displayed</h1>
    </div>
);


// Conditional rendering using elements
if(display) {
    output = <h1> Display is true hence this line is displayed</h1>
} else {
 …