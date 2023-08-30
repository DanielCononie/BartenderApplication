import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import '../App.css'


function Menu({drinks, setDrinks, count, setCount, table, setTable}) {

  const navigate = useNavigate();
  
    
    useEffect(() => {
        async function getDrinks() {
            try {
              const res = await axios.get(
                "http://localhost:3006/customers"
              );
              if (res.data.success) {
                setDrinks(res.data.drinks);
              } else {
                console.error("Error fetching opportunities:", res.data.message);
              }
            } catch (error) {
              console.error("Error with getDrinks in useEffect:", error);
            }
          }

          getDrinks();
    }, [])

    function submitDrinkOrder(drink) {

      setTable(window.prompt("What table will you be sitting at?"));

      const confirmDrink = window.confirm(
        `Are you sure you would like to order ${drink.name}`
      );

      

      if(confirmDrink) {

        const orderData = {
          name: drink.name,
          price: drink.price,
          picture: drink.picture // Include the drink's image string
        };
    
        axios.post("http://localhost:3006/orders", orderData)
          .then(response => {
            // Handle successful response if needed
          })
          .catch(error => {
            console.error("Error submitting drink order:", error);
          });

          setCount(prev => prev + 1);
          navigate("/bartender")
      }

    }

    return (
      <div className="menu-container">
        <div className="Menu">
            {drinks.map((drink, index) => {
                return (
                    <div key={index} className="drink">
                        <div className="name-price">
                            <p><strong>{drink.name}</strong></p>
                            <p>${drink.price}</p>
                            <button onClick={() => submitDrinkOrder(drink)} className="drink-btn">Order</button>
                        </div>
                        <div><img src={`http://localhost:3006/images/${drink.picture}`} alt="drink image" className="drink-picture"/></div>
                    </div>
                )
            })}
        </div>
        </div>
    ) 
}

export default Menu;