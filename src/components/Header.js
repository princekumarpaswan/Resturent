import { useState } from "react";


const Header = () => {

    const [login, setlogin] = useState("login");


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
                    <li><button className="loginBtn" onClick={() => setlogin("logOut")} >{login}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;