import axios from "axios";
import { useEffect, useState } from "react"
import BartenderNav from "./BartenderNav";
import EnterBarCode from "./EnterBarCode";
import BartenderMenu from "./BartenderMenu";

function Bartender({table, setTable}) {

    const [ codeEntered, setCodeEntered ] = useState(false)
    const [ code, setCode ] = useState("")
    const [sentAll, setSentAll] = useState(true)

    return (
        <div>
            <BartenderNav sentAll={sentAll}
                          setSentAll={setSentAll}/>
            {codeEntered ? (
                <BartenderMenu 
                codeEntered={codeEntered}
                setCodeEntered={setCodeEntered} 
                table={table} 
                setTable={setTable}
                sentAll={sentAll}
                setSentAll={setSentAll}
                />
            ) : (
                
                <EnterBarCode codeEntered={codeEntered} setCodeEntered={setCodeEntered}/>
            )
            }
            
        </div>
    )
}

export default Bartender;