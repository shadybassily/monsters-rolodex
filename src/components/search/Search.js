import React from "react";
import './search.styles.css'
export default function Search(props) {
  
  return (
    <div className="text-center p-3 col-sm-5 col-lg-4 mx-auto">
      <input type="search" className="p-2 form-control" placeholder={props.placeholder} value={props.searchField} onChange={props.handleChange}/>
    </div>
  );
}
