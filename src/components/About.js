import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor is called");
  }

  componentDidMount() {
    console.log("Paraent Did Mount is called");
  }
  render() {
    console.log("Parent Render is called");
    return (
      <div>
        <h1>About us using class component</h1>
        <h2>User Info</h2>
        <UserClass
          name={"First Class"}
          location={"Bhopal"}
          contactNo={5456987896}
        />
        <UserClass
          name={"second Class"}
          location={"Indore"}
          contactNo={5456987896}
        />
        <UserClass
          name={"Third Class"}
          location={"Pune"}
          contactNo={5456987896}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About us</h1>
//       <h2>User Info</h2>
//       <UserClass
//         name={"Ankit Class"}
//         location={"Nanital class"}
//         contactNo={5456987896}
//       />
//     </div>
//   );
// };

export default About;
