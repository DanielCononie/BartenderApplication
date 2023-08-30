import './App.css'
import { useNavigate, Link } from "react-router-dom";
import funPeople from "./homeImages/funPeople.png"

function Home() {

    const navigateTo = useNavigate();

    return (
        <div className="Home">
            <h2>Crafty Cocktails</h2>
            <hr />
            <div className="home-nav">
                <Link to='/customer'>Customer</Link>
                <Link to='/bartender'>Bartender</Link>
            </div>
            <div className='home-container'>
                <img className='home-img' alt='people having fun' src={funPeople}/>
            </div>
        </div>
    )
}

export default Home;