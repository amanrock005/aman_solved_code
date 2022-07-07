import './mobile.css';

const Mobile = ({isOpen, setIsOpen}) => {
    return(
        <div className="mobile">
            <div className="close-icon" onClick={()=>setIsOpen(!isOpen)}>
                <i class="   "></i>
                <div className="mobile-options">
                    <div className="mobile-option">
                        <a href="#projexts"/>
                        <i class="     mobile-icon"></i>Projects
                    </div>
                    <div className="mobile-option">
                        <a href="#skills"/>
                        <i class="     mobile-icon"></i>Skills
                    </div>
                    <div className="mobile-option">
                        <a href="#work"/>
                        <i class="       mobile-icon"></i>Work
                    </div>
                    <div className="mobile-option">
                        <a href="#contact"/>
                        <i class="   moible-icon"></i>Contact
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobile;