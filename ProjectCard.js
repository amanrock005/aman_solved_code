import './project-card.css';

const ProjectCard = ({project}) => {
    return(
        <div className="project-card">
            <div className="project-info">
                <label className="project-title">{project.title}</label>
                <div className="project-links">
                    {project.demo && (
                        <a className="project-link" href={project.demo}>
                            <div className="link-button">
                                <i></i>Demo
                            </div>
                        </a>
                    )}
                    {project.github && (
                        <a className="project-link" href={project.github}>
                            <div className="link-button" href={project.github}>
                                <i></i>Github
                            </div>
                        </a>
                    )}
                </div>
                <p>{project.about}</p>
                <div className="project-tags">
                    {project.tags.map((tag) =>{
                        return(
                            <label className="tag">{tag}</label>
                        )
                    })}
                </div>
            </div>
            <img
            src={project.image}
            className="project-photo"
            alt=""
            />
        </div>
    )
}

export default ProjectCard;