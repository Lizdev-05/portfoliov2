
import React from 'react';

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
        className="bg text-white rounded
    px-4 my-10 py-2 font-medium hover:bg-secondaryColor hover:text-primaryColor"
      >
        <i className="las la-angle-up" />
      </button>
      <p className="text-md">
        Copyright © 2022
        <a href="https://github.com/Lizdev-05" className="text-secondaryColor"> Elizabeth Oyin Ojesanmi </a>
        All Rights Reserved
      </p>
    </footer>
  </>
);

export default Footer;