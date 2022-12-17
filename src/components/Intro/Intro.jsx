import { CheckCircleIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profilePicture from '../../assets/images/profile.jpg';

const fields = ['Full Stack web developer', 'Love for clean code', 'Technical Writter', 'Football Lover'];

const Intro = () => (
  <motion.div
    initial={{ x: '-100vw' }}
    animate={{ x: -0 }}
    transition={{ duration: 1 }}
    className="flex flex-col items-center gap-10 md:flex-row md:gap-60"
  >
    <div className="md:order-1">
      <img src={profilePicture} alt="profile" className="h-64 md:h-80 rounded-full" />
    </div>
    <div className="text-skyColor">
      <h5 className="">Hello!</h5>
      <h1 className="text-2xl md:text-5xl">I&apos;m E.O Ojesanmi</h1>
      {
          fields.map((field) => (
            <div key={field} className="flex gap-4 mt-3">
              <CheckCircleIcon className="h-7" />
              <p className="m-px text-base">{field}</p>
            </div>
          ))
        }
        <a href="/contact" className="btn btn-primary btn:hover mt-10 rounded px-6 py-2 w-50
          text-lg font-medium"> 
          Get in Touch
       </a>
      </div>
      </motion.div>
);

export default Intro;