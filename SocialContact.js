import './social-contact.css';
import {SocialData} from '../data/social';

const SocialContact = () => {
    const data = SocialData;
    return(
        <div className="social-contact">
            {data.map((item)=> {
                return(
                    <a href={item.link}>
                        <div className="social-contact-icon">
                            <img src={item.link}
                                className="social-icon"
                            />
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default SocialContact;