import React from 'react';
import "./sidebar.css";

export default function sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img className="sidebarImg"
            src="https://images.pexels.com/photos/887824/pexels-photo-887824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" 
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Omnis!
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          </div>
        </div>       
    </div>
  )
}
