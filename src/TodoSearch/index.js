import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {
 
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Busca en la lista de TODO"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
