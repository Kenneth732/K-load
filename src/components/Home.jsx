import React from 'react'
import './Home.css'
import UserProfileBord from './assets/Kenne.jpg'
import BackgroundProfile from './assets/ken-brown.png'
import { Link } from 'react-router-dom'
import Places from './assets/nak.jpg'
import User1 from './assets/post1.jpg'
import User2 from './assets/post2.jpg'
import User3 from './assets/post3.jpg'
import Post1 from './assets/post1.jpg'
import Post2 from './assets/post2.jpg'
import Post3 from './assets/post3.jpg'
import Me from './assets/me.jpg'

function Home() {
    return (
        <div>
            <div className="container">
                <div className="left-sidebar">
                    <div className="profile-box">
                        <img src={Me} alt="" className='profile-img' />
                        <div className="sidebar-profile-info">
                            <img src={UserProfileBord} alt="" />
                            <h1>Dean Wichester</h1>
                            <h3>Movie Actor</h3>
                            <ul>
                                <li>Your Profile views <span>45</span> </li>
                                <li>Your  views <span>756</span> </li>
                                <li>Your connecttion <span>340</span> </li>
                            </ul>
                        </div>
                        <div className="sidebar-profile-link">
                            <Link className="a" to="/">
                                <i class="fas fa-bookmark"></i> My items
                            </Link>
                            <Link className="a" to="/">
                                <img src="" alt="" /> Try Premium
                            </Link>
                        </div>
                    </div>

                    <div className="sidebar-activity">
                        <h3>RECENT</h3>
                        <Link className="a" to="/">
                            <i class="fas fa-users"></i> Web Development
                        </Link>
                        <Link className="a" to="/">
                            <i class="fas fa-users"></i> User Interface
                        </Link>
                        <Link className="a" to="/">
                            <i class="fas fa-users"></i> Online Learning
                        </Link>
                        <Link className="a" to="/learn-online">
                            <i class="fas fa-users"></i> Learn Online
                        </Link>
                        <Link className="a" to="/codewise">
                            <i class="fas fa-users"></i> CodeWise
                        </Link>
                        <h3>Groups</h3>
                        <Link className="a" to="/c-game">
                            <i class="fas fa-users"></i> C++ Game Designer
                        </Link>
                        <Link className="a" to="/python-javascript">
                            <i class="fas fa-users"></i> Python & Javascript
                        </Link>
                        <Link className="a" to="/script-tensor">
                            <i class="fas fa-users"></i> JavaScript & TensorFlow
                        </Link>
                        <Link className="a" to="/database-mana">
                            <i class="fas fa-users"></i> C# DATABASE Managment
                        </Link>
                        <Link className="a" to="/react-dev">
                            <i class="fas fa-users"></i> Code ReactJs Client Side
                        </Link>
                        <h3>HASHTAG</h3>
                        <Link className="a" to="/userinter">
                            <i class="fas fa-users"></i> userinterface
                        </Link>
                        <Link className="a" to="/rails">
                            <i class="fas fa-users"></i> ruby on rails
                        </Link>
                        <Link className="a" to="/git">
                            <i class="fas fa-users"></i> git
                        </Link>
                        <div className="discover-more-link">
                            <Link className="a" to="/dicover">
                                Discover more
                            </Link>
                        </div>
                    </div>
                </div>

                {/*  */}
                {/*  */}

                <div className="content-middle">
                    <div className="create-post">
                        <div className="create-post-input">
                            <img src={UserProfileBord} alt="user-name" />
                            <textarea placeholder='Write a post' cols="30" rows="10"></textarea>
                        </div>
                        <div className="create-post-links">
                            <li><i class="fas fa-images"></i>Photo</li>
                            <li><i class="fas fa-calendar-alt"></i>Video</li>
                            <li><i class="fas fa-newspaper"></i>Event</li>
                            <li>Post</li>
                        </div>
                    </div>

                    <div className="sort-by">
                        <hr />
                        <p>Sort by:  <span>top <img src="" alt="" /></span></p>
                    </div>

                    <div className="post">
                        <div className="post-author">
                            <img src={UserProfileBord} alt="" />
                            <div>
                                <h1>Dean Doe</h1>
                                <small>Creator of A-speed WebApplication</small>
                                <small>2 hours ago</small>
                            </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut possimus cupiditate, est minus quod fuga aliquid nobis mollitia eum modi magni numquam exercitationem sit culpa. Suscipit voluptates animi ullam minus magnam voluptatum quidem, nostrum explicabo nemo totam aperiam sunt consequatur? Similique ducimus ea nulla reprehenderit non rem voluptas eius fuga?</p>
                        <img src={Places} alt="" className='post-data' />

                        <div className="post-status">
                            <div>
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <span className='liked-user'>Mike Smith snd 12 others</span>
                            </div>
                            <div>
                                <span>300 comments &middot; 40 shared</span>
                            </div>
                        </div>
                        <div className='post-activity'>
                            <div className="">
                                <img src="" alt="" className="post-activity-user-icom" />
                                <img src="" alt="" className="post-activity-arrow-icom" />
                            </div>
                            <div className='post-activity-link'>
                                <img src="" alt="" />
                                <span>Like</span>
                            </div>
                            <div className='post-activity-link'>
                                <img src="" alt="" />
                                <span>comment</span>
                            </div>
                            <div className='post-activity-link'>
                                <img src="" alt="" />
                                <span>share</span>
                            </div>
                            <div className='post-activity-link'>
                                <img src="" alt="" />
                                <span>send</span>
                            </div>
                        </div>
                    </div>

                    <div className="post">
                        <div className="post-author">
                            <img src={User1} alt="" />
                            <div>
                                <h1>Dean Doe</h1>
                                <small>Creator of A-speed WebApplication</small>
                                <small>2 hours ago</small>
                            </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut possimus cupiditate, est minus quod fuga aliquid nobis mollitia eum modi magni numquam exercitationem sit culpa. Suscipit voluptates animi ullam minus magnam voluptatum quidem, nostrum explicabo nemo totam aperiam sunt consequatur? Similique ducimus ea nulla reprehenderit non rem voluptas eius fuga?</p>
                        <img src={Post1} alt="" className='post-data' />

                        <div className="post-status">
                            <div>
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <span className='liked-user'>Mike Smith snd 12 others</span>
                            </div>
                            <div>
                                <span>300 comments &middot; 40 shared</span>
                            </div>
                        </div>
                        <div className='post-activity'>
                            <div className="">
                                <img src="" alt="" className="post-activity-user-icom" />
                                <img src="" alt="" className="post-activity-arrow-icom" />
                            </div>
                            <div className='post-activity-link'>
                                <img src="" alt="" />
                                <span>Like</span>
                            </div>
                            <div className='post-activity-link'>
                                <img src="" alt="" />
                                <span>comment</span>
                            </div>
                            <div className='post-activity-link'>
                                <img src="" alt="" />
                                <span>share</span>
                            </div>
                            <div className='post-activity-link'>
                                <img src="" alt="" />
                                <span>send</span>
                            </div>
                        </div>
                    </div>

                    <div className="post">
                        <div className="post-author">
                            <img src={User2} alt="" />
                            <div>
                                <h1>Dean Doe</h1>
                                <small>Creator of A-speed WebApplication</small>
                                <small>2 hours ago</small>
                            </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut possimus cupiditate, est minus quod fuga aliquid nobis mollitia eum modi magni numquam exercitationem sit culpa. Suscipit voluptates animi ullam minus magnam voluptatum quidem, nostrum explicabo nemo totam aperiam sunt consequatur? Similique ducimus ea nulla reprehenderit non rem voluptas eius fuga?</p>
                        <img src={Post2} alt="" className='post-data' />

                        <div className="post-status">
                            <div>
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <span className='liked-user'>Mike Smith snd 12 others</span>
                            </div>
                            <div>
                                <span>300 comments &middot; 40 shared</span>
                            </div>
                        </div>
                        <div className='post-activity'>
                            <div className="">
                                <img src="" alt="" className="post-activity-user-icom" />
                                <img src="" alt="" className="post-activity-arrow-icom" />
                            </div>
                            <div className='post-activity-link'>
                                <img src="" alt="" />
                                <span>Like</span>
                            </div>
                            <div className='post-activity-link'>
                                <img src="" alt="" />
                                <span>comment</span>
                            </div>
                            <div className='post-activity-link'>
                                <img src="" alt="" />
                                <span>share</span>
                            </div>
                            <div className='post-activity-link'>
                                <img src="" alt="" />
                                <span>send</span>
                            </div>
                        </div>
                    </div>

                    <div className="post">
                        <div className="post-author">
                            <img src={User3} alt="" />
                            <div>
                                <h1>Dean Doe</h1>
                                <small>Creator of A-speed WebApplication</small>
                                <small>2 hours ago</small>
                            </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut possimus cupiditate, est minus quod fuga aliquid nobis mollitia eum modi magni numquam exercitationem sit culpa. Suscipit voluptates animi ullam minus magnam voluptatum quidem, nostrum explicabo nemo totam aperiam sunt consequatur? Similique ducimus ea nulla reprehenderit non rem voluptas eius fuga?</p>
                        <img src={Post3} alt="" className='post-data' />

                        <div className="post-status">
                            <div>
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <span className='liked-user'>Mike Smith snd 12 others</span>
                            </div>
                            <div>
                                <span>300 comments &middot; 40 shared</span>
                            </div>
                        </div>
                        <div className='post-activity'>
                            <div className="">
                                <img src={User2} alt="" className="post-activity-user-icom" />
                                <img src="" alt="" className="post-activity-arrow-icom" />
                            </div>
                            <div className='post-activity-link'>
                                <img src="" alt="" />
                                <span>Like</span>
                            </div>
                            <div className='post-activity-link'>
                                <img src="" alt="" />
                                <span>comment</span>
                            </div>
                            <div className='post-activity-link'>
                                <img src="" alt="" />
                                <span>share</span>
                            </div>
                            <div className='post-activity-link'>
                                <img src="" alt="" />
                                <span>send</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                {/*  */}

                <div className="right-sidebar">
                    <div className="sidebar-news">
                        <i class="fas fa-question inforIcon"></i>
                        <h3>Tranding News</h3>
                        <Link className="a" to="/">
                            High demand for skilled manpower
                        </Link>
                        <span>1 ag0&middot; 10,978 reader</span>

                        <Link className="a" to="/">
                            Carrers grwing horizonrally too
                        </Link>
                        <span>19h ago&middot; 34,568 reader</span>

                        <Link className="a" to="/">
                            More hiring = highet cinfidence
                        </Link>
                        <span>10h ag0&middot; 10,978 reader</span>
                        <Link className="a" to="/">
                            Gautam Adani is worl's third richest
                        </Link>
                        <span>20 ag0&middot; 13,978 reader</span>

                        <Link className="read-more-link" to="/">
                            Read More
                        </Link>
                    </div>

                    <div className="sidebar-ad">
                        <span>Ad</span>
                        <p>Master the 5 principles of web ddevelopment</p>
                        <div>
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                        <p>Brand and Demand in Xiaoni</p>
                        <Link className="ad-link" to="/">
                            Learn More
                        </Link>
                    </div>

                    <div className="sidebar-useful-links">
                        <Link className="ad-links" to="/">
                            About
                        </Link>
                        <Link className="ad-links" to="/">
                            Accessibbility
                        </Link>
                        <Link className="ad-links" to="/">
                            Help Center
                        </Link>
                        <Link className="ad-links" to="/">
                            Privacy Policy
                        </Link>
                        <Link className="ad-links" to="/">
                            Advertising
                        </Link>
                        <Link className="ad-links" to="/">
                            Get the App
                        </Link>
                        <Link className="ad-links" to="/">
                            More
                        </Link>


                        <div className="copyright-msg">
                            <img src="" alt="" />
                            <p>Linkedup 8#169; 2023. All right reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home