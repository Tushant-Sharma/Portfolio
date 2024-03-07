import { Link } from "react-router-dom"
import { socialLinks } from "../utils/usefulllink"
import { AlignCenter, Boxes, Computer, Github, Glob, Linkedin } from "../utils/svgs"

const Service: React.FC = () => {
    return (
        <>
            <section className="service-area fadeIn">
                <div className="container">
                    <h1 className="section-heading aos-init aos-animate" data-aos="fade-up"><img src="images/star-2.png" alt="Star" /> My Offerings <img src="images/star-2.png" alt="Star" /></h1>

                    <div className="row">

                        <div className="col-md-4">
                            <div className="service-sidebar aos-init aos-animate" data-aos="fade-right">
                                <div className="service-sidebar-inner shadow-box">
                                    <ul>
                                        <li>
                                            <Glob className="iconoir-camera icon" />
                                            FULL STACK DEVELOPMENT
                                        </li>
                                        <li>
                                            <Boxes className="iconoir-design-pencil icon" />
                                            WEB UI/UX DESIGNING
                                        </li>
                                        <li>
                                            <AlignCenter className="iconoir-color-filter icon" />
                                            WEB SCRAPING
                                        </li>
                                        <li>
                                            <Computer className="iconoir-dev-mode-phone icon" />
                                            BACK-END DEVELOPMENT
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <h1 className="section-heading aos-init aos-animate" data-aos="fade-up"><img src="images/star-2.png" alt="Star" /> My Offerings <img src="images/star-2.png" alt="Star" /></h1>

                            <div className="service-content-wrap aos-init aos-animate" data-aos="zoom-in">
                                <div className="service-content-inner shadow-box">
                                    <div className="service-items">
                                        <div className="service-item">
                                            <h3>Full Stack Development</h3>
                                            <p>Embark on a digital journey with our comprehensive Full Stack Development service.i create websites from start to finish, making sure they look great and work smoothly. Our goal is to make your online presence shine with modern designs and powerful features. With a keen eye for detail and a passion for innovation, i will help your web presence stands out in a crowded digital landscape.</p>
                                        </div>
                                        <div className="service-item">
                                            <h3>Web UI/UX Designing</h3>
                                            <p>Elevate your digital presence with our captivating UI/UX Design services. In a world driven by user experience, i understand the importance of captivating design and intuitive interfaces. From wireframes to pixel-perfect prototypes, we craft immersive user journeys that captivate audiences and foster engagement. Let us transform your vision into an unforgettable digital experience.</p>
                                        </div>
                                        <div className="service-item">
                                            <h3>Web Scraping</h3>
                                            <p>Discover the power of data with our Web Scraping service. We collect information from websites and turn it into useful insights for your business. With our expertise, you can stay ahead of the competition and make smart decisions based on valuable data.</p>
                                        </div>
                                        <div className="service-item">
                                            <h3>Back-End Development</h3>
                                            <p>Drive your digital ambitions forward with our expert Backend Development services. Build a strong foundation for your website or app with our Backend Development service. We handle all the technical stuff behind the scenes to ensure your online platform runs smoothly. Our focus is on creating reliable and secure systems that support your digital goals.</p>
                                        </div>
                                    </div>
                                </div>
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
                                            <Link target="_blank" to={socialLinks.github}>
                                                <Github className="iconoir-dribbble" />
                                            </Link>
                                            <Link target="_blank" to={socialLinks.linkedIn}>
                                                <Linkedin className="iconoir-twitter" />
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
                </div>
            </section>
        </>
    )
}

export { Service }