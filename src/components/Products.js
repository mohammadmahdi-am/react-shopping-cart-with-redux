import React from "react";

function Products(props) {
  return (
    <div className="row">
      {props.products.map((product) => (
        <div className="col-12 col-md-4 text-center my-5">
          <img
            src={product.image}
            className="d-inline-block w-50 h-50 "
            alt={product.model}
          />
          <h4 className="text-center">{product.model}</h4>
          <h4 className="text-center">{product.price} Toman</h4>
          <div className="btn-group">
            <a href="" className="btn btn-primary">
              Add to cart
            </a>
            <a href="" className="btn btn-danger">
              Info
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
