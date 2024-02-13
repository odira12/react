import  { useState } from 'react';

const UserInput = () => {
  // State variables for first name, last name, and course
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [course, setCourse] = useState('');


  return (
    <form>
    <div>

          <label>First Name:</label><br/>
          <input type="text" name="firstName"
            value={firstName} onChange={(e)=>setFirstName(e.target.value)}
            placeholder='enter your  firstname'/><br/>
        
          <label>Last Name:</label><br/>
          <input type="text" name="lastName"
            value={lastName} onChange={(e)=>setLastName(e.target.value)}
         placeholder='enter your lastname'/><br/>

          <label>Course:</label><br/>
          <input  type="text" name="course"
            value={course} onChange={(e)=>setCourse(e.target.value)}
          placeholder='enter  yor course'/><br/>

          <button>Save Details</button>
          <p>{firstName}</p>
          <p>{lastName}</p>
          <p>{course}</p>
        </div>


      </form>
  );
};

export default UserInput;
