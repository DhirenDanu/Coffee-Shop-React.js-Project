import React from 'react';
import BgImage from '../../assets/bg-slate.png';
import CoffeeMain from '../../assets/black.png';
import Navbar from '../Navbar/Navbar';
import {motion} from 'framer-motion';
import { TiSocialFacebook ,TiSocialTumbler,TiSocialTwitter} from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const Hero = () => {
     
      const[sidebar,setSidebar]=React.useState(false)
  return (
    <main style={bgImage}>
      <section className='min-h-[750px] w-full overflow-hidden'>
        <div className='container'>
          {/* Navbar Section */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
          
          {/* SideBar Menu Section */}
          {
            sidebar && (
              <motion.div
              initial={{ opacity: 0, x:200 }}  
              animate={{ opacity: 1, x:0}}      
              transition={{
              type: 'spring',                  
              stiffness: 100,                   
              damping: 10,                     
              delay: 0.5,}}
              className=' absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-40 ' >
            <div className=' h-full w-full flex flex-col justify-center  items-center gap-6' >
              {/* Line */}
              <div className=' w-[1px] h-[70px] bg-white' > </div>
               {/* Social Icons */}
              <div className=' h-52  text-white border-[3px] rounded-full p-3 flex flex-col items-center  gap-y-3' >
              <TiSocialFacebook className=' text-3xl'  />
              <TiSocialTumbler className=' text-3xl' />
              <TiSocialTwitter className=' text-3xl'/>
              <SlSocialInstagram className=' text-3xl'/>
              </div>
              <div className=' w-[1px] h-[70px] bg-white' > </div>
            </div>
          </motion.div>
            )
          }
          {/* Hero Section */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]'>

            {/* Text Content Section */}
            <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
            <motion.h1
                initial={{ opacity: 0, y: -100 }}   // Starting state of the animation
                animate={{ opacity: 1, y: 0 }}      // Final state of the animation
                transition={{
                type: 'spring',                   // Animation type (spring-like movement)
                stiffness: 100,                   // How tight the spring is (higher = faster)
                damping: 10,                      // How bouncy the movement is (lower = more bounce)
                delay: 1,                       // Delay before the animation starts (in seconds)
                 }}
                 className='text-7xl font-bold leading-tight ml-14'
                >
                Blvck Tumbler
                </motion.h1>

              <motion.div 
               initial={{ opacity: 0, y: 100 }}   // Starting state of the animation
               animate={{ opacity: 1, y: 0 }}      // Final state of the animation
               transition={{
               type: 'spring',                   // Animation type (spring-like movement)
               stiffness: 100,                   // How tight the spring is (higher = faster)
               damping: 10,                      // How bouncy the movement is (lower = more bounce)
               delay: 1.2,                       // Delay before the animation starts (in seconds)
                }}
              className='relative'>
                <div className='relative z-10 space-y-4'>
                  <h1 className='text-2xl'>Black Lifestyle Lovers,</h1>
                  <h1 className='text-sm opacity-50 leading-loose'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam perspiciatis blanditiis corrupti,
                    illum officiis facilis ipsum saepe adipisci aliquam consequatur aspernatur, delectus voluptatum eveniet
                    laborum molestias vel vero quo.
                  </h1>
                </div>
                <div className='absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25'></div>
              </motion.div>
            </div>

            {/* Hero Image Section */}
            <div className='relative'>
              <motion.img 
              initial={{ opacity: 0, scale:0 }}   // Starting state of the animation
              animate={{ opacity: 1, scale:1 }}      // Final state of the animation
              transition={{
              type: 'spring',                   // Animation type (spring-like movement)
              stiffness: 100,                   // How tight the spring is (higher = faster)
              damping: 10,                      // How bouncy the movement is (lower = more bounce)
              delay: 0.5,                       // Delay before the animation starts (in seconds)
               }}
              src={CoffeeMain} alt='Black Coffee' className='relative z-40 h-[400px] md:h-[600px] img-shadow' />
              {/* Orange Ring Section */}
              <motion.div
               initial={{ opacity: 0, scale:0 }}  
               animate={{ opacity: 1, scale:1 }}      
               transition={{
               type: 'spring',                  
               stiffness: 100,                   
               damping: 10,                     
               delay: 0.5,                       
                }}
              className='h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10'></motion.div>
              {/* Big Text Section */}
              <motion.div
               initial={{ opacity: 0, x:200 }}  
               animate={{ opacity: 1, x:0}}      
               transition={{
               type: 'spring',                  
               stiffness: 100,                   
               damping: 10,                     
               delay: 0.5,}}
              className='absolute -top-20 left-[200px] z-[1]'>
                <h1 className='text-[140px] scale-150 font-bold text-darkGray/50 leading-none'>Blvck Tumbler</h1>
              </motion.div>
            </div>

            {/* 3 Div*/}
            <motion.div 
            initial={{ opacity: 0, y: 100 }}   
            animate={{ opacity: 1, y: 0 }}      
            transition={{
            type: 'spring',                   
            stiffness: 100,                  
            damping: 10,                      
            delay: 1,                     
             }}
            className='relative z-10 space-y-4 text-lightorange'>
              <h1 className='text-2xl text-primary'>Black Coffee</h1>
              <h1  
               
              className='text-sm opacity-50 leading-loose text-lightOrange'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam perspiciatis blanditiis corrupti,
                illum officiis facilis ipsum saepe adipisci aliquam consequatur aspernatur, delectus voluptatum eveniet
                laborum molestias vel vero quo.
              </h1>
              <div className='absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50'></div>
            </motion.div>


          
          </div>
          
        </div>
      </section>
    </main>
  );
};

export default Hero;
