import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
// import { Link } from 'react-router-dom';
// import { Routes, Route } from 'react-router';
import CV from '../../assets/images/resume.pdf'
import './Nav.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// const menuItems = [
//   { name: 'Home', path: '/', current: true },
//   { name: 'About', path: '#about', current: false },
//   { name: 'Projects', path: '#projects', current: false },
//   { name: 'Contact', path: '#contact', current: false },
//   { name: 'Blog', path: '#blog', current: false },
//   { name: 'Testimonials', path: '#testimonials', current: false },
// ];

const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeNav, setActivenav] = useState('#')
  // const [status, setStatus] = useState(true);

  // const changeCurrentStatus = (name) => {
  //   for (let i = 0; i < menuItems.length; i += 1) {
  //     if (menuItems[i].name === name) {
  //       menuItems[i].current = true;
  //     } else {
  //       menuItems[i].current = false;
  //     }
  //   }
  //   setStatus(!status);
  //   setMobileMenu(false);
  // };

  return (
    <nav
    className={`bg flex flex-col z-10 px-8 py-7 ${mobileMenu ? 'h-screen ' : 'h-fit'} fixed top-0 w-full shadow-xl md:flex-row md:justify-between md:px-20 md:h-fit`}
    >

      <a className="text-xl">
        <span className="">Liz</span>
        <span className="text-white">dev</span>
      </a>
      <nav>
        <div className=" md:hidden mobile-btns">
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
            <li><a href="#" onClick={() => setActivenav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a></li>
            <li><a href="#about"  onClick={() => setActivenav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a></li>
            <li><a href="#project"  onClick={() => setActivenav('#project')} className={activeNav === '#project' ? 'active' : ''}>Project</a></li>
            <li><a href="#contact"  onClick={() => setActivenav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a></li>
            <li><a href="#blog"  onClick={() => setActivenav('#blog')} className={activeNav === '#blog' ? 'active' : ''}>Blog</a></li>
            <li><a href="#testimonial"  onClick={() => setActivenav('#testimonial')} className={activeNav === '#testimonial' ? 'active' : ''}>Testimonial</a></li>



            {/* <Routes>
            {
              menuItems.map((item) => (
             
                <Route>
                <li key={item.name}>
                  <Link to={item.path}>
                    <a
                      onClick={() => changeCurrentStatus(item.name)}
                      href={item.path}
                      className={classNames(
                        item.current
                          ? 'border-b-2 border-text-color'
                          : 'text-skyColor',
                        'pb-1 text-lg hover:',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                    </Link>
                </li>
                </Route>
              ))
            }
            </Routes> */}
          </ul>
        </div>
      </nav>
      <a href={CV} download className={`self-center ${mobileMenu ? 'block' : 'hidden'} md:block btn:hover`}>
      <button
          onClick={() => setMobileMenu(false)}
          type="button"
          className={`border-2 mt-24 rounded px-4 py-1 w-32 
          hover:text-skyColor md:mt-0`}
        >
          Resume 
        </button>
      </a>
    </nav>
  );
};

export default Nav