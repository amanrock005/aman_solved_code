import './abput.css';
import aboutpic from '../assets/aboutpic';

const About = () => {
    return(
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello, I'm <br/>
                    <span className="about-name">Aman</span> <br/>
                    I love developing full stack application
                </div>
                <div className="about-pic">
                    <img 
                    src={aboutpic}
                    className="about-img"
                    alt=""
                    />
                </div>
            </div>
            <div className="about-bottom">

            </div>
        </div>
    )
}

export default About;