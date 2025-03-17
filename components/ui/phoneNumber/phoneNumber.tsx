import React from "react";
import IconPhone from "./iconPhone";

interface PhoneNumberProps {
  phone?: string;
 // onClick?: () => void;
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({
  phone = "+380 (93) 832-55-35",
 // onClick,
}) => {
  return (
    <a title="Подзвони нам"
      href="tel:+380938325535"
      className="flex items-center gap-2 p-2 border border-transparent rounded-lg cursor-pointer hover:text-[#f4a137] transition duration-300"
     // onClick={onClick} 
    >
      <IconPhone size={20} />     
      {phone}
    </a>
  );
};

export default PhoneNumber;
