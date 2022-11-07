import React from "react";
import { GoSearch } from "react-icons/go";

const Search = () => {
  return (
    <div className="searc_input_wrapper">
      <input className="search_input" placeholder="Поиск по названию товара" />
      <button>
        <GoSearch />
      </button>
    </div>
  );
};

export default Search;
