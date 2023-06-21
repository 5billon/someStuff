import React from "react";
//deliverable 4
function Search({updateSearchState}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => updateSearchState(e.target.value)}
      />
    </div>
  );
}

export default Search;
