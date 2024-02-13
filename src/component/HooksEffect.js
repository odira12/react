import { useEffect, useState } from "react";

const HooksEffect = ()=>{
    const[name, setName]= useState('lizz odira');
    const[name1,setNane1] = useState('Maya Clara');

    useEffect(()=>{
    console.log('User Effect called');
     },[name])
     return(
        <div>
            <h1> {name}</h1>
            <h1> {name1}</h1>
            <button onClick={() => setName("Lizzy Odira")}>Change Name</button>
             <button  onClick={()=> setNane1("Maya clara")}>Click me</button>
             </div>
     )
};
export default HooksEffect;
