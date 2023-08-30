import { useState } from 'react';
import '../App.css'

function EnterBarCode({codeEntered, setCodeEntered}) {

    const [code, setCode] = useState("")

    function logIn() {
        if(code === "222333") {
            setCodeEntered(true)
        }
    }

    return (

        <div className="bar-code">
            <label>Enter bartender code to access orders</label>
            <br />
            <input  onChange={(e) => {
                setCode(e.target.value)
            }}/>
            <button style={{marginTop: 10}} onClick={logIn}>Submit</button>

        </div>
    )
}

export default EnterBarCode;