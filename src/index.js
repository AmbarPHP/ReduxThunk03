import React from "react";
import ReactDOM from "react-dom";

import Main from "./components/main.js";
import { Provider } from "react-redux";
//IMPORTAMOS LA STORE
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

//https://redux.js.org/introduction/examples

