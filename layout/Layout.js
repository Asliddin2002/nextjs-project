import React from "react";
import Navbar from "../components/header/Navbar";
import SideBar from "../components/sidebar/SideBar";
import product1 from "../components/assets/product1.jpg";
import product2 from "../components/assets/product2.jpg";
import product3 from "../components/assets/product3.jpg";
import product4 from "../components/assets/product4.jpg";
import {
  FaHome,
  FaRegFileAlt,
  FaWallet,
  FaRegStar,
  FaCartPlus,
  FaChevronRight,
} from "react-icons/fa";
import { useRouter } from "next/router";

export const data = [
  {
    id: 1,
    product_name: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
    product_price: 6_000_000,
    product_characterstics: [
      { id: 1, name: "Тип", value: "моноблок (классический)" },
      { id: 2, name: "Стандарт", value: "2G, 3G, 4G (LTE), 5G" },
      { id: 3, name: "Операционная система", value: "iOS 14" },
    ],
    product_images: [product1, product2, product3, product4, product1],
  },
  {
    id: 2,
    product_name: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
    product_price: 7_000_000,
    product_characterstics: [
      { id: 1, name: "Тип", value: "моноблок (классический)" },
      { id: 2, name: "Стандарт", value: "2G, 3G, 4G (LTE), 5G" },
      { id: 3, name: "Операционная система", value: "iOS 14" },
    ],
    product_images: [product2, product1, product3, product4, product1],
  },
  {
    id: 3,
    product_name: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
    product_price: 9_000_000,
    product_characterstics: [
      { id: 1, name: "Тип", value: "моноблок (классический)" },
      { id: 2, name: "Стандарт", value: "2G, 3G, 4G (LTE), 5G" },
      { id: 3, name: "Операционная система", value: "iOS 14" },
    ],
    product_images: [product3, product4, product1, product4, product1],
  },
  {
    id: 4,
    product_name: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
    product_price: 5_000_000,
    product_characterstics: [
      { id: 1, name: "Тип", value: "моноблок (классический)" },
      { id: 2, name: "Стандарт", value: "2G, 3G, 4G (LTE), 5G" },
      { id: 3, name: "Операционная система", value: "iOS 14" },
    ],
    product_images: [product2, product3, product2, product4, product1],
  },
  {
    id: 5,
    product_name: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
    product_price: 2_000_000,
    product_characterstics: [
      { id: 1, name: "Тип", value: "моноблок (классический)" },
      { id: 2, name: "Стандарт", value: "2G, 3G, 4G (LTE), 5G" },
      { id: 3, name: "Операционная система", value: "iOS 14" },
    ],
    product_images: [product4, product1, product3, product2, product1],
  },
];

let arr = [
  {
    id: 1,
    name: "Главная",
    icon: FaHome,
    to: "/",
  },
  {
    id: 2,
    name: "Заказы",
    icon: FaRegFileAlt,
    to: "/order",
  },
  {
    id: 3,
    name: "Товары",
    icon: FaWallet,
    to: "/product",
  },
  {
    id: 4,
    name: "Отзывы",
    icon: FaRegStar,
    to: "/reviews",
  },
  {
    id: 5,
    name: "Оформить заказ",
    icon: FaCartPlus,
    to: "/checkout",
  },
];

const Layout = ({ children }) => {
  const router = useRouter();
  const route = router.pathname.slice(1, router.pathname.length);
  return (
    <div>
      <Navbar />
      <div className="main_side_wraper">
        <SideBar arr={arr} />
        <div className="main_wraper">
          <div className="page_path">
            <span>
              Заявки <FaChevronRight />
            </span>
            <span>{route}</span>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
