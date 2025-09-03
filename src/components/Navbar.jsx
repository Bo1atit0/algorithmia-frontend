import React from 'react';

const Navbar = () => {
  const NavItems = [
    'Home',
    'Projects',
    'Blog',
    'About',
    'Contribute',
    'Contact',
  ];
  return (
    <nav className="flex justify-between items-center px-16 py-6">
      {/* image */}
      <div className="h-3 w-3 p-5 bg-indigo-500 rounded-lg text-lg font-bold flex justify-center items-center text-gray-300">
        AL
      </div>

      {/* nav list */}
      <ul className="flex gap-8 font-medium text-gray-800 ">
        {NavItems.map((item, index) => (
          <li className="cursor-pointer hover:border-b-2" key={index}>
            {item}
          </li>
        ))}
      </ul>

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
  );
};

export default Navbar;
