import React from 'react';
import { TiSocialFacebook, TiSocialTumbler, TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import {motion} from 'framer-motion';
const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-primary to-primaryDark pt-12 h-auto pb-10'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 place-items-center place-items-top gap-8'>
          {/* Brand Title */}
          <motion.div
           initial={{ opacity: 0, y: 100 }}   // Starting state of the animation
           animate={{ opacity: 1, y: 0 }}      // Final state of the animation
           transition={{
           type: 'spring',                   // Animation type (spring-like movement)
           stiffness: 100,                   // How tight the spring is (higher = faster)
           damping: 10,                      // How bouncy the movement is (lower = more bounce)
           delay: 1.2,                       // Delay before the animation starts (in seconds)
            }}
          >
            <h1 className='text-3xl font-bold uppercase text-white'>Coders Cafe</h1>
          </motion.div>

          {/* About Us Section */}
          <motion.div
           initial={{ opacity: 0, y: 100 }}   // Starting state of the animation
           animate={{ opacity: 1, y: 0 }}      // Final state of the animation
           transition={{
           type: 'spring',                   // Animation type (spring-like movement)
           stiffness: 100,                   // How tight the spring is (higher = faster)
           damping: 10,                      // How bouncy the movement is (lower = more bounce)
           delay: 1.2,                       // Delay before the animation starts (in seconds)
            }}
          >
            <h2 className='text-2xl font-bold text-white text-center mb-4'>About Us</h2>
            <p className='text-gray-300 leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.ndis maiores officiis quos iure veniam minima accusantium?
            </p>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
           initial={{ opacity: 0, y: 100 }}   // Starting state of the animation
           animate={{ opacity: 1, y: 0 }}      // Final state of the animation
           transition={{
           type: 'spring',                   // Animation type (spring-like movement)
           stiffness: 100,                   // How tight the spring is (higher = faster)
           damping: 10,                      // How bouncy the movement is (lower = more bounce)
           delay: 1.2,                       // Delay before the animation starts (in seconds)
            }}
          >
            <h2 className='text-3xl font-bold text-white mb-4'>Follow Us</h2>
            <div className='flex space-x-4'>
              <TiSocialFacebook className='text-3xl text-white hover:text-gray-300 transition duration-200' />
              <TiSocialTumbler className='text-3xl text-white hover:text-gray-300 transition duration-200' />
              <TiSocialTwitter className='text-3xl text-white hover:text-gray-300 transition duration-200' />
              <SlSocialInstagram className='text-3xl text-white hover:text-gray-300 transition duration-200' />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
