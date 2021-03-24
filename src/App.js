import { useState } from "react";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json";
function App() {
  const [products, setProducts] = useState(data.mobiles);
  const [filter,setFilter] = useState("")
  const [sort,setSort] = useState("")
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

  const sortProducts = (e) => {
    switch(e.target.value){
      case "Lowest":
        setSort("Lowest")

        setProducts(products.slice().sort(function(a, b) {
          return a.price - b.price;
        }))
        break

      
      
      case "Highest":
        setSort("Highest")
        setProducts(products.slice().sort(function(a, b) {
          return b.price - a.price;
        }))
        break

      case "Name":
        setSort("Name")
        
        setProducts(products.slice().sort((a, b) => a.model.localeCompare(b.model)))
        break

      default : setSort("")
    }
    setSort(e.target.value)

  }

  const filterProducts = (e) => {
    
    if(e.target.value === ""){
     
      setFilter(e.target.value)
      setProducts(data.mobiles)

    }else{
      let productsCopy = data.mobiles.slice()
      productsCopy = productsCopy.filter((item)=>item.availableColors.indexOf(e.target.value) >= 0)
      setFilter(e.target.value)
      setProducts(productsCopy)
    
    
    }
      


  }

  return (
    <div className="App">
      <header className="container-fluid bg-primary text-white py-2">
        <h3>Mobiloe shop</h3>
      </header>
      <div className="container-fluid">
        <div className="row flex-column flex-md-row">
          <main className="col-md-9 col-12 order-2 order-md-1">
            <Filter filterProducts={filterProducts} filter={filter} sort={sort} sortProducts={sortProducts}/>
            <Products products={products} addToCart={addToCart} />
          </main>
          <aside className="col-md-3 col-12 order-1 order-md-2 my-5 text-center">
            <Cart cartItems={cartItems} setCartItems={setCartItems} removeFromCart={removeFromCart}/></aside>
        </div>
      </div>

      <footer className="bg-primary text-white container-fluid text-center">
        <h4 className="m-0 py-2">All Rights Reserved</h4>
      </footer>
    </div>
  );
}

export default App;
