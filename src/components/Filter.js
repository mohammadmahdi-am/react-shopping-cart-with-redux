import React from 'react'

function Filter(props) {
    return (
        <div className="container-fluid d-flex justify-content-around mt-2">
            <div>
            <label htmlFor="">Sort :</label>{" "}
            <select name="" id="" value={props.sort} onChange={(e)=>props.sortProducts(e)}>
                <option value="Name">Name</option>
                <option value="Lowest">Lowest Price</option>
                <option value="Highest">Highest Price</option>
            </select>
            </div>

            <div>
                <label htmlFor="">Color :</label>{" "}
            <select name="" id="" value={props.filter}  onChange={(e)=>props.filterProducts(e)}>
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

export default Filter
