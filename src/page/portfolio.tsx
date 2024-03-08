import { Link } from "react-router-dom"
import { socialLinks } from "../utils/usefulllink"
import { Github, Linkedin, Mail, Phone } from "../utils/svgs"

const Portfolio: React.FC = () => {
    return (
        <>
            <section className="credential-area fadeIn">
                <div className="container">
                    <div className="gx-row d-flex">
                        <div className="credential-sidebar-wrap aos-init aos-animate" data-aos="zoom-in">
                            <div className="credential-sidebar text-center">
                                <div className="shadow-box">
                                    <img src="images/bg1.png" alt="BG" className="bg-img" />
                                    <div className="img-box">
                                        <img src="images/me.png" alt="About Me" />
                                    </div>
                                    <h2>Tushant Sharma</h2>
                                    <u>
                                        <a target="_blank" href={socialLinks.github}>
                                            <p>@tushant-sharma</p>
                                        </a>
                                    </u>

                                    <ul className="social-links d-flex justify-content-center">
                                        <li><a target="_blank" href={socialLinks.github}><Github className="iconoir-dribbble" /></a></li>
                                        <li><a href={socialLinks.email}><Mail className="iconoir-facebook-tag" /></a></li>
                                        <li><a target="_blank" href={socialLinks.linkedIn}><Linkedin className="iconoir-instagram" /></a></li>
                                        <li><a target="_blank" href={socialLinks.whatsapp}><Phone className="iconoir-twitter" /></a></li>
                                    </ul>

                                    <Link to={socialLinks.whatsapp} className="theme-btn">Contact Me</Link>
                                </div>
                            </div>
                        </div>

                        <div className="credential-content flex-1">
                            <div className="credential-about aos-init aos-animate" data-aos="zoom-in">
                                <h2>About Me</h2>
                                <p> I'm a Jr. Web Developer based in India, on a mission to craft digital experiences . I've delved deep into the realm of web development, armed with a passion for crafting immersive digital experiences. With hands-on experience in React JS, Redux , Node JS, Postgress (RDBSM) and ASP .NET, I've honed my skills in building user-centric web applications that leave a lasting impression.

                                </p>
                                <p>I specialize in building user-friendly web applications with excellent features of admin pannel that make a difference. From creating seamless booking systems for hotels to crafting efficient Bulk Mailing Web Apps, I'm dedicated to pushing the boundaries of web development. </p>
                            </div>

                            <div className="credential-edc-exp credential-experience">
                                <h2 data-aos="fade-up" className="aos-init aos-animate">Experience</h2>
                                <div className="credential-edc-exp-item aos-init aos-animate" data-aos="zoom-in">

                                    <h3>Hotel Management Project </h3>
                                    <h5>User-Friendly Desgin with Robust and Daynamic Features </h5>
                                    <p>
                                        - Designing a user-friendly booking interface allowing guests to check room availability, make
                                        reservations, and view booking details.
                                    </p>
                                    <br />
                                    <p>
                                        - Implementing systems to manage room reservations, including functionalities like booking,
                                        modification, and cancellation of bookings.
                                    </p>

                                    <br />
                                    <p>
                                        - Admin Dashboard : Creating tools for administrators to manage bookings, room availability,
                                        pricing, and user accounts.
                                    </p>
                                    <br />
                                    <p>
                                        - User Dashboard : Providing users with a dashboard to manage their bookings, preferences, and
                                        account details as well as Displaying users' booking history, allowing them to view past
                                        reservations and upcoming stays.</p>
                                </div>
                                <div className="credential-edc-exp-item aos-init aos-animate" data-aos="zoom-in">
                                    <h4>2017 - 2023</h4>
                                    <h3>Bulk Mailing Web App (SMTP)
                                    </h3>
                                    <h5>Turbo Fast &amp; Secure</h5>
                                    <p>In this project I had to make the functionality to send the user notification by E-mail using the
                                        SMTP</p>
                                </div>
                                <div className="credential-edc-exp-item aos-init aos-animate" data-aos="zoom-in">

                                    <h3>10+ Blogging Project

                                    </h3>
                                    <h5>Excellent Features with Admin Pannel</h5>
                                    <p>Design the user-friendly blogging landing page and user dashboard as well admin dashboard in
                                        which added the tools to add new blogs as well as update the blog etc.</p>
                                </div></div>

                            <div className="credential-edc-exp credential-education">
                                <h2 data-aos="fade-up" className="aos-init aos-animate">Education</h2>
                                <div className="credential-edc-exp-item aos-init aos-animate" data-aos="zoom-in">
                                    <h4>2023-present</h4>
                                    <h3>Master Degree in Computer Application (AI, Data Analytics)</h3>
                                    <h5>Chandigarh University,Punjab</h5>
                                    <p>MCA with specialisation in Artificial Intelligence and Machine Learning.industry ready skills to develop intelligent machines and solve real world problem through Artificial Intelligence and Machine Learning software and techniques.</p>
                                </div>

                                <div className="credential-edc-exp-item aos-init aos-animate" data-aos="zoom-in">
                                    <h4>2019 - 2022</h4>
                                    <h3>Bachelor Degree in Commerce</h3>
                                    <h5>Kurukshetra University Kurukshetra , Haryana</h5>
                                </div></div>

                            <div className="skills-wrap">
                                <h2 data-aos="fade-up" className="aos-init aos-animate">Skills</h2>
                                <div className="d-grid skill-items gap-24 flex-wrap">
                                    <div className="skill-item aos-init aos-animate" data-aos="zoom-in">
                                        <span className="percent">89%</span>
                                        <h3 className="name">JavaScript</h3>
                                        <p>web browser language</p>
                                    </div>
                                    <div className="skill-item aos-init aos-animate" data-aos="zoom-in">
                                        <span className="percent">90%</span>
                                        <h3 className="name">HTML</h3>
                                    </div>
                                    <div className="skill-item aos-init aos-animate" data-aos="zoom-in">
                                        <span className="percent">75%</span>
                                        <h3 className="name">Tailwind</h3>
                                    </div>
                                    <div className="skill-item aos-init aos-animate" data-aos="zoom-in">
                                        <span className="percent">95%</span>
                                        <h3 className="name">React JS</h3>
                                        <p>Frontend Framework / UI (user interface)</p>
                                    </div>
                                    <div className="skill-item aos-init aos-animate" data-aos="zoom-in">
                                        <span className="percent">90%</span>
                                        <h3 className="name">Node JS</h3>
                                        <p>REST API, Graphql</p>
                                    </div>
                                    <div className="skill-item aos-init aos-animate" data-aos="zoom-in">
                                        <span className="percent">82%</span>
                                        <h3 className="name">Postgres / Microsoft SQL Server</h3>
                                        <p>Relational data base management system or SQL</p>
                                    </div>
                                    <div className="skill-item aos-init aos-animate" data-aos="zoom-in">
                                        <span className="percent">78%</span>
                                        <h3 className="name">Python</h3>
                                        <p>REST API, Scrapy, FastApi</p>
                                    </div>
                                    <div className="skill-item aos-init aos-animate" data-aos="zoom-in">
                                        <span className="percent">78%</span>
                                        <h3 className="name">Asp .Net</h3>
                                        <p>UI/REST API</p>
                                    </div>

                                </div>
                            </div>

                            <div className="skills-wrap awards-wrap">
                                <h2 data-aos="fade-up" className="aos-init aos-animate">Language</h2>
                                <div className="d-grid skill-items gap-24 flex-wrap">
                                    <div className="skill-item aos-init aos-animate" data-aos="zoom-in">
                                        {/* <span className="percent">14 May 2020</span> */}
                                        <h3 className="name">English , Hindi</h3>
                                        {/* <p>Non enim praesent</p> */}
                                    </div>

                                </div>
                            </div>
                            <div className="skills-wrap awards-wrap">
                                <Link target="_blank" to={socialLinks.resume} style={{ width:"-webkit-fill-available",textAlign:"center"}} className="theme-btn"> Resume Download (pdf)</Link>
                            </div>



                    </div>
                </div>
            </div>
        </section >
        </>
    )
}

export { Portfolio }