import  { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Blogs = () => {
    interface IBJson {
        name: string,
        path: string
        sha: string,
        size: bigint,
        url: string,
        html_url: string,
        git_url: string,
        download_url: string,
        type: string,
        _links: {
            self: string,
            git: string,
            html: string,
        }
    }
    const [blogsJson, setBlogsJson] = useState<IBJson[]>();

    useEffect(() => {
        fetch("https://api.github.com/repositories/766054398/contents/src/blogs")
            .then(res => {
                if (!res.ok) {

                }
                return res.json()
            })
            .then((data: IBJson[]) => {
                const _html_blog = data;
                setBlogsJson(_html_blog)
                console.log("s", blogsJson)
            })
    }, [])

    return (
        <>
            <section className="breadcrumb-area" style={{ paddingTop: "0%" }}>
                <div className="container">
                    <div className="breadcrumb-content aos-init aos-animate" data-aos="fade-up">
                        <p>HOME - BLOGS</p>
                        <h1 className="section-heading"><img src="/images/star-2.png" alt="Star" /> Latest Blogs <img src="/images/star-2.png" alt="Star" /></h1>
                    </div>
                </div>
            </section>
            <section className="blog-area" style={{ paddingTop: "4%" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="blog-items">
                                {
                                    blogsJson?.map((json) => {
                                        return (
                                            <div key={json.sha} className="blog-item aos-init aos-animate" data-aos="zoom-in">
                                                <div className="content shadow-box" style={{padding:"46px 30px 62px 30px"}}>
                                                    <span className="meta">25 March 2022 </span>
                                                    <h1><Link to={"/blog/" + json.name.replace(".md", "")}>{json.name.replace(".md", "")}.</Link></h1>
                                                    <Link to={"/blog/" + json.name.replace(".md", "")} className="theme-btn">Read More</Link>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export { Blogs }