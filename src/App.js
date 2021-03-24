import { useState } from "react";
import Products from "./components/Products";
import data from "./data.json";
function App() {
  const [products, setProducts] = useState(data.mobiles);

  return (
    <div className="App">
      <header className="container-fluid bg-primary text-white py-2">
        <h3>Mobile shop</h3>
      </header>
      <div className="container-fluid">
        <div className="row flex-column flex-md-row">
          <main className="col-md-10 col-12 order-2 order-md-1">
            <Products products={products} />
          </main>
          <aside className="col-md-2 col-12 order-1 order-md-2 my-5 text-center">SideBar</aside>
        </div>
      </div>

      <footer className="bg-primary text-white container-fluid text-center">
        <h4 className="m-0 py-2">All Rights Reserved</h4>
      </footer>
    </div>
  );
}

export default App;
