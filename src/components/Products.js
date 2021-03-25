import React,{useEffect} from "react";
import Reveal from 'react-reveal/Reveal';
import {connect} from 'react-redux'
import {fetchProducts,addToCart} from '../redux'
function Products(props) {
  useEffect(()=>{
    props.fetchProducts()


  },[])
  return (
    <div className="row">
      { props.listOfProducts ? props.listOfProducts.mobiles.map((product,index) => (
        <Reveal key={index}>
        <div className="col-12 col-md-4 text-center my-5" >
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
            <button href="" className="btn btn-primary" onClick={()=>{props.addToCart(product)}}>
              Add to cart
            </button>
            <button href="" className="btn btn-danger" >
              Info
            </button>
          </div>
        </div>
        </Reveal>
      )) : "Loading ..."}
    </div>
  );
  
}

const mapStateToProps = (state) => {
  return {
  listOfProducts : state.products.listOfProducts,
  

  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchProducts : () => {dispatch(fetchProducts())},
    addToCart : (product) => dispatch(addToCart(product))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Products);

