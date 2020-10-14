import React from 'react';

const SearchBar = (props) => {

  const changeHandler = event => {
    props.sortHandler(event.target.value)
  }

  const filterHandler = event => {
    props.filter(event.target.value)
  }
  
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sortType === "Alphabetically" ? true : false} onChange={changeHandler}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sortType === "Price" ? true : false} onChange={changeHandler}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={filterHandler}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
