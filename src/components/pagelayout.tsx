import React, { PropsWithChildren } from "react"
import { Link, Outlet } from "react-router-dom"
const Header = () => {

    return (
        <>
            <div className="header-area">
                <div className="container">
                    <div className="gx-row d-flex align-items-center justify-content-between">
                        <a href="index.html" className="logo">
                            <h1 className="title">TS</h1>
                            {/* <img src="../src/assets/images/logo.svg" alt="Logo" /> */}
                        </a>

                        <nav className="navbar">
                            <ul className="menu">
                                <li><Link to="home">Home</Link></li>
                                <li><Link to="about">About </Link></li>
                                <li><Link to="work">Work</Link></li>
                                <li><Link to="contact">Contact</Link></li>
                            </ul>
                            <a href="contact.html" className="theme-btn">Let's talk</a>
                        </nav>

                        <a href="contact.html" className="theme-btn">Let's talk</a>

                        <div className="show-menu">
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
                    <a href="index.html" className="logo">
                        <h1 className="title">TS</h1>
                        {/* <img src="../src/assets/images/logo.svg" alt="Logo" /> */}
                    </a>
                    <ul className="footer-menu">
                        <li><Link to="home">Home</Link></li>
                        <li><Link to="about">About </Link></li>
                        <li><Link to="work">Work</Link></li>
                        <li><Link to="contact">Contact</Link></li>


                    </ul>
                    <p className="copyright">
                        &copy; All rights reserved by <span>WordPress River</span>
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