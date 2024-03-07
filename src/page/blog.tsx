import Markdown from "markdown-to-jsx"
import React, { useState, useEffect } from 'react';
import "../../src/App.css"
import { Link, useParams } from "react-router-dom";
import { LoadingSpinner } from "../utils/svgs";
const Blog: React.FC = () => {
    const [context, setContext] = useState<string>("");
    let { title } = useParams();
    useEffect(() => {
        setContext("wait")
        fetch("https://raw.githubusercontent.com/Tushant-Sharma/Portfolio/main/src/blogs/" + title + ".md")
            .then(response => {
                if (!response.ok) {
                    setContext("")
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => setContext(data))
            .catch(error => console.error('There has been a problem with your fetch operation:', error));
    }, []);

    return (
        <>
            {
                context === 'wait' ?
                    <LoadingSpinner />
                    :
                    context ?
                        <>
                            <section className=" fadeIn breadcrumb-area">
                                <div className="container">
                                    <div className="breadcrumb-content aos-init aos-animate" data-aos="fade-up">
                                        {/* <p></p> */}
                                        <h1 className="section-heading">{title} <img src="/images/star-2.png" alt="Star" /></h1>
                                    </div>

                                </div>
                            </section>
                            <section style={{ paddingTop: "5%" }}>

                                <div className="container blogDetails fadeIn">
                                    <Markdown >{context}</Markdown>
                                </div>
                            </section>
                        </>
                        : <section className="projects-area fadeIn">
                            <div className="container">
                                <h1 className="section-heading aos-init aos-animate " data-aos="fade-up">
                                    <img src="/images/star-2.png" alt="Star" />404 Page Not Found<img src="images/star-2.png" alt="Star" />
                                </h1>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="about-me-box shadow-box">
                                            <Link className="overlay-link" to="/blogs"></Link>
                                            <div className="infos"><h1>{title ? title : "Blog"} is Not  Found </h1>
                                                <Link to="/blogs">Go Back</Link>
                                                <Link className="about-btn" to="/">
                                                    <img src="/images/icon.svg" alt="Button" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

            }
        </>
    );
}

export { Blog };
