import React, { Component } from "react";
import "./styles.css";

const products = [
  {
    id: 1,
    name: "Coffee Mug",
    price: 70,
  },
  {
    id: 2,
    name: "Box",
    price: 10,
  },
  {
    id: 3,
    name: "Bottol",
    price: 40,
  },
];


const deleteItem = (e) => {
  e.preventDefault()
  products.doc(products.id).delete();
}

let options = []

for(let i=1; i<Math.max(products.item.quantity + 1, 20); i++) {
  options.push(<option value={i}> Qty: {i}</option>)
}

const changeQuantity = (newQuantity) => {
  products.doc(products.id).update({
      quantity: parseInt(newQuantity)
  })
}


  // for total price
  const getTotalPrice = () => {
    let total = 0;
    products.forEach((item) => {
        total += (item.product.price * item.product.quantity)
    })
    return total;
  }
  
  // for total count
  const getCount = () => {
    let count = 0;
    // Loop through all cart items
    products.forEach((item) => {
        // add the quantity of the cart item to total
        count += item.product.quantity;
    })
  
    return count;
  }




class App extends Component {
  state = {
    items: products,
    quantity: 0,
  };





  
  render() {
    return (
      <div>
        <section>
            Cart Items - {getCount}
          </section>          
        <section>Total Cart Price - {getTotalPrice}</section> 
        <table>
          <thead>
            <tr>
              <th>Items</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={()=>{this.handleAddQuantity(item.id)}}>+</button>
                  <span 
                    value={item.quantity}
                    onChange={(e) => changeQuantity(e.target.value)}>{options}</span>
                  <button onClick={()=>{this.handleSubtractQuantity(item.id)}}>-</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}



export default App;
