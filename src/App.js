import { useState } from "react";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Products from "./components/Products";
// import data from "./data.json";
import {store} from './redux/store'
import {Provider} from 'react-redux'

function App(props) {
  
  const [cartItems,setCartItems] = useState([])

  const addToCart = (product) => {
    let copyCartItems = cartItems.slice()
    let alreadyInCart = false
    copyCartItems.forEach(item => {
      if(item._id === product._id){
        alreadyInCart = true
        item.count++
      }


    })     
     if(!alreadyInCart){
        copyCartItems.push({...product,count : 1})
        
      }
    
    setCartItems(copyCartItems)


  }

  const removeFromCart = (product) => {
    let copyCartItems = cartItems.slice()
    copyCartItems= copyCartItems.filter(item => item._id !== product._id )
    setCartItems(copyCartItems)
    
  }

 


  return (
    <Provider store={store}>
    <div className="App">
      <header className="container-fluid bg-primary text-white py-2">
        <h3>Mobiloe shop</h3>
      </header>
      <div className="container-fluid">
        <div className="row flex-column flex-md-row">
          <main className="col-md-9 col-12 order-2 order-md-1">
            {/* <Filter filterProducts={filterProducts} filter={filter} sort={sort} sortProducts={sortProducts}/> */}
            <Filter  />
            {/* <Products products={props.listOfProducts}/> */}
            <Products   addToCart={addToCart} />
          </main>
          <aside className="col-md-3 col-12 order-1 order-md-2 my-5 text-center">
            <Cart cartItems={cartItems} setCartItems={setCartItems} removeFromCart={removeFromCart}/></aside>
        </div>
      </div>

      <footer className="bg-primary text-white container-fluid text-center">
        <h4 className="m-0 py-2">All Rights Reserved</h4>
      </footer>
    </div>
    </Provider>
  );
}

export default App