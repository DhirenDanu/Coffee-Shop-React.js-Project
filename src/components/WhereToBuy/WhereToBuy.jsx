import React from 'react'
import WorldMap from '../../assets/world-map.png'
import {motion} from "framer-motion";

const WhereToBuy = () => {
  return (
    <div className='container my-36 ' >
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center ' > 
        {/* form Section */}
        <motion.div 
        initial={{ opacity: 0, y:100 }}  
        whileInView={{ opacity: 1, y:0}}      
        transition={{                    
        delay: 0.5,}}
        className='grid grid-cols-1 place-items-center space-y-8' >
            <h1 className='text-4xl font-bold text-primary font-serif md:ml-20 '  >
                Buy our products from anywhere
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-4' > 
                <input text='text' placeholder='Name' className='input-style w-full lg:w-[150px] ' ></input>
                <input text='email' placeholder='Email' className='input-style w-full lg:w-[150px] ' ></input>
                <input text='text' placeholder='Country Name' className='input-style w-full lg:w-[150px] ' ></input>
                <input text='text' placeholder='zipcode' className='input-style w-full lg:w-[150px] ' ></input>
                
            </div>
            <motion.button 
            initial={{ opacity: 0, y:50 }}  
            whileInView={{ opacity: 1, y:0}}      
            transition={{                    
            delay: 0.2,}}
             className=' primary-btn' >Order Now</motion.button>
        </motion.div>
        {/* World Map Image */}
        <motion.div  
         initial={{ opacity: 0, scale:0 }}  
         whileInView={{ opacity: 1, scale:1 }}      
         transition={{
         type: 'spring',                  
         stiffness: 100,                   
         damping: 10,                     
         delay: 0.5,                       
          }}
        className=' col-span-2' >
            <img 
           
            src={WorldMap} alt=' ' className='w-full sm:w-[500px] mx-auto '></img> 
        </motion.div>
        </div>
    </div>
  )
}

export default WhereToBuy
