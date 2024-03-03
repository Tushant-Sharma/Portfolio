import { Link } from "react-router-dom"

const Error_page: React.FC = () => {
    return (
        <>
            <section className="projects-area">
                <div className="container">
                    <h1 className="section-heading aos-init aos-animate " data-aos="fade-up">
                        <img src="images/star-2.png" alt="Star" />404 Page Not Found<img src="images/star-2.png" alt="Star" />
                    </h1>
                    <div className="row">
                        <div className="col-12">
                            <div className="about-me-box shadow-box">
                                <Link className="overlay-link" to="/"></Link>
                                <div className="infos"><h1>404 Page Not Found</h1>
                                    <Link to="/">Go Back</Link>
                                    <Link className="about-btn" to="/">
                                        <img src="images/icon.svg" alt="Button" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export {Error_page}