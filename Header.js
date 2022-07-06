import './header.css';
import Mobile from './Mobile';
import Web from './Web';

const Header = () => {
    return(
        <div className="header">
            <div className="logo">Aman</div>
            <div className="menu">
                <div className="web-menu">
                    <Web/>
                </div>
                <div className="mobile-menu">
                    <Mobile/>
                </div>
            </div>
        </div>
    )
}

export default Header;