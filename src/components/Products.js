import React from "react";

function Products(props) {
  return (
    <div className="row">
      {props.products.map((product,index) => (
        <div className="col-12 col-md-4 text-center my-5" key={index}>
          <img
            src={product.image}
            className="d-inline-block w-50 h-50 "
            alt={product.model}
          />
          <h4 className="text-center">{product.model}</h4>
          <h5>Available Colors </h5>
          <div className="d-flex justify-content-center">{product.availableColors.map((color,key)=>(<span key={key} className="mx-2 rounded-circle" style={{backgroundColor:color,width:"30px",height:"30px",display:"inline-block",border:"1px solid rgba(0,0,0,0.5)"}}></span>))}</div>
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
