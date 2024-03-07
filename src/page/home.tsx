import { Link } from "react-router-dom"

const Home = () => {

    return (
        <>
            <div className="row fadeIn">
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

                <div className="fadeIn col-md-6">
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

            <div className="fadeIn row mt-24">
                <div className="col-md-12">
                    <div className="blog-service-profile-wrap d-flex gap-24">
                        <div data-aos="zoom-in" className="aos-init aos-animate">
                            <div className="about-blog-box info-box shadow-box h-full">
                                <Link to="/blogs" className="overlay-link"></Link>
                                <img src="images/bg1.png" alt="BG" className="bg-img" />
                                <img src="images/gfonts.png" alt="GFonts" />
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="infos">
                                        <h4>Latest</h4>
                                        <h1>Blogs</h1>
                                    </div>

                                    <Link to="/blogs" className="about-btn">
                                        <img src="images/icon.svg" alt="Button" />
                                    </Link>

                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" className="flex-1 aos-init aos-animate">
                            <div className="about-services-box info-box shadow-box h-full">
                                <Link to="/service" className="overlay-link"></Link>
                                <img src="images/bg1.png" alt="BG" className="bg-img" />
                                <div className="icon-boxes" style={{color:"#fff"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iconoir-camera"><path d="M21 6H3" /><path d="M10 12H3" /><path d="M10 18H3" /><circle cx="17" cy="15" r="3" /><path d="m21 19-1.9-1.9" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iconoir-design-pencil"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" /><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M12 2v2" /><path d="M12 22v-2" /><path d="m17 20.66-1-1.73" /><path d="M11 10.27 7 3.34" /><path d="m20.66 17-1.73-1" /><path d="m3.34 7 1.73 1" /><path d="M14 12h8" /><path d="M2 12h2" /><path d="m20.66 7-1.73 1" /><path d="m3.34 17 1.73-1" /><path d="m17 3.34-1 1.73" /><path d="m11 13.73-4 6.93" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iconoir-color-filter"><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iconoir-dev-mode-phone"><line x1="21" x2="14" y1="4" y2="4" /><line x1="10" x2="3" y1="4" y2="4" /><line x1="21" x2="12" y1="12" y2="12" /><line x1="8" x2="3" y1="12" y2="12" /><line x1="21" x2="16" y1="20" y2="20" /><line x1="12" x2="3" y1="20" y2="20" /><line x1="14" x2="14" y1="2" y2="6" /><line x1="8" x2="8" y1="10" y2="14" /><line x1="16" x2="16" y1="18" y2="22" /></svg>
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iconoir-dribbble"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                    </Link>
                                    <Link to="/profile">
                                        <svg className="iconoir-twitter" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>                                    </Link>
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

            <div className="fadeIn row mt-24">
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