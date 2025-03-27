import React from "react";
import Link from "next/link";

const menuItems = [
  { name: "Головна", href: "/" },
  { name: "Товари та послуги", href: "/products" },
  { name: "Про нас", href: "/about" },
  { name: "Контакти", href: "/contact" },
  { name: "Доставка та оплата", href: "/delivery" },
  { name: "Повернення та обмін", href: "/returns" },
];

const MenuNavigation: React.FC = () => {
  return (
    <nav className="w-full bg-gray-300 dark:bg-black">
      <ul className="flex justify-center items-center h-[70px] gap-4 text-xs max-w-[1320px] w-full mx-auto uppercase">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer h-full flex justify-center items-center whitespace-nowrap hover:bg-gray-400 dark:hover:bg-gray-800 px-4 transition duration-500"
          >
            <Link href={item.href} className="h-full flex items-center">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuNavigation;
