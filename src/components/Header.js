import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { DataContext } from "../dataContext/dataContext";
import Logo from "../assets/images/blslogofinalwt.png";
import { IoMenu } from "react-icons/io5";

function Header() {
    const { isLoggedIn, logout } = useContext(DataContext);
    const navigate = useNavigate();

    return (
        <nav className="nav-bar">
            <div className="nav-bar-top">
                <div>
                    <img src={Logo} className="logo" alt="Businesslore Logo" />
                </div>
                {isLoggedIn
                    ? <button variant="outline-danger" className="logout-button" onClick={(e) => logout(e)}>Logout</button>
                    : ""
                }
            </div>
            {isLoggedIn
                ?
                <div>
                    <ul className="nav-bar-links">
                        <li>
                            <Link to="/dashboard">Home</Link>
                        </li>
                        <li>
                            <Link to="/image_compressor">Image Compressor</Link>
                        </li>
                    </ul>
                </div>
                :
                <div>
                    <ul className="nav-bar-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/technology">Technology Consulting</Link>
                        </li>
                        <li>
                            <Link to="/brand">Brand Support</Link>
                        </li>
                        <li>
                            <Link to="/digital">Digital Content</Link>
                        </li>
                    </ul>
                </div>
            }

            <Dropdown>
                <Dropdown.Toggle className="menu-icon" id="dropdown-basic">
                    <IoMenu />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate("/")}>Home</Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/technology")}>Technology Consulting</Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/brand")}>Brand Support</Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/digital")}>Digital Content</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </nav>
    );
}

export default Header;
