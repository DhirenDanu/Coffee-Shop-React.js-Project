import React from 'react'
import bannerImg from'../../assets/coffee-cover.jpg'
import AppStoreImg from'../../assets/website/app_store.png'
import PlayStoreImg from '../../assets/website/play_store.png'
import {motion} from 'framer-motion'
const bannerStyle={
    backgroundImage:`url(${bannerImg})`,
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    height:"100%",
    width:"100%"

}
const Banner = () => {
  return (
    <div className='container my-11 mb-32' >
      <div style={bannerStyle} className='sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl ' >
        <div>
            <div className='space-y-6 max-w-xl mx-auto ' >
                <motion.h1 
                initial={{ opacity: 0, y: 100 }}   // Starting state of the animation
                animate={{ opacity: 1, y: 0 }}      // Final state of the animation
                transition={{
                type: 'spring',                   // Animation type (spring-like movement)
                stiffness: 100,                   // How tight the spring is (higher = faster)
                damping: 10,                      // How bouncy the movement is (lower = more bounce)
                delay: 1,                       // Delay before the animation starts (in seconds)
                 }}className=' text -2xl text-center sm:text-4xl font-semibold' >Download the app</motion.h1>
                <motion.p
                initial={{ opacity: 0, y: 100 }}   // Starting state of the animation
                animate={{ opacity: 1, y: 0 }}      // Final state of the animation
                transition={{
                type: 'spring',                   // Animation type (spring-like movement)
                stiffness: 100,                   // How tight the spring is (higher = faster)
                damping: 10,                      // How bouncy the movement is (lower = more bounce)
                delay: 1,                       // Delay before the animation starts (in seconds)
                 }}
                className='text-center sm:px-20 ' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima fugiat architecto vitae laudantium praesentium numquam neque impedit a adipisci exercitationem hic sint fuga corrupti quo asperiores, suscipit provident deserunt nam?</motion.p>
                 {/* Images */}
                 <motion.div
                 initial={{ opacity: 0, scale:0 }}  
                 whileInView={{ opacity: 1, scale:1 }}      
                 transition={{
                 type: 'spring',                  
                 stiffness: 100,                   
                 damping: 10,                     
                 delay: 1.5,}}
                 className='flex justify-center items-center gap-4 ' >
                    <a  href="#" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                        <img src={AppStoreImg} alt=''></img>
                    </a>
                    <a  href="#" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                        <img src={PlayStoreImg} alt=''></img>
                    </a>


                 </motion.div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
