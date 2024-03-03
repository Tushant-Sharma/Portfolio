import React, { useState } from "react"
import { Link, NavLink, Outlet } from "react-router-dom"
const Header = () => {

    const [nav, setNav] = useState<boolean>(false);

    const showNavBar = () => {
        if (nav) { setNav(false) }
        else setNav(true)
    }

    const hideNavBar = () => {
        setNav(false);
    }

    return (
        <>
            <div className="header-area">
                <div className="container">
                    <div className="gx-row d-flex align-items-center justify-content-between">
                        <Link to="/home" className="logo">
                            <h1 className="title">TS</h1>
                            {/* <img src="../src/assets/images/logo.svg" alt="Logo" /> */}
                        </Link>

                        <nav className={nav == true ? " navbar active" : "navbar"}>
                            <ul className="menu">
                                <li><NavLink onClick={hideNavBar} className={({ isActive }) => (isActive ? 'active' : '')} to="home">Home</NavLink></li>
                                <li><NavLink onClick={hideNavBar} className={({ isActive }) => (isActive ? 'active' : '')} to="about">About</NavLink></li>
                                <li><NavLink onClick={hideNavBar} className={({ isActive }) => (isActive ? 'active' : '')} to="project">Work</NavLink></li>
                                <li><NavLink onClick={hideNavBar} className={({ isActive }) => (isActive ? 'active' : '')} to="contact">Contact</NavLink></li>
                            </ul>
                            <Link to="contact" onClick={showNavBar} className="theme-btn">Let's talk</Link>
                        </nav>
                        <Link to="contact" className="theme-btn">Let's talk</Link>
                        <div onClick={showNavBar} className={nav == true ? "show-menu active" : "show-menu"}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Footer = () => {
    return (<>
        <footer className="footer-area">
            <div className="container">
                <div className="footer-content text-center">
                    <Link to="/home" className="logo">
                        <h1 className="title">TS</h1>
                        {/* <img src="../src/assets/images/logo.svg" alt="Logo" /> */}
                    </Link>
                    <ul className="footer-menu">
                        <li><Link to="home">Home</Link></li>
                        <li><Link to="about">About </Link></li>
                        <li><Link to="work">Work</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                    </ul>
                    <p className="copyright">
                        &copy; All rights reserved by <span>Tushant Sharma</span>
                    </p>
                </div>
            </div>
        </footer>
    </>)
}


const HomeLayout: React.FC = () => {
    return (
        <>
            <Header />
            <section className="about-area">
                <div className="container">
                    <Outlet />
                </div>
            </section>
            <Footer />
        </>
    )
}


export { Header, Footer, HomeLayout };