import './web.css';

const Web = () => {
    return(
        <div className="web">
            <div className="web-option">
                <a href="#projects"/>
                <i class="    web-icon"></i>Projects
            </div>
            <div className="web-option">
                <a href="#skills"/>
                <i class="  web-icon"></i>Skills
            </div>
            <div className="web-option">
                <a href="#work"/>
                <i class="   web-icon"></i>Work
            </div>
            <div className="web-option">
                <a href="#contact"/>
                <i class="   web-icon"></i>Contact
            </div>
        </div>
    )
}

export default Web;