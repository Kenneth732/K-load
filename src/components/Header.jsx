import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Profile from './assets/Kenne.jpg';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="containers">
      <div className="navbar">
        <div className="navleft">
          <h2 className="logo">
            <i className="fa-brands fa-kickstarter"></i>
          </h2>
          <div className="search">
            <input type="text" placeholder="search" />
          </div>
        </div>

        <div className="navmiddle">
          <ul>
            <li>
              <Link className="nav-link" to="/">
                <i className="fas fa-home"></i>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                <i className="fas fa-project-diagram"></i>
                My Network
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                <i className="fas fa-suitcase-rolling"></i>
                Job
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                <i className="fas fa-envelope"></i>
                Messaging
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                <i className="fas fa-bell"></i>
                Notifications
              </Link>
            </li>
          </ul>
        </div>

        <div className="navright">
          <div className="online offline">
            <Link to='/profileuser'>
               <img src={Profile} alt="" className="profile" />
            </Link>
          </div>
          <div className="icont-menu" onClick={toggleMenu}>
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>

        {/* profile-drop-down-menu */}
        <div className={`profile-menu-wrap ${menuActive ? 'open-menu' : ''}`}>
          <div className="profile-menu">
            <div className="user-info">
              <img src={Profile} alt="" className='img'/>
              <div>
                <h3>Dean Winchester</h3>
                <Link className="a" to="/">
                  See your profile
                </Link>
              </div>
            </div>
            <hr />

            {/* Update the image sources with valid sources */}
            <Link className="profile-menu-link" to="/">
              <img src="icon-source-here" alt="" />
              <p>Give Feedback</p>
              <span></span>
            </Link>
            <Link className="profile-menu-link" to="/">
              <img src="icon-source-here" alt="" />
              <p>Settings & Privacy</p>
              <span></span>
            </Link>
            <Link className="profile-menu-link" to="/">
              <img src="icon-source-here" alt="" />
              <p>Help & Support</p>
              <span></span>
            </Link>
            <Link className="profile-menu-link" to="/">
              <img src="icon-source-here" alt="" />
              <p>Display & Accessibility</p>
              <span></span>
            </Link>
            <Link className="profile-menu-link" to="/">
              <img src="icon-source-here" alt="" />
              <p>Logout</p>
              <span></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;















// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Header.css"; 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import UserProfile from './assets/Kenne.jpg'
// import { faBars } from "@fortawesome/free-solid-svg-icons"; 

// const Header = () => {
//   const [menuActive, setMenuActive] = useState(false);

//   const toggleMenu = () => {
//     setMenuActive(!menuActive);
//   };

//   return (
//     <div className="App-Header">
//       <div className="navbar">
//         <div className="navbar-left">
//           <Link to="/" className="logo">
//             CodeWise
//           </Link>
//         </div>
//         <div className="navbar-middle">
//           <ul>
//             <li>
//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link className="nav-link" to="/">
//                 My Network
//               </Link>
//             </li>
//             <li>
//               <Link className="nav-link" to="/">
//                 Job
//               </Link>
//             </li>
//             <li>
//               <Link className="nav-link" to="/">
//                 Messaging
//               </Link>
//             </li>
//             <li>
//               <Link className="nav-link" to="/">
//                 Notifications
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="navbar-right">
//           <img src={UserProfile} alt="" className="nav-img" />
//         </div>
{/* <nav className="nav-linkx">
          <ul className={`nav-links ${menuActive ? "active" : ""}`}>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
 
          </ul>
          <button className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav> */}
{/* </div>


    </div>
  );
};

export default Header;

 */}
