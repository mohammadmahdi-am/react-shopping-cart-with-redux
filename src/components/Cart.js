import React,{ useState, useEffect } from "react";
import Bounce from "react-reveal/Bounce";
import { connect } from "react-redux";
import { removeFromCart } from "../redux";
import { EMPTY_CART_ITEMS } from "../redux";

function Cart(props) {
  const [showProceed, setShowProceed] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [showModal, setShowModal] = useState("");

  useEffect(() => {
    if (props.cartItems.length > 0) {
      setShowProceed(true);
    } else {
      setShowProceed(false);
    }
  }, [props.cartItems]);
  const showPrice = () => {
    return props.cartItems.reduce((a, c) => {
      return a + parseInt(c.price) * parseInt(c.count);
    }, 0);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div>
      {props.cartItems.length === 0 ? (
        <h4>Your cart is empty</h4>
      ) : (
        <h4>you have {props.cartItems.length} items in your cart </h4>
      )}
      {props.cartItems.map((product, index) => (
        <Bounce>
          <div key={index} className="mb-2">
            <button
              className="btn btn-danger  btn-sm"
              onClick={() => {
                props.removeFromCart(product);
              }}
            >
              Remove
            </button>
            <img src={product.image} width="45px" height="45px" alt="" />
            <span style={{ fontSize: "15px" }}>
              {product.model} - Count({product.count})
            </span>
          </div>
        </Bounce>
      ))}

      {showProceed && (
        <button
          className="btn btn-danger w-100"
          onClick={() => setShowForm(!showForm)}
        >
          Proceed -{showPrice()} Toman{" "}
        </button>
      )}
      {showForm && showProceed && (
        <div>
          <form
            action=""
            className="d-flex flex-column text-left"
            onSubmit={(e) => handleForm(e)}
          >
            <label htmlFor="">Name :</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Email :</label>
            <input
              type="text"
              name=""
              id=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Address :</label>
            <input
              type="text"
              name=""
              id=""
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button className="btn btn-success">
              Checkout - {showPrice()} Toman
            </button>
          </form>
        </div>
      )}

      {showModal && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "fixed",
            top: "0",
            left: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "50vw",
              backgroundColor: "rgba(255,255,255,1)",
              position: "absolute",
            }}
          >
            <button
              style={{ position: "absolute", top: "10px", left: "10px" }}
              className="btn btn-danger"
              onClick={() => {
                setShowModal(false);
                props.emptyCartItems();
              }}
            >
              X
            </button>
            <h1>thanks for buying our product</h1>
            <h2>FEE : {showPrice()} TOMAN</h2>

            <p>Name :{name}</p>
            <p>Email :{email}</p>
            <p>Address :{address}</p>
            {props.cartItems.map((product, index) => (
              <div key={index} className="mb-2">
                <img src={product.image} width="45px" height="45px" alt="" />
                <span style={{ fontSize: "15px" }}>
                  {product.model} - Count({product.count})
                </span>
                <hr />
                <br />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product) => dispatch(removeFromCart(product)),
    emptyCartItems: () => dispatch({ type: EMPTY_CART_ITEMS }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
