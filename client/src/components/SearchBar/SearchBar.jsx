import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSearch}) {
  const [meal, setMeal] = useState("");
  return (
    <form id="myForm" onSubmit={(e) => {
      e.preventDefault();
      onSearch(meal);
      document.getElementById("myForm")[0].value = '';
    }}>
      <input
        className="inputSearch"
        type="text"
        placeholder="Type your wished plate..."
        value={meal}
        onChange={e => setMeal(e.target.value)}
      />
      <input type="submit" value="Search"/>
    </form>
  );
}