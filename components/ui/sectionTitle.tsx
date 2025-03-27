import React from 'react';
interface Props {
title: string;
}
const SectionTitle: React.FC<Props> = ({title }) => {
return (<h1 className="relative text-2xl font-bold mt-4 mb-3 
    before:block before:w-1/3 before:h-[3px] before:bg-orange-500 before:absolute before:bottom-[-7px] before:left-0 
    after:block after:w-full after:h-[2px] after:bg-gray-300 after:absolute after:bottom-[-5px] after:left-0">
    {title}
  </h1>
 );
};
export default  SectionTitle;