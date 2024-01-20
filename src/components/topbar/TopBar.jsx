import "./topbar.css";
import { Link } from "react-router-dom";

import React from 'react'

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-square-x-twitter"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
                <li className="topListItem"><Link className="link" to="/">CONTRACT</Link></li>
                <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                <li className="topListItem">{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className="topRight">
          {user ?  (
            <img 
              className="topImg"
              src="https://images.pexels.com/photos/1289555/pexels-photo-1289555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            ) : (
                <ul className="topList">
                  <li className="topListItem">
                    <Link className="link" to="/login">
                      LOGIN
                    </Link>
                  </li>
                  <li className="topListItem">
                    <Link className="link" to="/register">
                      REGISTER
                    </Link>
                  </li>
                </ul>
              )}
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
