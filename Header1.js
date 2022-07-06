import {useState} from "react";
import './header.css';
import Mobile from './Mobile'
import Web from './Web';

const Header1 = () => {
    const [isOpen,setIsOpen] = useState(false);
    return(
        <div className="header">
            <div className="logo">Aman</div>
            <div className="menu">
                <div className="web-menu">
                    <Web/>
                </div>
                <div className="mobile-menu">
                    <div onClick={()=>{setIsOpen(!isOpen)}}>
                        <i class="...." className="mobile-icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                </div>
            </div>
        </div>
    )
}
export default Header1;