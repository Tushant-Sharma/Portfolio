import Markdown from "markdown-to-jsx"
import React, { useState, useEffect } from 'react';
import "../../src/App.css"
const Blog: React.FC = () => {
    const [context, setContext] = useState<string>("");

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Tushant-Sharma/Portfolio/main/README.md")
            .then(response => {
                if (!response.ok) {
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
                context ?
                    <>
                        <section className="breadcrumb-area">
                            <div className="container">
                                <div className="breadcrumb-content aos-init aos-animate" data-aos="fade-up">
                                    <p>Blog RAVEN STUDIO</p>
                                    <h1 className="section-heading"> Aesthetic design for brand <br />new startup <img src="images/star-2.png" alt="Star" /></h1>
                                </div>

                            </div>
                        </section>
                        <section style={{paddingTop:"5%"}}>
                            <div>
                                <Markdown>{context}</Markdown>
                            </div>
                        </section>
                    </>
                    : <>Somethihg Went Wrong</>

            }
        </>
    );
}

export { Blog };
