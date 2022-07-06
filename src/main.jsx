import React from "react";
import ReactDOM from "react-dom/client";
// import { createRoot } from "react-dom/client";
// import { CounterApp } from "./CounterApp";
import "./styles.css";
import {FirstApp} from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';

// const container = document.getElementById( 'root' );
// const root = createRoot(container);
// root.render(<FirstApp title={'Holis que tal'}/>)

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <CounterApp value={0} /> */}
        <FirstApp title={"Sere el proximo rey de los piratas"}/>
    </React.StrictMode>
)