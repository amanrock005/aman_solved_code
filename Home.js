import './home.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}
export default Home;