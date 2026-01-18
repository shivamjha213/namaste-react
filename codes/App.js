// Render a React element into the DOM using React and ReactDOM

console.log("React:", React);
console.log("ReactDOM:", ReactDOM);
        
const heading = React.createElement(
    "h1",
    {id :"react_heading" ,xyz : "abc"},  //attribute
    "Hello World from React"             //children
);
console.log (heading);
//if we do console.log(heading); it will give React element object-  It’s a JavaScript object.

const shiv = ReactDOM.createRoot(document.getElementById("shiv"));
shiv.render(heading);






/** nested structure formation using react
 * 
 * <div id="parent">
    <div id="child_1">
        <h3>I am react child 11</h3>
        <h3>I am react child 12</h3>
    </div>

    <div id="child_2">
        <h3>I am react child 21</h3>
        <h3>I am react child 22</h3>
    </div>
</div>
**/
// let's code :

const parent =React.createElement("div",{id:"parent"},[
    //child
    React.createElement("div",{id:"child_1"},[
        React.createElement("h3",{},"I am react child 11"),
        React.createElement("h3",{},"I am react child 12"),
    ]),

    React.createElement("div",{id:"child_2"},[
        React.createElement("h3",{},"I am react child 21"),
        React.createElement("h3",{},"I am react child 22"),
    ])
]);
shiv.render(parent);