import React from "react"
import { Link } from "react-router-dom"
import { ImageDemoIcon } from "../utils/svgs"

interface IProjectCard {
    title: string,
    date: Date,
    img_url?: string,
    url: string
}
const ProjectCard = (props: React.PropsWithChildren<IProjectCard>) => {
    return (
        <>
            <div data-aos="zoom-in" className="flex-1 aos-init aos-animate">
                <div className="project-item shadow-box">
                    <Link to={props.url} className="overlay-link" ></Link>
                    <img src="/images/bg1.png" alt="BG" className="bg-img" />
                    <div className="project-img">
                        {
                            props.img_url ?
                                <img src={props.img_url} alt="Project" />
                                :
                                <ImageDemoIcon />
                        }
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="project-info">
                            <p>{props.date.toDateString()}</p>
                            <h1>{props.title}</h1>
                        </div>
                        <Link to={props.url} className="project-btn">
                            <img src="/images/icon.svg" alt="Button" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export { ProjectCard }