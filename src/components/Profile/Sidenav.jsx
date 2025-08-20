import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import '../../assets/styles/Sidenav.css'
import QuizImg from "../icons/QuizImg";
import SettingsImg from '../icons/SettingsImg';
import ProfileImg from '../icons/ProfileImg'
import OverviewImg from '../icons/OverviewImg';
import LogOut from '../icons/LogOut'

const Sidenav = () => {

    const location = useLocation();
    const isOverview = location.pathname.includes("/overview");
    const isSettings = location.pathname.includes("/settings");
    const isQuiz = location.pathname.includes("/quiz");

    return (
        <div className="sidenav">
            <aside className="sidebar">
                <div className="top">
                    <img src="src\assets\images\LogoW.svg" alt="" className='logo-afaq' />
                    <hr className='hr-logo' />
                </div>

                <nav>
                    <ul className='barr'>
                        <li className={`nav-icon ${!isOverview && !isSettings && !isQuiz ? "active" : ""}`}>
                            <Link to="/profile" className={`${!isOverview && !isSettings && !isQuiz ? "text-#FFC800-500" : ""}`}>
                                <ProfileImg className='iconii' color={!isOverview && !isSettings && !isQuiz ? "#FFC800" : "white"} />
                                <p style={{ color: !isOverview && !isSettings && !isQuiz ? "#FFC800" : "white" }}>Profile</p>
                            </Link>
                        </li>

                        <li className={`nav-icon ${isOverview ? "active" : ""}`}>
                            <Link to="/profile/overview">
                                <OverviewImg className='iconii' color={isOverview ? "#FFC800" : "white"} />
                                <p style={{ color: isOverview ? "#FFC800" : "white" }}>Overview & Statistics</p>
                            </Link>
                        </li>

                        <li className={`nav-icon ${isQuiz ? "active" : ""}`}>
                            <Link to="/profile/quiz">
                                <QuizImg className='iconii' color={isQuiz ? "#FFC800" : "white"} />
                                <p style={{ color: isQuiz ? "#FFC800" : "white" }}>Quizes</p>
                            </Link>
                        </li>

                        <li className={`nav-icon ${isSettings ? "active" : ""}`}>
                            <Link to="/profile/settings">
                                <SettingsImg className='iconii' color={isSettings ? "#FFC800" : "white"} />
                                <p style={{ color: isSettings ? "#FFC800" : "white" }}>Settings</p>
                            </Link>
                        </li>


                        {/* Add more links here */}
                    </ul>
                </nav>
                <div className="log-out">
                    <Link to="/profile">
                        <LogOut className='iconii' color="white" />
                        <p>Log out</p>
                    </Link>
                </div>
            </aside>

            <main className="content">
                {/* Nested routes like Overview will render here */}
                <Outlet />
            </main>
        </div>
    )
}

export default Sidenav
