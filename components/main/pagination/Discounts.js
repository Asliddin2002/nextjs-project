import Image from "next/image";
import React from "react";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";

const discount = [
  {
    id: 1,
    icon: icon1,
    name: "Обменяй свой старый айфон и получи скидку на новый",
    more: "400 000 сум",
    color: "crimson",
  },
  {
    id: 2,
    icon: icon2,
    name: "Наушники в подарок",
    more: "Apple EarPods",
    color: "blue",
  },
  {
    id: 3,
    icon: icon3,
    name: "Скидка 20% на смартфоны",
    more: "10 000 сум",
    color: "yellow",
  },
  {
    id: 4,
    icon: icon4,
    name: "Скидка на айфоны",
    more: "IMEI 012345678901234",
    color: "green",
  },
];

const Discounts = () => {
  return (
    <div>
      {discount.map((item) => (
        <div key={item.id}>
          <div className="discount_list">
            <div className={`discount_icon ${item.color}`}>
              <Image src={item.icon} alt="icons" />
            </div>
            <div className="discount_info">
              <span>{item.name}</span>
              <span>{item.more}</span>
            </div>
            <input type="checkbox" />
          </div>
          <div className="hr"></div>
        </div>
      ))}
    </div>
  );
};

export default Discounts;
