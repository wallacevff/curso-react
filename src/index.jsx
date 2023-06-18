import { createRoot } from 'react-dom/client';
import React from "react";
import "./index.css";

import App from "./App.jsx";
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root .render(
    <>
        <h1>
            Fundamentos React
        </h1>
        <App />
    </>
    ,
    
);