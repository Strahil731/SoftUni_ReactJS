import "../node_modules/react/umd/react.production.min.js";
import "../node_modules/react-dom/umd/react-dom.production.min.js";

const rootDomElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootDomElement);

// Create React Element
// const reactHeading = React.createElement("h1", {}, "Hello JSX!");
// const reactSecondHeading = React.createElement("h3", {}, "The best!");
// const header = React.createElement(
//     "header",
//     { className: "site- header" },
//     reactHeading, reactSecondHeading
// );



// JSX Syntax
const headerJSX = (
    <header className="site-header">
        <h1>Hello Strahil!</h1>
        <h2>THIS IS TEST!</h2>

        <p>THIS IS PARAGRAPHE</p>
    </header>
);

root.render(headerJSX);