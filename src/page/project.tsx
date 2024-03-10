import { useEffect, useState } from "react";
import { ProjectCard } from "../components/project_card"

const Projects = () => {
    interface IGithubOwner {

        login: string,
        id: BigInt,
        node_id: string,
        avatar_url: string,
        gravatar_id: string,
        url: string,
        html_url: string,
        followers_url: string,
        following_url: string,
        gists_url: string,
        starred_url: string,
        subscriptions_url: string,
        organizations_url: string,
        repos_url: string,
        events_url: string,
        received_events_url: string,
        type: string,
        site_admin: boolean,

    }

    interface IGithubRepo {
        id: BigInt,
        node_id: string,
        name: string,
        full_name: string,
        private: boolean,
        owner: IGithubOwner,
        html_url: string,
        description: string,
        fork: boolean,
        url: string,
        forks_url: string,
        keys_url: string,
        collaborators_url: string,
        teams_url: string,
        hooks_url: string,
        issue_events_url: string,
        events_url: string,
        assignees_url: string,
        branches_url: string,
        tags_url: string,
        blobs_url: string,
        git_tags_url: string,
        git_refs_url: string,
        trees_url: string,
        statuses_url: string,
        languages_url: string,
        stargazers_url: string,
        contributors_url: string,
        subscribers_url: string,
        subscription_url: string,
        commits_url: string,
        git_commits_url: string,
        comments_url: string,
        issue_comment_url: string,
        contents_url: string,
        compare_url: string,
        merges_url: string,
        archive_url: string,
        downloads_url: string,
        issues_url: string,
        pulls_url: string,
        milestones_url: string,
        notifications_url: string,
        labels_url: string,
        releases_url: string,
        deployments_url: string,
        created_at: Date,
        updated_at: Date,
        pushed_at: Date,
        git_url: string,
        ssh_url: string,
        clone_url: string,
        svn_url: string,
        homepage: string,
        size: BigInt,
        stargazers_count: BigInt,
        watchers_count: BigInt,
        language: string,
        has_issues: boolean,
        has_projects: boolean,
        has_downloads: true,
        has_wiki: boolean,
        has_pages: boolean,
        has_discussions: boolean,
        forks_count: BigInt,
        mirror_url: null | string,
        archived: boolean,
        disabled: boolean,
        open_issues_count: BigInt,
        license: null | string,
        allow_forking: boolean,
        is_template: boolean,
        web_commit_signoff_required: boolean,
        topics: [],
        visibility: string,
        forks: BigInt,
        open_issues: BigInt,
        watchers: BigInt,
        default_branch: string,
    }

    const [repo, setRepo] = useState<IGithubRepo[] | null>()

    const getRep = async () => {
        return await fetch("https://api.github.com/users/tushant-sharma/repos")
            .then(res => res.json())
            .then((data: IGithubRepo[]) => {
                // console.log(data);
                return data;
            }
            )
    }

    useEffect(() => {
        (async function running() {
            const a = await getRep()
            setRepo(a)
            console.log(a)
        })();
    }, [])

    return (
        <>
            <section className="projects-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="section-heading aos-init aos-animate" data-aos="fade-up">
                                <img src="images/star-2.png" alt="Star" />
                                All Projects
                                <img src="images/star-2.png" alt="Star" />
                            </h1>
                            <div className="d-flex gap-24">
                                {
                                    repo && repo.map((data) => {
                                        return (
                                            <ProjectCard title={data.name} key={data.node_id} date={data.created_at} url={data.html_url} img_url={data.archive_url} />
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
export {
    Projects
}