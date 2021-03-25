import React from 'react'
import {connect} from 'react-redux'
import {setFilter,setSort} from '../redux'

function Filter(props) {
    return (
        <div className="container-fluid d-flex justify-content-around mt-2">
            <div>
            <label htmlFor="">Sort :</label>{" "}
            <select name="" id="" value={props.sort} onChange={(e)=>props.setSort(e.target.value)}>
                <option value="Name">Name</option>
                <option value="Lowest">Lowest Price</option>
                <option value="Highest">Highest Price</option>
            </select>
            </div>

            <div>
                <label htmlFor="">Color :</label>{" "}
            <select name="" id="" value={props.filter}  onChange={(e)=>props.setFilter(e.target.value)}>
                <option value="">All</option>
                <option value="Blue">Blue</option>
                <option value="White">White</option>
                <option value="Grey">Grey</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Purple">Purple</option>
            </select>
            </div>
            
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filter : state.products.filter,
        sort : state.products.sort
    
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return{
        setFilter : (e) => {dispatch(setFilter(e))},
        setSort : (e) => {dispatch(setSort(e))}
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Filter);
  
