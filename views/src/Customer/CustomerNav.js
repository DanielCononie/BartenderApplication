import '../App.css'
import { useNavigate } from "react-router-dom"

function CustomerNav({count, setCount}) {

    const navigate = useNavigate('/bartender')

    return(
        <div>
            <h1 style={{fontFamily: "cursive", marginLeft: 12}}>Crafty Cocktails</h1>
            <p style={{marginLeft: 12}}>Choose a cocktail and the order will be sent back to be made!</p>
            <div className='bartender-option'>
                <label className='option-bartender'>Bartender?</label>
                <br />
                <button onClick={() => navigate('/bartender')} className='drink-btn'>View Orders ({count})</button>
            </div>
        </div>
    )
}

export default CustomerNav;