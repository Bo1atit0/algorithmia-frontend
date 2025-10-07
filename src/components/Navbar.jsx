import React, { useState } from 'react';
import { RiUserCommunityLine } from 'react-icons/ri';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavItems = [
    'Home',
    'Projects',
    'Blog',
    'About',
    'Contribute',
    'Contact',
  ];

  return (
    <section>
      <nav className=" py-5 md:py-4 fixed top-0 left-0 right-0 backdrop-blur-2xl px-4 md:px-0 z-20">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          {/* image */}
          <div className="h-3 w-3 p-5 bg-c1 rounded-lg text-lg font-bold flex justify-center items-center text-gray-300">
            AL
          </div>

          {/* Desktop nav list */}
          <div className="hidden md:flex lg:flex items-center gap-8 justify-between font-medium text-gray-800 ">
            {NavItems.map((item, index) => (
              <a
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
              </a>
            ))}
          </div>
          <button className="hidden md:flex items-center gap-2 bg-c2 px-4 py-2 font-semibold rounded-lg text-neutral-900 ">
            <RiUserCommunityLine />
            Join Community
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative md:hidden mb-0 w-8 h-8  flex justify-center items-center"
          >
            <span
              className={`h-0.5 w-6 bg-c2 transition-transform duration-1000 ease-in-out absolute
            ${isOpen ? 'rotate-45' : 'rotate-0'}
            `}
            />
            <span
              className={`h-0.5 w-6 bg-c2 transition-transform duration-1000 ease-in-out absolute
            ${isOpen ? '-rotate-45' : 'rotate-90'}
            `}
            />
          </button>
        </div>
      </nav>

      {/* mobile list */}
      <div className=" flex justify-center p-20">
        {/* {isOpen && ( */}
        <ul
          className={`flex flex-col gap-1 
          md:hidden absolute top-0 bg-gray-300/50 w-90 px-6 py-3 space-y-2
          transition-all duration-1000 ease-in-out
          ${isOpen ? 'translate-y-20 opacity-100' : 'translte-y-0 opacity-0'}`}
        >
          {NavItems.map((item, index) => (
            <li key={index} className="w-full text-lg font-semibold">
              {item}
            </li>
          ))}
        </ul>
        {/* )} */}
      </div>
    </section>
  );
};

export default Navbar;
