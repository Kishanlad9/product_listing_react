import React from "react";

const NavLink = ({ title }) => {
  return (
    <>
      <a
        class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
        href="/"
      >
        {title}
      </a>
    </>
  );
};

export default NavLink;
