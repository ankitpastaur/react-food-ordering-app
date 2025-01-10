import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <h2>User Info</h2>
      <User name={"Ankit"} location={"Nanital"} contactNo={5456987896} />
      <UserClass
        name={"Ankit Class"}
        location={"Nanital class"}
        contactNo={5456987896}
      />
    </div>
  );
};

export default About;
