import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./style.css";
import { store } from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBlog,
  faEye,
  faPen,
  faPenToSquare,
  faPlus,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faInstagram,
  faTwitter,
  faFacebookF,
  faEye,
  faPenToSquare,
  faTrash,
  faPen,
  faPlus,
  faUser,
  faBlog
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
