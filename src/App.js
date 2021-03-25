import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Products from "./components/Products";
// import data from "./data.json";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="container-fluid bg-primary text-white py-2">
          <h3>Mobile shop</h3>
        </header>
        <div className="container-fluid">
          <div className="row flex-column flex-md-row">
            <main className="col-md-9 col-12 order-2 order-md-1">
              <Filter />
              <Products />
            </main>
            <aside className="col-md-3 col-12 order-1 order-md-2 my-5 text-center">
              <Cart />
            </aside>
          </div>
        </div>

        <footer className="bg-primary text-white container-fluid text-center">
          <h4 className="m-0 py-2">All Rights Reserved</h4>
        </footer>
      </div>
    </Provider>
  );
}

export default App;
