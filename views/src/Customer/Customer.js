import { useState } from "react"
import Menu from "./Menu"
import CustomerNav from './CustomerNav'

function Customer({table, setTable}) {

    const [drinks, setDrinks] = useState([])
    const [count, setCount]  = useState(0)

    return (
        <div className="Customer">
            <CustomerNav count={count} setCount={setCount}  />
            <Menu drinks={drinks} setDrinks={setDrinks} count={count} setCount={setCount} table={table} setTable={setTable}/>
        </div>
    )
}

export default Customer;