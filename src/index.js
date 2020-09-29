import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Routes from "./routes";
import store from "./app";
import * as serviceWorker from "./serviceWorker";
import Primary from "templates/Primary";
import registerFontAwesome from "utils/registerFontAwesome";
import "styles/index.scss";

registerFontAwesome();
const mainBranch = "/10x-website";

let Router = BrowserRouter;
let basename = process.env.PUBLIC_URL;

if (process.env.NODE_ENV !== "production") {
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

if (!process.env.PUBLIC_URL.includes(mainBranch)) {
  Router = HashRouter;
}

ReactDOM.render(
  <React.StrictMode>
    <Router basename={basename}>
      <Provider store={store}>
        <Primary>
          <Routes />
        </Primary>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
