import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [catFilter, setCatFilter] = useState('All');

  const filteredItems = catFilter === 'All' ? items : items.filter(item => item.category === catFilter);
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={e => setCatFilter(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
