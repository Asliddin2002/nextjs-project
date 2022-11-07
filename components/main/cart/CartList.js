import React from "react";
import Cart from "./Cart";
import { data } from "../../../layout/Layout";

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CartList = () => {
  return (
    <div className="cartList">
      {data.map((item) => (
        <Cart item={item} key={item.id} />
      ))}
    </div>
  );
};

export default CartList;
