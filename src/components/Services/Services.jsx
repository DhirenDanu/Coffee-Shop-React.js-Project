import React from 'react'
import {motion} from "framer-motion";
import coffee1 from '../../assets/coffee/coffee1.png'
import coffee3 from '../../assets/coffee/coffee3.png'

const servicesData=[
    {
        id: 1,
        image: coffee1, // Correct case
        title: "Black Coffee",
        subtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam perspiciatis blanditiis corrupti,'
      },
      {
        id: 2,
        image: coffee3, // Correct case
        title: "Hot Coffee",
         subtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam perspiciatis blanditiis corrupti,'
      },
      {
        id: 3,
        image: coffee3, // Correct case
        title: "Cold Coffee",
         subtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam perspiciatis blanditiis corrupti,'
      },
]


const Services = () => {
  return (
    <div className=' container my-16 space-y-4' >
      {/* HeaderSection */}
      <div className='text-center max-w-lg mx-auto space-y-2'>
        <motion.h1
         initial={{ opacity: 0, y:100 }}  
         whileInView={{ opacity: 1, y:0}}      
         transition={{
         type: 'spring',                  
         stiffness: 100,                   
         damping: 10,                     
         delay: 0.5,}}
        className=' text-3xl font-bold text-lightGray' >
          Fresh And <span className='text-primary '> Tasty Coffee</span>
        </motion.h1>
        <motion.h1 
         initial={{ opacity: 0, scale:0 }}  
         whileInView={{ opacity: 1, scale:1}}      
         transition={{
         type: 'spring',                  
         stiffness: 100,                   
         damping: 10,                     
         delay: 0.5,}}
        className=' text-sm opacity-50 ' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos numquam eligendi totam consequuntur animi voluptatem officiis eveniet voluptatibus cumque libero in odit, iste nam suscipit placeat et assumenda illum quod?</motion.h1>
      </div>
      {/* CardSection */}
      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8' >
        {
            servicesData.map((services)=>
           <motion.div
            initial={{ opacity: 0, scale:0 }}  
            whileInView={{ opacity: 1, scale:1 }}      
            transition={{
            type: 'spring',                  
            stiffness: 100,                   
            damping: 10,                     
            delay: 0.5,                       
             }}
                key={services.id} className='text-center p-4 space-y-6 '> 
                  <div > 
                     <img src={services.image} alt='' className=' img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer '></img>
                     </div>
                    <h1 className='text-2xl font-bold text-primary ' >{services.title}</h1> 
                    <h3>{services.subtitle}</h3>
                </motion.div>
                
                   
               
        )
        }
      </div>
    </div>
  )
}

export default Services
