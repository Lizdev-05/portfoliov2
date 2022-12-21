
import React from 'react';
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Footer = () => (

  <>
    <footer
      className="flex flex-col items-center my-8"
    >
      <button
        type="button"
        onClick={goToTop}
        aria-label="Save"
        className="btn btn-primary text-white rounded
        px-4 my-10 py-2 font-medium hover:bg-secondaryColor hover:text-primaryColor"
      >
        <BsFillArrowUpCircleFill  className='text-md'/>
      </button>
      <p className="text-md">
        Copyright © 2022
        <a href="https://github.com/Lizdev-05"> Elizabeth Oyin Ojesanmi </a>
        All Rights Reserved
      </p>
    </footer>
  </>
);

export default Footer;