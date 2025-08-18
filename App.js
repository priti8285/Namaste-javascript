import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement( "h1", {
//     id: "heading",
// }, "Hello World From React !");

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am Hello TAG!"),
    React.createElement("h2", {}, "I am H2 TAG!")
  )
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
