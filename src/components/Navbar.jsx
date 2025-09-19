import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const NavItems = [
    'Home',
    'Projects',
    'Blog',
    'About',
    'Contribute',
    'Contact',
  ];

  return (
    <>
      <nav className="flex justify-between md:items-center px-10 py-8 md:px-16 md:py-6">
        {/* image */}
        <div className="h-3 w-3 p-5 bg-indigo-500 rounded-lg text-lg font-bold flex justify-center items-center text-gray-300">
          AL
        </div>

        {/* Desktop nav list */}
        <ul className="hidden md:flex lg:flex gap-8 font-medium text-gray-800 ">
          {NavItems.map((item, index) => (
            <li
              className="cursor-pointer 
            relative
            after:absolute
            after:left-0
            after:-bottom-2
            after:w-full
            after:h-0.5
            after:opacity-0
            hover:after:opacity-95
            after:bg-[linear-gradient(to_right,indigo_0_40%,transparent_40%),repeating-linear-gradient(to_right,indigo_0_20%,transparent_20%_25%)]
            after:transition-all 
            after:duration-1000 
            after:ease-in-out
            after:scale-x-0
            hover:after:scale-x-100
            after:origin-left
            "
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative md:hidden mb-0"
        >
          {isOpen ? 'X' : '+'}
        </button>

        {/* buttons */}
        {/* <div className="flex gap-4">
        <button className="border-2 px-4 py-2 font-medium rounded-lg">
          GitHub
        </button>
        <button className="bg-indigo-600 px-4 py-2 font-medium rounded-lg">
          Join Community
        </button>
      </div> */}
      </nav>

      {/* mobile list */}
      {isOpen && (
        <ul className="absolute right-0 px-8 mx-auto  border bg-gray-300 w-full p">
          {NavItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Navbar;
