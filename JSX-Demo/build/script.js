import "../node_modules/react/umd/react.production.min.js";
import "../node_modules/react-dom/umd/react-dom.production.min.js";

var rootDomElement = document.getElementById("root");
var root = ReactDOM.createRoot(rootDomElement);

// Create React Element
// const reactHeading = React.createElement("h1", {}, "Hello JSX!");
// const reactSecondHeading = React.createElement("h3", {}, "The best!");
// const header = React.createElement(
//     "header",
//     { className: "site- header" },
//     reactHeading, reactSecondHeading
// );


// JSX Syntax
var headerJSX = React.createElement(
    "header",
    { className: "site-header" },
    React.createElement(
        "h1",
        null,
        "Hello Strahil!"
    ),
    React.createElement(
        "h2",
        null,
        "THIS IS TEST!"
    ),
    React.createElement(
        "p",
        null,
        "THIS IS PARAGRAPHE"
    )
);

root.render(headerJSX);