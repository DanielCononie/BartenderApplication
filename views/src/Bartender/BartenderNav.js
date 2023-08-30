import { Link } from "react-router-dom"
import '../App.css'
import { useNavigate } from "react-router-dom";

function BartenderNav({sentAll, setSentAll}) {

    const navigate = useNavigate();

    function areAllOrdersCleared() {

        console.log(sentAll)
       if(sentAll) {
        navigate('/')
       }

       else {
        window.confirm("Send out all orders first!")
       }
    }

    return (
        <div className="BartenderNav">
            
            <button onClick={areAllOrdersCleared} className="drink-btn">Home</button>
        </div>
    )
}

export default BartenderNav;