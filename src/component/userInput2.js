import React, { useState } from 'react';

const UserInput2 = () => {

    const [data, setData]=useState({
        firstname: '',
        lastname: '',
        course: ''
    })
    const handleInput=(e)=>{
        const {name, value} = e.target;
        setData((prev)=>{
            return {...prev,[name]: value}
        })
    }
    const handleSubmit=(e)=>{
        // code handle submit
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                 <label>Firstname</label><br/>
                 <input type="text" name="firstname" onChange={handleInput} placeholder="enter your firstname"/><br/>


                 <label>Lastname</label><br/>
                 <input type="text" name="lastname" onChange={handleInput} placeholder="enter your lastname"/><br/>

                 <label>Course</label><br/>
                 <input type="text" name="course" onChange={handleInput} placeholder="enter your course"/><br/>

                 <button type="submit"> Save Details</button>
                 <p>{data.firstname}</p>
                 <p>{data.lastname}</p>
                 <p>{data.course}</p>



            </form>
        </div>
    )
}
export default UserInput2;