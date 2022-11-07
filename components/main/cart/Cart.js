import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cart = ({ item }) => {
  return (
    <div className="cart">
      <Link href={`/checkout/${item.id}`}>
        <div className="cart_image_wraper">
          <Image
            className="img"
            src={item.product_images[0]}
            alt="product_image"
          />
        </div>
      </Link>
      <div className="cart_body">
        <Link href={`/checkout/${item.id}`}>
          <h5>{item.product_name.slice(0, 18)}...</h5>
        </Link>

        <h5>{item.product_price}сум </h5>
        <div className="discout_price_wraper">
          <div className="discout_price">от 2 435 000 сум</div>
          <span>х24</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
