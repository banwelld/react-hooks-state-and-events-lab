import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const cartClass = isInCart ? 'in-cart' : '';
  const buttonText = isInCart ? 'Remove From Cart' : 'Add to Cart';

  const toggleInCart = () => setIsInCart(!isInCart);

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleInCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
