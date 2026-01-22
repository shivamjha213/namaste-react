import React from "react";
import ReactDOM from "react-dom/client";


console.log("React:", React);
console.log("ReactDOM:", ReactDOM);
        
const heading = React.createElement(
    "h1",
    {id :"react_heading" ,xyz : "abc"},  //attribute
    "Hello World from React"             //children
);
console.log (heading);

const shiv = ReactDOM.createRoot(document.getElementById("shiv"));
shiv.render(heading);



const parent =React.createElement("div",{id:"parent"},[
    //child
    React.createElement("div",{id:"child_1"},[
        React.createElement("h3",{},"I am react child 111"),
        React.createElement("h3",{},"I am react child 12"),
    ]),

    React.createElement("div",{id:"child_2"},[
        React.createElement("h3",{},"I am react child 21"),
        React.createElement("h3",{},"I am react child 22"),
    ])
]);
shiv.render(parent);