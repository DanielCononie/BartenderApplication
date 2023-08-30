import { useEffect, useState } from "react";
import axios from "axios";
import '../App.css'

function BartenderMenu({table, setTable, sentAll, setSentAll}) {



    const [orders, setOrders] = useState([])

  //   useEffect(() => {
  //     orders.length > 0 ? setSentAll(true) : setSentAll(false);
  // }, [orders]);

    useEffect(() => {
        async function getOrders() {
            try {
                const res = await axios.get(
                  "http://localhost:3006/orders"
                );
                if (res.data.success) {
                  setOrders(res.data.orders)
                  setSentAll(res.data.orders.length <= 0);
                } else {
                  console.error("Error fetching orders:", res.data.message);
                }
              } catch (error) {
                console.error("Error with getOrders in useEffect:", error);
              }
            }

        getOrders();
    },[orders])

    async function sendOrder(id, name) {
        const confirmDelete = window.confirm(
          `Sending out ${name} to server for table ${table}`
        );
    
        //confirm user wants to delete record
        if (confirmDelete) {
          try {
            const response = await axios.delete(
              `http://localhost:3006/orders/${id}`
            );
            if (response.data.success) {
              // Remove the deleted opportunity from the state
              setOrders((prevOrders) =>
                prevOrders.filter((order) => order._id !== id)
              );
            } else {
              console.error("Error sending out order:", response.data.message);
            }
          } catch (error) {
            console.error("Error:", error);
          }
        } else {
          // User canceled the deletion, do nothing or handle as needed
        }
      }

    return (
        <div className="BartenderMenu">
        {orders.length === 0 ? (
        <div>
            <p>No Orders</p>
        </div>
    ) : (
        orders.map((order, index) => (
            <div key={index} className="order">
                <div><img src={`http://localhost:3006/images/${order.picture}`} alt="order image"/></div>
                <div>
                    <p>{order.name}</p>
                    <p><strong>{order.price}</strong></p>
                    <button onClick={() => {
                                    sendOrder(order._id, order.name)
                                    setTable("")

                                     }}>Send to table {table}</button>
                </div>
            </div>
        ))
    )}
    </div>
    )
}

export default BartenderMenu;