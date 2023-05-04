import React from "react";
import ReactDOM from "react-dom/client";
import img from "./asset/dish.jpg";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg" />
            </div>

            <div className="nav-iteam">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const ResturentCard = () => {
    return (
        <div className="res-card" >
            <img className="dish-img" alt="dish" src={img} />
            <h3>Meghna Foods</h3>
            <h4>Briyani, North Indian,Asian</h4>
            <h4>4.4 starts</h4>
            <h4>38 minutes</h4>
        </div>
    )
}


const Body = () => {
    return (
        <div className="body">
            <div className="search" >search</div>
            <div className="res-container">
                {/* resturent Card will come here */}
                <ResturentCard />
                <ResturentCard />
                <ResturentCard />
                <ResturentCard />
                <ResturentCard />
                <ResturentCard />
                <ResturentCard />
                <ResturentCard />
            </div>
        </div>
    )
}


const Applayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}












const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />)

