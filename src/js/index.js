//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SimpleCounterManual from "./component/SimpleCounterManual.jsx";
import SimpleCounter from "./component/SimpleCounter.jsx";
import Explicacion from "./component/Explicacion.jsx";

// Include your index.scss file into the bundle
import '../styles/index.css';

//render your react application
const root = ReactDOM.createRoot(document.getElementById('app'));

setInterval(() => {
    root.render(
        <div>
            <SimpleCounter  />
            <SimpleCounterManual  />
            <Explicacion  />
        </div>
    );
}, 1000);