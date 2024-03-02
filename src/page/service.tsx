import { Link } from "react-router-dom"

const Service:React.FC=()=>{
    return(
        <>
        <section className="service-area">
            <div className="container">
                <h1 className="section-heading aos-init aos-animate" data-aos="fade-up"><img src="images/star-2.png" alt="Star"/> My Offerings <img src="images/star-2.png" alt="Star"/></h1>
                
                <div className="row">

                    <div className="col-md-4">
                        <div className="service-sidebar aos-init aos-animate" data-aos="fade-right">
                            <div className="service-sidebar-inner shadow-box">
                                <ul>
                                    <li>
                                        <i className="iconoir-camera icon"></i>
                                        PHOTOGRAPHY
                                    </li>
                                    <li>
                                        <i className="iconoir-design-pencil icon"></i>
                                        WEB DESIGNING
                                    </li>
                                    <li>
                                        <i className="iconoir-color-filter icon"></i>
                                        BRANDING
                                    </li>
                                    <li>
                                        <i className="iconoir-dev-mode-phone icon"></i>
                                        DEVELOPMENT
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <h1 className="section-heading aos-init aos-animate" data-aos="fade-up"><img src="images/star-2.png" alt="Star"/> My Offerings <img src="images/star-2.png" alt="Star"/></h1>

                        <div className="service-content-wrap aos-init aos-animate" data-aos="zoom-in">
                            <div className="service-content-inner shadow-box">
                                <div className="service-items">
                                    <div className="service-item">
                                        <h3>Photography</h3>
                                        <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                                    </div>
                                    <div className="service-item">
                                        <h3>Web Designing</h3>
                                        <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                                    </div>
                                    <div className="service-item">
                                        <h3>Branding</h3>
                                        <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                                    </div>
                                    <div className="service-item">
                                        <h3>Development</h3>
                                        <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
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
                                    <img src="images/bg1.png" alt="BG" className="bg-img"/>
                                    <div className="inner-profile-icons shadow-box">
                                        <Link to="/#">
                                            <i className="iconoir-dribbble"></i>
                                        </Link>
                                        <Link to="/#">
                                            <i className="iconoir-twitter"></i>
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="infos">
                                            <h4>Stay with me</h4>
                                            <h1>Profiles</h1>
                                        </div>
    
                                        <Link to="/contact" className="about-btn">
                                            <img src="images/icon.svg" alt="Button"/>
                                        </Link>
    
                                    </div>
                                </div>
                            </div>

                            <div data-aos="zoom-in" className="flex-1 aos-init aos-animate">
                                <div className="about-contact-box info-box shadow-box">
                                    <Link className="overlay-link" to="/contact"></Link>
                                    <img src="images/bg1.png" alt="BG" className="bg-img"/>
                                    <img src="images/icon2.png" alt="Icon" className="star-icon"/>
                                    <h1>Let's <br/>work <span>together.</span></h1>
                                    <Link to="/contact" className="about-btn">
                                        <img src="images/icon.svg" alt="Button"/>
                                    </Link>
                                </div>
                            </div>

                            <div data-aos="zoom-in" className="h-full aos-init aos-animate">
                                <div className="about-crenditials-box info-box shadow-box">
                                    <Link className="overlay-link" to="/profile"></Link>
                                    <img src="images/bg1.png" alt="BG" className="bg-img"/>
                                    <img src="images/sign.png" alt="Sign"/>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="infos">
                                            <h4>more about me</h4>
                                            <h1>Credentials</h1>
                                        </div>
    
                                        <Link to="/profile" className="about-btn">
                                            <img src="images/icon.svg" alt="Button"/>
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

export {Service}