import React from "react";
import ReactDOM from "react-dom/client";
import img from "../asset/dish.jpg";
import Header from "./components/Header";
import Body from "./components/Body"
// started here

const Applayout = () => {
    return (
        <div className="app mx-auto">
            <Header />
            <  Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />)

