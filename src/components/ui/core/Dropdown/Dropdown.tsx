'use client';
import React, { useState } from 'react';

export interface DropdownProps {
  items: string[];
  text: string;
  setSelectedItem: any;
}

const Dropdown = ({ items, text, setSelectedItem }: DropdownProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="w-fit overflow-hidden">
      <div
        id="trigger"
        className="p-2 cursor-pointer border-2 rounded-md bg-slate-700"
        onClick={() => setShowMenu(!showMenu)}
      >
        <p className="">{text}</p>
      </div>
      <div
        id="menu"
        className="absolute z-50 bg-slate-700 rounded mt-2 w-full h-full overflow-hidden md:w-fit md:max-h-40"
        hidden={!showMenu}
      >
        <ul className="flex flex-col">
          {items?.map((item: string) => {
            return (
              <li
                className="py-1 px-2 rounded hover:cursor-pointer hover:bg-slate-500"
                
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;