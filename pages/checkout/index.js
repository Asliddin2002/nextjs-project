import React from "react";
import CartList from "../../components/main/cart/CartList";
import Pagination from "../../components/main/pagination/Pagination";
import Search from "../../components/main/search/Search";
import { data } from "../../layout/Layout";

const Checkout = () => {
  return (
    <div>
      <div className="checkout_header">Оформить заказ</div>
      <Search />
      <div className="total_product">Все товары ({data.length})</div>
      <CartList />
      <Pagination />
    </div>
  );
};

export default Checkout;
