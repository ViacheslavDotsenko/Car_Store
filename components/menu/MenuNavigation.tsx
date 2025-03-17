import React from 'react';

const menuItems = [
  'Головна',
  'Товари та послуги',
  'Про нас',
  'Контакти',
  'Доставка та оплата',
  'Повернення та обмін',
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
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuNavigation;
