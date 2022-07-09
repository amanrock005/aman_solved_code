import './body.css';
import About from '....';
import Projects from '...';
import Skills from '....';
import Work from '....';
import Contact from '.....';

const Body = () => {
    return(
        <div className="body">
            <section id="about">
                <About/>
            </section>
            <section id="projects">
                <Projects/>
            </section>
            <section id="skills">
                <Skills/>
            </section>
            <section id="work">
                <Work/>
            </section>
            <section id="contact">
                <Contact/>
            </section>
        </div>
    )
}

export default Body;