import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import{motion} from "framer-motion"
const Navbar = ({sidebar,setSidebar}) => {
  return (
    <nav className='absolute top-0 left-0 w-full pt-0 text-white z-50 mt-16'>  
      <div className='container'>
        <motion.div 
         initial={{ opacity: 0, y:-50 }}   
         animate={{ opacity: 1, y: 0 }}      
         transition={{
         type: 'spring',                   
         stiffness: 100,                  
         damping: 10,                      
         delay:0.5, }} 
         className='flex justify-between items-center'
         onClick={()=> setSidebar(!sidebar)}>
           {/* Logo Section */}
           <h1 className='text-2xl font-semibold uppercase'>
             <span className='text-primary'>Coders </span>Cafe 
           </h1>
           {/* Hamburger Menu */}
          
          <div>
            <GiHamburgerMenu className='text-3xl cursor-pointer' />
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
