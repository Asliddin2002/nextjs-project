import { useRouter } from "next/router";
import React, { useState } from "react";
import ImageSwiper from "../../components/main/swiper/ImageSwiper";
import { data } from "../../layout/Layout";
import { FiChevronRight } from "react-icons/fi";
import icon1 from "../../components/assets/icon1.svg";
import icon2 from "../../components/assets/icon2.svg";
import icon3 from "../../components/assets/icon3.svg";
import icon4 from "../../components/assets/icon4.svg";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";
import Discounts from "../../components/main/pagination/Discounts";

let discount = [
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

const Details = () => {
  const [activeClassNum, setActiveClassNum] = useState(1);
  const router = useRouter();
  const { id } = router.query;
  const product = data.filter((item) => item.id == id);
  return (
    <div className="details_wraper">
      <div className="addToCart">
        <FaCartPlus />
      </div>
      <h5 className="checkout_header">{product[0]?.product_name}</h5>
      <div className="product_details_wraper">
        <div className="image_swiper">
          <div className="pic_icons">
            {discount.map((item) => (
              <div
                key={item.id}
                className={`discount_icon ${item.color} pic_icon `}
              >
                <Image src={item.icon} alt="icons" />
              </div>
            ))}
          </div>

          <ImageSwiper images={product[0]?.product_images} />
        </div>
        <div className="details_data">
          <div className="details_price">
            <h5 className="label">Цена телефона</h5>
            <h5 className="price">{product[0]?.product_price} сум </h5>
          </div>
          <div className="details_price">
            <h5 className="label">Общая цена (с наценкой)</h5>
            <h5 className="price price-x">
              <span>7 300 000 сум</span>
              <div className="discout_price_wraper">
                <div className="discout_price">от 2 435 000 сум</div>
                <span>х3</span>
              </div>
            </h5>
            <div className="period_buttons">
              <button
                onClick={() => setActiveClassNum(1)}
                className={activeClassNum === 1 ? "button_active" : null}
              >
                3 мес
              </button>
              <button
                className={activeClassNum === 2 ? "button_active" : null}
                onClick={() => setActiveClassNum(2)}
              >
                6 мес
              </button>
              <button
                className={activeClassNum === 3 ? "button_active" : null}
                onClick={() => setActiveClassNum(3)}
              >
                12 мес
              </button>
              <button
                className={activeClassNum === 4 ? "button_active" : null}
                onClick={() => setActiveClassNum(4)}
              >
                24 мес
              </button>
            </div>
            <div className="percentage">
              Наценка: <span>{activeClassNum * 5}%</span>{" "}
            </div>
          </div>
          <div className="details_price">
            <h5 className="label">Общие характеристики</h5>
            {product[0]?.product_characterstics.map((item, index) => (
              <p key={index} className="characters">
                {item.name}: {item.name}
              </p>
            ))}
            <div className="drop_down">
              <span>Показать все</span> <FiChevronRight />
            </div>
          </div>
        </div>
      </div>
      <h5 className="discount">Акции</h5>
      <Discounts />
      <button className="add">Добавить в корзину</button>
    </div>
  );
};

export default Details;
