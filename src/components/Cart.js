import React from 'react';


function Cart() {
    let monsteraPrice = 8
    let lierrePrice = 10
    let blouquetPrice = 15
    let total = monsteraPrice+lierrePrice+blouquetPrice
    return <React.Fragment><ul>
        <li>Monstera : {monsteraPrice}€</li>
        <li>Lierre : { lierrePrice}€</li>
        <li>bouquet de fleurs : {blouquetPrice}€</li>
        </ul>
    <p>Total = {total} €</p>
    </React.Fragment>

}

export default Cart