import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Search from '../ui/search';
import IconPhone from "../ui/phoneNumber/iconPhone";
import logo from "@/public/images/Audi TT 2022 02.svg";
import PhoneNumber from '../ui/phoneNumber/phoneNumber';
import Basket from '../ui/basket';
import ThemeToggle from '../theme-toggle';




interface Props {
title?: string;
}
const Header: React.FC<Props> = ({ }) => {
return (<header className="flex w-full items-center justify-center p-[1rem] bg-[#e0dede] dark:bg-[#393838] w-full min-h-[100px] ">
    <ul className='flex w-full justify-between max-w-[1340px]'>
        <li className="flex gap-4  dark:text-[#e0dede] "><Link href="/" title="Повернутися на головну"><Image width={50} height={50} src={logo} alt="img Car" /></Link>
        <PhoneNumber/>       
        </li>
        <li><Search/></li>
        <li className='flex gap-4'><ThemeToggle/><Basket/></li>
    </ul>
</header>
 );
};
export default Header;