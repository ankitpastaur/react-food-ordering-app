const heading = React.createElement(
  "div",
  {
    id: "parent",
  },[
    React.createElement("div", { id: "child1" }, [
      React.createElement("h2", { id: "child2" }, "I am child"),
      React.createElement("h2", { id: "child2" }, "I am also child"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h2", { id: "child2" }, "I am child"),
      React.createElement("h2", { id: "child2" }, "I am also child"),
    ])
  ]
  
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
