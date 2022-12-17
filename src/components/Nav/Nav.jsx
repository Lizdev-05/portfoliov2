import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import CV from '../../assets/images/resume.pdf'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const menuItems = [
  { name: 'Home', path: '/', current: true },
  { name: 'About', path: '/about', current: false },
  { name: 'Projects', path: '/projects', current: false },
  { name: 'Contact', path: '/contact', current: false },
  { name: 'Blog', path: '/blog', current: false },
  { name: 'Testimonials', path: '/testimonials', current: false },
];

const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [status, setStatus] = useState(true);

  const changeCurrentStatus = (name) => {
    for (let i = 0; i < menuItems.length; i += 1) {
      if (menuItems[i].name === name) {
        menuItems[i].current = true;
      } else {
        menuItems[i].current = false;
      }
    }
    setStatus(!status);
    setMobileMenu(false);
  };

  return (
    <header
      className={`flex flex-col z-10  bg-primaryColor px-8 py-7 ${mobileMenu ? 'h-screen' : 'h-fit'} fixed top-0 w-full shadow-xl md:flex-row md:justify-between md:px-20 md:h-fit`}
    >
      <a href="/" className="text-xl">
        <span className="text-secondaryColor">Li</span>
        <span>z</span>
        <span className="text-secondaryColor">dev</span>
      </a>
      <nav>
        <div className="text-secondaryColor md:hidden mobile-btns">
          <button
            type="button"
            className={classNames(!mobileMenu ? 'block' : 'hidden')}
            onClick={() => setMobileMenu(true)}
          >
            <MenuIcon className="h-8 mr-2" />
          </button>
          <button type="button" className={classNames(mobileMenu ? 'block' : 'hidden')} onClick={() => setMobileMenu(false)}>
            <XIcon className="h-8 mr-2" />
          </button>
        </div>
        <div className={classNames(mobileMenu ? 'block' : 'hidden', 'md:block')}>
          <ul className="flex flex-col gap-8 items-center mt-24 md:flex-row md:mt-1">
            {
              menuItems.map((item) => (
                <li key={item.name}>
                  <Link to={item.path}>
                    <a
                      onClick={() => changeCurrentStatus(item.name)}
                      href={item.path}
                      className={classNames(
                        item.current
                          ? 'border-b-2 border-secondaryColor text-secondaryColor'
                          : 'text-skyColor',
                        'pb-1 text-lg hover:text-secondaryColor',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                    </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
      <a href={CV} download className={`self-center ${mobileMenu ? 'block' : 'hidden'} md:block btn:hover btn-primary`}>
      <button
          onClick={() => setMobileMenu(false)}
          type="button"
          className={`border-2 border-secondaryColor mt-24 rounded px-4 py-1 w-32 
         text-secondaryColor hover:text-skyColor hover:border-skyColor md:mt-0`}
        >
          Resume
        </button>
      </a>
    </header>
  );
};

export default Nav