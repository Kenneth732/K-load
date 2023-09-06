import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProfileUser.css';
import Profile from './assets/Kenne.jpg';
import Back from './assets/nak.jpg'
import UserPic from './assets/Kenne.jpg'

function ProfileUser() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <>
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
                            <img src={Profile} alt="" className="profile" />
                        </div>
                        <div className="icont-menu" onClick={toggleMenu}>
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                    </div>

                    {/* profile-drop-down-menu */}
                    <div className={`profile-menu-wrap ${menuActive ? 'open-menu' : ''}`}>
                        <div className="profile-menu">
                            <div className="user-info">
                                <img src={Profile} alt="" className='img' />
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
                            <i class="fas fa-comment-medical"></i>
                                <p>Give Feedback</p>
                                <span></span>
                            </Link>
                            <Link className="profile-menu-link" to="/">
                            <i class="fas fa-user-cog"></i>
                                <p>Settings & Privacy</p>
                                <span></span>
                            </Link>
                            <Link className="profile-menu-link" to="/">
                            <i class="fas fa-info-circle"></i>
                                <p>Help & Support</p>
                                <span></span>
                            </Link>
                            <Link className="profile-menu-link" to="/">
                            <i class="fas fa-user-cog"></i>
                                <p>Display & Accessibility</p>
                                <span></span>
                            </Link>
                            <Link className="profile-menu-link" to="/">
                            <i class="fas fa-sign-out-alt"></i>
                                <p>Logout</p>
                                <span></span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="profile-main">
                        <div className="profile-container">
                            <img src={Back} alt="" />
                            <div className="profile-container-inner">
                                <img src={UserPic} alt="" className='profile-pic' />
                                <h1>Dean Winchester</h1>
                                <b>Web Developer at Moringa | former Developer at DataStack and Intern at Oracle</b>
                                <p>San Francisco, United State &middot; <Link className="a" to="/">
                                    Contact infor
                                </Link></p>
                                <div className="mutual-connextion">
                                    <img src="" alt="" />
                                    <span>1 mutual connection: Orlando Githenji</span>
                                </div>
                                <div className="profile-btn">
                                    <Link className="a" to="/">
                                        <img src="" alt="" /> connect
                                    </Link>
                                    <Link className="a" to="/">
                                        <img src="" alt="" /> message
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="profile-description">
                            <h2>About</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ex tenetur vero deserunt itaque rerum veniam error alias quo consectetur incidunt harum qui assumenda ea inventore fugiat esse quaerat corrupti ipsam commodi, at velit, ad sapiente. Dolorum cumque temporibus facere minus repellendus quisquam provident, a impedit debitis blanditiis obcaecati consectetur, velit officiis adipisci incidunt. Delectus quasi inventore soluta tempore quo.</p>
                            <Link className="see-more-link" to="/">
                                See more...
                            </Link>
                        </div>
                        <div className="profile-description">
                            <h2>Expirience</h2>
                            <div className="profile-desc-row">
                                <img src="" alt="" />
                                <div>
                                    <h3>Lead Front-End Developer</h3>
                                    <b>Microsoft &middot; FuLL-time</b>
                                    <b>Feb 2019 - Present &middot; 1.5 years</b>
                                    <p>Computer programming Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deserunt velit illo quo quas quidem quam consectetur sed magnam doloremque illum laudantium modi delectus saepe quasi praesentium, cupiditate tempora? Commodi.</p>
                                    <hr />
                                </div>
                            </div>

                            <div className="profile-desc-row">
                                <img src="" alt="" />
                                <div>
                                    <h3>Lead Full Stack Developer</h3>
                                    <b>Slack &middot; FuLL-time</b>
                                    <b>June 2022 - Present &middot; 1.5 years</b>
                                    <p>Computer programming Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deserunt velit illo quo quas quidem quam consectetur sed magnam doloremque illum laudantium modi delectus saepe quasi praesentium, cupiditate tempora? Commodi.</p>
                                    <hr />
                                </div>
                            </div>

                            <div className="profile-desc-row">
                                <img src="" alt="" />
                                <div>
                                    <h3>Lead Back-End Developer</h3>
                                    <b>LinkedIn &middot; FuLL-time</b>
                                    <b>June 2023 - Present &middot; 1.5 years</b>
                                    <p>Computer programming Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deserunt velit illo quo quas quidem quam consectetur sed magnam doloremque illum laudantium modi delectus saepe quasi praesentium, cupiditate tempora? Commodi.</p>
                                    <hr />
                                </div>
                            </div>

                            
                            <Link className="see-more-link" to="/">
                                Show all 12 expirien.... <i class="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="profile-sidebar"></div>
            </div>
        </>
    );
}

export default ProfileUser;