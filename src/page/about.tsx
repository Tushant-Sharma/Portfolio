import { Link } from "react-router-dom"

const Aboutme: React.FC = () => {
    return (
        <>

            <div className="d-flex about-me-wrap align-items-start gap-24">
                <div data-aos="zoom-in" className="aos-init aos-animate">
                    <div className="about-image-box shadow-box">
                        <img src="images/bg1.png" alt="BG" className="bg-img" />
                        <div className="image-inner">
                            <img src="images/me2.png" alt="About Me" />
                        </div>
                    </div>
                </div>

                <div className="about-details aos-init aos-animate" data-aos="zoom-in">
                    <h1 className="section-heading aos-init aos-animate" data-aos="fade-up"><img src="images/star-2.png" alt="Star" /> Self-summary <img src="images/star-2.png" alt="Star" /></h1>
                    <div className="about-details-inner shadow-box">
                        <img src="images/icon2.png" alt="Star" />
                        <h1>Tushant Sharma</h1>
                        <p>I'm Professional Web Developer and Software Engineer. Specialized in developing
                            Web-Applications using React JS, Node JS, Redis , SQL Server , Postgress etc. And having more than Two year of working
                            experience. Ability to understand business requirements &amp; translate them into technical
                            requirements.</p>
                    </div>

                </div>
            </div>

            <div className="row mt-24">
                <div className="col-md-6 aos-init aos-animate" data-aos="zoom-in">
                    <div className="about-edc-exp about-experience shadow-box">
                        <img src="images/bg1.png" alt="BG" className="bg-img" />
                        <h3>EXPERIENCE</h3>

                        <ul>
                            <li>

                                <h2>Hotel Management Project

                                </h2>
                                <p className="type">User-Friendly Desgin with Robust and Daynamic Features

                                </p>
                            </li>
                            <li>

                                <h2>Bulk Mailing Web App (SMTP)

                                </h2>
                                <p className="type">Turbo Fast &amp; Secure

                                </p>
                            </li>
                            <li>

                                <h2>10+ Blogging Project

                                </h2>
                                <p className="type">Excellent Features with Admin Pannel

                                </p>
                            </li></ul>
                    </div>
                </div>
                <div className="col-md-6 aos-init aos-animate" data-aos="zoom-in">
                    <div className="about-edc-exp about-education shadow-box">
                        <img src="images/bg1.png" alt="BG" className="bg-img" />
                        <h3>EDUCATION</h3>

                        <ul>
                            <li>
                                <p className="date">2023-Present</p>
                                <h2>Master Degree in Computer Application (AI, Data Analytics)

                                </h2>
                                <p className="type">Chandighar University Chandighar

                                </p>
                            </li>
                            <li>
                                <p className="date">2019-2022</p>
                                <h2>Bachelor Degree in Commerce

                                </h2>
                                <p className="type">Kurukshetra University Kurukshetra , Haryana

                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row mt-24">
                <div className="col-md-12">
                    <div className="d-flex profile-contact-credentials-wrap gap-24">

                        <div data-aos="zoom-in" className="aos-init aos-animate">
                            <div className="about-profile-box info-box shadow-box h-full">
                                <img src="images/bg1.png" alt="BG" className="bg-img" />
                                <div className="inner-profile-icons shadow-box">
                                    <Link to="/#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iconoir-dribbble"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                    </Link>
                                    <Link to="/#">
                                        <svg className="iconoir-twitter" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                    </Link>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="infos">
                                        <h4>Stay with me</h4>
                                        <h1>Profiles</h1>
                                    </div>

                                    <Link to="/contact" className="about-btn">
                                        <img src="images/icon.svg" alt="Button" />
                                    </Link>

                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" className="flex-1 aos-init aos-animate">
                            <div className="about-contact-box info-box shadow-box">
                                <Link className="overlay-link" to="/contact"></Link>
                                <img src="images/bg1.png" alt="BG" className="bg-img" />
                                <img src="images/icon2.png" alt="Icon" className="star-icon" />
                                <h1>Let's <br />work <span>together.</span></h1>
                                <Link to="/contact" className="about-btn">
                                    <img src="images/icon.svg" alt="Button" />
                                </Link>
                            </div>
                        </div>

                        <div data-aos="zoom-in" className="h-full aos-init aos-animate">
                            <div className="about-crenditials-box info-box shadow-box">
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

                    </div>
                </div>
            </div>

        </>
    )
}

export { Aboutme }