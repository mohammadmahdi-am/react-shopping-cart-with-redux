// things about products
export  {fetchProducts,setFilter,setSort,sortProducts,filterProducts} from './products/productsActions'
export { FETCH_PRODUCTS, SET_FILTER, SET_SORT, FILTER_PRODUCTS, SORT_PRODUCTS} from "./products/productTypes";

// thigs about cart
export {addToCart,removeFromCart} from './cart/cartActions'
export {ADD_TO_CART,REMOVE_TO_CART,EMPTY_CART_ITEMS} from './cart/cartTypes'