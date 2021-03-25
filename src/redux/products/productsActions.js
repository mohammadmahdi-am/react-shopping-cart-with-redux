import { FETCH_PRODUCTS, SET_FILTER, SET_SORT } from "./productTypes";
import { SORT_PRODUCTS } from "./productTypes";
import { FILTER_PRODUCTS } from "./productTypes";
 import data from '../../data.json'


export const fetchProducts = () => (dispatch) =>{
    
    dispatch({type : FETCH_PRODUCTS,payload:{data:data}})


}


export const setFilter = (value) => (dispatch) => {
    dispatch({type : SET_FILTER,payload :value})
    dispatch(filterProducts())

}


export const setSort = (value) => (dispatch) => {
    dispatch({type : SET_SORT,payload :value})
    dispatch(sortProducts())


}


export const sortProducts = () => (dispatch,getState) =>{
    let sort = getState().products.sort
    let products = getState().products.listOfProducts
    switch(sort){
        
        case "Lowest":         
          dispatch({type:SET_SORT,payload : "Lowest"})
          products = products.mobiles.slice().sort(function(a, b) {
            return a.price - b.price;
          })
          dispatch({type:SORT_PRODUCTS,payload:{data:{mobiles:products}}})
          break
  
        
        
        case "Highest":
          setSort("Highest")
          dispatch({type:SET_SORT,payload : "Highest"})
          products = products.mobiles.slice().sort(function(a, b) {
            return b.price - a.price;
          })
          dispatch({type:SORT_PRODUCTS,payload:{data:{mobiles:products}}})
          break
  
        case "Name":
          
          dispatch({type:SET_SORT,payload : "Name"})
          products = products.mobiles.slice().sort((a, b) => a.model.localeCompare(b.model))
          dispatch({type:SORT_PRODUCTS,payload:{data:{mobiles:products}}})
          break
  
        default : 
        dispatch({type:SET_SORT,payload : ""})
        products = products.mobiles.slice()
        dispatch({type:SORT_PRODUCTS,payload:{data:{mobiles:products}}})
      }
      



}

export const filterProducts = () => (dispatch,getState) =>{
    let filter = getState().products.filter
    if(filter === ""){
     
        console.log(data)
        dispatch({type:FILTER_PRODUCTS,payload:{data:data}})
        
  
      }else{

        
        let productsCopy = data.mobiles.slice()
        console.log(productsCopy)
        productsCopy = productsCopy.filter((item)=>item.availableColors.indexOf(filter) >= 0)
        console.log(productsCopy)
        dispatch({type:FETCH_PRODUCTS,payload:{data:{mobiles:productsCopy}}})
      
      
      }





}

