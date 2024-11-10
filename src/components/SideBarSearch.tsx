"use client"
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SideBarSearch = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className="relative max-w-md w-full">
      <Search 
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
        size={20}
      />
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          w-full
          pl-10
          pr-4
          py-2
          h-[36px]
          rounded-lg
          text-gray-600
          border-2
          outline-none
          transition-colors
          duration-200
          ${isFocused || value ? 'border-gray-500' : 'border-gray-300'}
          focus:border-gray-500
          placeholder-gray-400
        `}
      />
    </div>
  );
};

export default SideBarSearch;