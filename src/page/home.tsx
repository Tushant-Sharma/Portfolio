import {  Github, Linkedin, Monitor, Settings, Settings2, TextSearch } from "lucide-react"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-6 aos-init aos-animate" data-aos="zoom-in">
                    <div className="about-me-box shadow-box">
                        <Link className="overlay-link" to="/about"></Link>
                        <img src="images/bg1.png" alt="BG" className="bg-img" />
                        <div className="img-box">
                            <img src="images/me.png" alt="About Me" />
                        </div>
                        <div className="infos">
                            <h4>A WEB DESIGNER</h4>
                            <h1>Tushant .Sharma</h1>
                            <p>I am a Web Designer based in India.</p>
                            <Link to="/#" className="about-btn">
                                <img src="images/icon.svg" alt="Button" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="about-credentials-wrap">
                        <div data-aos="zoom-in" className="aos-init aos-animate">
                            <div className="banner shadow-box">
                                <div className="marquee">
                                    <div>
                                        <span>LATEST WORK AND <b>FEATURED</b>
                                            <img src="images/star1.svg" alt="Star" /> LATEST WORK AND <b>FEATURED</b>
                                            <img src="images/star1.svg" alt="Star" /> LATEST WORK AND <b>FEATURED</b>
                                            <img src="images/star1.svg" alt="Star" /> LATEST WORK AND <b>FEATURED</b> LATEST WORK AND
                                            <img src="images/star1.svg" alt="Star" />
                                            LATEST WORK AND <b>FEATURED</b> LATEST WORK AND
                                            <img src="images/star1.svg" alt="Star" /></span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="gx-row d-flex gap-24">
                            <div data-aos="zoom-in" className="aos-init aos-animate">
                                <div className="about-crenditials-box info-box shadow-box h-full">
                                    <Link className="overlay-link" to="/profile"></Link>
                                    <img src="images/bg1.png" alt="BG" className="bg-img" />
                                    <img src="images/sign.png" alt="Sign" />
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="infos">
                                            <h4>more about me</h4>
                                            <h1>Credentials</h1>
                                        </div>

                                        <Link to="/profile" className="about-btn">
                                            <img src="images/icon.svg" alt="Button" />
                                        </Link>

                                    </div>
                                </div>
                            </div>

                            <div data-aos="zoom-in" className="aos-init aos-animate">
                                <div className="about-project-box info-box shadow-box h-full">
                                    <Link className="overlay-link" to="/works"></Link>
                                    <img src="images/bg1.png" alt="BG" className="bg-img" />
                                    <img src="images/my-works.png" alt="My Works" />
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="infos">
                                            <h4>SHOWCASE</h4>
                                            <h1>Projects</h1>
                                        </div>

                                        <Link to="/#" className="about-btn">
                                            <img src="images/icon.svg" alt="Button" />
                                        </Link>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-24">
                <div className="col-md-12">
                    <div className="blog-service-profile-wrap d-flex gap-24">
                        <div data-aos="zoom-in" className="aos-init aos-animate">
                            <div className="about-blog-box info-box shadow-box h-full">
                                <Link to="/blog" className="overlay-link"></Link>
                                <img src="images/bg1.png" alt="BG" className="bg-img" />
                                <img src="images/gfonts.png" alt="GFonts" />
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="infos">
                                        <h4>Blog</h4>
                                        <h1>GFonts</h1>
                                    </div>

                                    <Link to="/blog" className="about-btn">
                                        <img src="images/icon.svg" alt="Button" />
                                    </Link>

                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" className="flex-1 aos-init aos-animate">
                            <div className="about-services-box info-box shadow-box h-full">
                                <Link to="/service" className="overlay-link"></Link>
                                <img src="images/bg1.png" alt="BG" className="bg-img" />
                                <div className="icon-boxes">
                                    <TextSearch className="iconoir-camera"></TextSearch>
                                    <Settings className="iconoir-design-pencil" />
                                    <Monitor className="iconoir-color-filter" />
                                    <Settings2 className="iconoir-dev-mode-phone" />
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="infos">
                                        <h4>specialization</h4>
                                        <h1>Services Offering</h1>
                                    </div>

                                    <Link to="/service" className="about-btn">
                                        <img src="images/icon.svg" alt="Button" />
                                    </Link>

                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" className="aos-init aos-animate">
                            <div className="about-profile-box info-box shadow-box h-full">
                                <img src="images/bg1.png" alt="BG" className="bg-img" />
                                <div className="inner-profile-icons shadow-box">
                                    <Link to="/profile">
                                        <Github className="iconoir-dribbble"/>
                                    </Link>
                                    <Link to="/profile">
                                        <Linkedin className="iconoir-twitter"/>
                                    </Link>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="infos">
                                        <h4>Stay with me</h4>
                                        <h1>Profiles</h1>
                                    </div>

                                    <Link to="/about" className="about-btn">
                                        <img src="images/icon.svg" alt="Button" />
                                    </Link>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="row mt-24">
                <div className="col-md-6 aos-init aos-animate" data-aos="zoom-in">
                    <div className="about-client-box info-box shadow-box">
                        <img src="images/bg1.png" alt="BG" className="bg-img" />
                        <div className="clients d-flex align-items-start gap-24 justify-content-center">
                            <div className="client-item">
                                <h1>01</h1>
                                <p>Years <br />Experience</p>
                            </div>

                            <div className="client-item">
                                <h1>+12</h1>
                                <p>CLIENTS <br />WORLDWIDE</p>
                            </div>

                            <div className="client-item">
                                <h1>+33</h1>
                                <p>Total <br />Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 aos-init aos-animate" data-aos="zoom-in">
                    <div className="about-contact-box info-box shadow-box">
                        <Link className="overlay-link" to="/contact"></Link>
                        <img src="images/bg1.png" alt="BG" className="bg-img" />
                        <img src="images/icon2.png" alt="Icon" className="star-icon" />
                        <h1>Let's <br />work <span>together.</span></h1>
                        <Link to="/#" className="about-btn">
                            <img src="images/icon.svg" alt="Button" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Home }