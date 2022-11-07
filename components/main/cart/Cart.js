import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cart = ({ item }) => {
  const { product_name, product_price, product_images, id } = item;
  return (
    <div className="cart">
      <Link href={`/checkout/${id}`}>
        <div className="cart_image_wraper">
          <Image
            className="img"
            src={product_images[0]}
            alt="product_image"
          />
        </div>
      </Link>
      <div className="cart_body">
        <Link href={`/checkout/${id}`}>
          <h5>{product_name.slice(0, 18)}...</h5>
        </Link>

        <h5>{product_price}сум </h5>
        <div className="discout_price_wraper">
          <div className="discout_price">от 2 435 000 сум</div>
          <span>х24</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
