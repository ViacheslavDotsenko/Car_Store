import Link from 'next/link';
import React from 'react';
interface Props {
curentPage: string;
}
const Breadcrumbs: React.FC<Props> = ({ curentPage }) => {
return (
<nav aria-label="Breadcrumb" className='bg-gray-300 p-[1rem] rounded'>
    <ol className="flex space-x-2 text-sm text-gray-600">
      <li><Link href="/" className="hover:underline">Домашня</Link>
      </li>
      <li>/</li>
      <li className="text-gray-600 text-[10px]">{curentPage}</li>
    </ol>
  </nav>
 );
};
export default Breadcrumbs;