import {ProjectData} from '../data/project';
import ProjectCard from './ProjectCard';
import './projec.css';

const Project = () => {
    const data = ProjectData;
    return(
        <div className="projects">
            <label className="section-title">Projects</label>
            <div>
                {data.map((item)=> {
                    return(
                        <ProjectCard item={item}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Project;