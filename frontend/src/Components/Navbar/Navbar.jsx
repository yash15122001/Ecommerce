import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li
                    onClick={() => {
                        setMenu("shop");
                    }}
                >
                    <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
                        Shop
                    </Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li
                    onClick={() => {
                        setMenu("men");
                    }}
                >
                    <Link
                        style={{ color: "inherit", textDecoration: "inherit" }}
                        to="/men"
                    >
                        Men
                    </Link>
                    {menu === "men" ? <hr /> : <></>}
                </li>
                <li
                    onClick={() => {
                        setMenu("women");
                    }}
                >
                    <Link
                        style={{ color: "inherit", textDecoration: "inherit" }}
                        to="/women"
                    >
                        Women
                    </Link>
                    {menu === "women" ? <hr /> : <></>}
                </li>
                <li
                    onClick={() => {
                        setMenu("kids");
                    }}
                >
                    <Link
                        style={{ color: "inherit", textDecoration: "inherit" }}
                        to="/kids"
                    >
                        Kids
                    </Link>
                    {menu === "kids" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login" onClick={() => {
                        setMenu("login");
                    }}>
                    <button>Login</button>
                </Link>
                <Link to="/cart" onClick={() => {
                        setMenu("cart");
                    }} >
                    <img src={cart_icon} alt="" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;
