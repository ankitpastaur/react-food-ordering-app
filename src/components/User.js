import { useState } from "react";

const User = (props) => {
  const { name, location, contactNo } = props;
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h4>Count is : {count}</h4>
      <h3>User Name: {name}</h3>
      <h3>Location: {location}</h3>
      <h3>Contact No.: {contactNo}</h3>
    </div>
  );
};

export default User;
