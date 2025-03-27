import Link from 'next/link';
import React from 'react';
import SectionTitle from '../ui/sectionTitle';
import Breadcrumbs from '../ui/Breadcrumbs';



interface Props {
title?: string;
}
const ContactUs: React.FC<Props> = ({ }) => {
return (<article className='w-full '>
  <div className='max-w-[900px] p-[1rem] w-full mx-auto'>
   <Breadcrumbs curentPage='Контакти'/> 
   <SectionTitle title='Контакти'/>

<div className="mt-[3rem] flex gap-8 max-w-[800px] w-full mx-auto">  
  <ul className="flex flex-col gap-3 w-[250px] font-semibold text-gray-700">
    <li>Назва:</li>
    <li>Контактна особа:</li>
    <li>Адреса:</li>
    <li>Сайт:</li>
    <li>Сайт компанії:</li>
    <li>Телефон:</li>
    <li>Email:</li>
    <li>Telegram:</li>
    <li>Viber:</li>
  </ul>  
  <ul className="flex flex-col gap-3 w-full">
    <li><Link href="/" className="hover:underline text-gray-600">PLS.COM.UA</Link></li>
    <li><Link href="/" className="hover:underline text-gray-600">Сергій</Link></li>
    <li><Link href="/" className="hover:underline text-gray-600">вул. Одеська, 18, індекс 08121, Крюковщина, Україна</Link></li>
    <li><Link href="/" className="hover:underline text-gray-600">psl.com.ua</Link></li>
    <li><Link href="/" className="hover:underline text-gray-600">psl.com.ua/ua</Link></li>
    <li><Link href="/" className="hover:underline text-gray-600">+380 (93) 832-55-35 - Відділ продажу</Link></li>
    <li><Link href="/" className="hover:underline text-gray-600">centr7785@gmail.com</Link></li>
    <li><Link href="/" className="hover:underline text-gray-600">+380938325535</Link></li>
    <li><Link href="/" className="hover:underline text-gray-600">+380938325535</Link></li>
  </ul>
</div>


  </div>    
</article>
 );
};
export default ContactUs;