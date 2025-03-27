import Link from 'next/link';
import React from 'react';


interface Props {
title?: string;
}
const Footer: React.FC<Props> = ({ }) => {
return (<footer className='w-full flex flex-col  justify-center items-center  min-h-[80px]'>
    <div className='min-h-[50px] pt-4 cursor-pointer hover:text-[#51964e]'><h3>Залишити повідомлення?</h3></div>
    <ul className="flex gap-2 mb-[1rem]">
  <li>
    <Link href="/" className="text-[14px] font-semibold">PLS.COM.UA</Link>
  </li>
  <li>
    <Link href="/" className="underline text-[12px] hover:text-[#63a3f1]">
      Поскаржитися на контент
    </Link>
  </li>
  <li>
    <Link href="/" className="underline text-[12px] hover:text-[#63a3f1]">
      Політика конфіденційності
    </Link>
  </li>
</ul>

</footer>
 );
};
export default Footer;