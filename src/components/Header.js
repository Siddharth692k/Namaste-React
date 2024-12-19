import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo-icon" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-logout-btn" onClick={() => setIsLogin((isLo) => !isLo)}>{isLogin ? "Login" : "Logout"}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;