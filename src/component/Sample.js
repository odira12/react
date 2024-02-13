// import{ useState} from "react";

//  const Sample = () => {
// // //     const [name, setName]= useState('John Doe');
// // //     const changeName =()=>{
// // //         setName('Mary Deo')
// // //     }
// // //     return (
// // //         <div>
// // //             <h1>My name is{name}</h1>
// // //             <button onClick={changeName}> change Name</button>
// // //         </div>
// // //     );

//     const[count, setCount] = useState(1);
//     return(
//         <div>
//             <h1>love react</h1>
//             <p>The value is{count}</p>
//             <button onClick={()=> setCount(count + 1)}>+</button>
//             <button onClick={()=> setCount(count - 1)}>-</button>
            
//         </div>
//     );

// }
// export default Sample;
import React, { Component } from "react";

class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Love React</h1>
        <p>The value is {this.state.count}</p>
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
      </div>
    );
  }
}

export default Sample;









