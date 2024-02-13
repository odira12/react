const Students = () =>{
    
//let students =['John', 'Mary', 'Samuel', 'susan'];
let students = [
    {id: 1, name: "John", course, "Full-stack"},
    {id: 2, name: "Mary", course: "Cyber Security"},
    {id: 3, name: "Samuel", course: "Database"},
    {id: 4, name: "Susan", course: "Full-stack"},
    {id: 4, name: "Susan", course: "Full-stack"}
];

let studentlist = student.map((student) =>(
  <h1 key={student.id}>{student.name}, {student.course}</h1>  
))
return(
    <div>
        {studentlist}
    </div>
);
}
export default students;