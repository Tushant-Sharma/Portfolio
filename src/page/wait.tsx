import React from "react"

const CommingSoon: React.FC = () => {
    const center: React.CSSProperties = {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
    }
    return (
        <>
            <section className="projects-area">
                <div className="container">
                    <h1 className="section-heading aos-init aos-animate "  data-aos="fade-up">
                        <img src="images/star-2.png" alt="Star" />
                        Comming Soon
                        <img src="images/star-2.png" alt="Star" />
                    </h1>
                    <div className="row" style={center} >
                        <div className="col-md-8">
                            <h1 className="section-heading aos-init aos-animate " data-aos="fade-up">
                                <img src="images/star-2.png" alt="Star" />
                                Comming Soon
                                <img src="images/star-2.png" alt="Star" />
                            </h1>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export { CommingSoon }