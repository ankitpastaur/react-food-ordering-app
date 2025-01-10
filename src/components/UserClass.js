import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, location, contactNo } = this.props;
    return (
      <div className="user-card">
        <h3>User Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Contact No.: {contactNo}</h3>
      </div>
    );
  }
}
export default UserClass;
