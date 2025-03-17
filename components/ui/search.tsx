"use client"
import React, { useState } from 'react';

interface Props {
  title?: string;
}

const Search: React.FC<Props> = () => {
  const [searchText, setSearchText] = useState(""); 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    console.log("Введений текст:", searchText);
    setSearchText("");
  };

  return (
    <div className="w-full max-w-[500px] bg-transparent flex items-center border border-gray-600 dark:border-gray-300 rounded-lg overflow-hidden relative transition-all focus-within:border-[#7efc17]"
    title="Разом Ми знайдемо все!">
      <label className="relative flex-1 px-3">
        {/* <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base font-light transition-all 
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:-t  ranslate-y-1/2 peer-placeholder-shown:text-gray-500 
          peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#f4a137]">
          Пошук...
        </span> */}

        <input
          type="text"
          value={searchText}
          onChange={handleInputChange} 
          className="peer w-full p-3 outline-none text-[#393838] dark:text-[#ffffff] bg-transparent"
          placeholder="Пошук..."
        />
      </label>

      <button 
        onClick={handleSearch} // Обробник кліку
        className="border-l border-gray-300 bg-transparent h-full text-[#393838] px-4 py-2 hover:text-[#f4a137] hover:bg-gray-800 transition duration-300 dark:text-[#ffffff]">
        Пошук
      </button>
    </div>
  );
};

export default Search;
