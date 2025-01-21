import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child Constructor is called");
  }

  componentDidMount() {
    console.log("Child Component Did Mount called");
  }
  render() {
    const { name, location, contactNo } = this.props;
    const { count } = this.state;
    console.log("Child Render is called");
    return (
      <div className="user-card">
        <h4>Count is {count}</h4>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h3>User Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Contact No.: {contactNo}</h3>
      </div>
    );
  }
}
export default UserClass;
