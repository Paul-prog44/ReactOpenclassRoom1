import React from 'react';
import "../styles/Cart.css";


function Cart() {
    let monsteraPrice = 8
    let lierrePrice = 10
    let blouquetPrice = 15
    let total = monsteraPrice+lierrePrice+blouquetPrice
    return <div className="lmj-cart">
                <ul>
                    <li>Monstera : {monsteraPrice}€</li>
                    <li>Lierre : { lierrePrice}€</li>
                    <li>bouquet de fleurs : {blouquetPrice}€</li>
                </ul>
                <p>Total = {total} €</p>
            </div>

}

export default Cart