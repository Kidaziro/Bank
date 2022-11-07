import styles from '../style'
import {discount,robot} from '../assets'
import React from 'react'
import { Getstarted } from './Getstarted'


export const Hero = () => (
  
    <section  id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} 
      flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt="discount" className='w-[32px] h-[32px] ' />
       <p className={`${styles.paragraph} ml-2 text-sm lg:text-md md:text-md`}>

        <span className='text-white'>20% </span>
        <span className='text-gray-500'> Discount For {" "} </span>
        <span className='text-white'>1 Month</span>
        <span className='text-gray-500'> Account </span>
       
       </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
              <h1 className='flex-1 font-poppins font-semibold ss:text-[70px] text-[50px] 
              ss:leading-[100px] '> The Next <br className='sm:block'/> {"    "}
              <span className='text-gradient'> Generation </span> <br className='sm:block hidden'/>
              </h1>
              <div className='lg:flex sm:flex md:flex hidden md:mr-4 mr-0'>
                <Getstarted />
              </div>
        </div>
              <h1 className='font-poppins font-semibold ss:text-[60px] text-[45px] w-full'>
              Payment Method.
              </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
          </p>
      </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={robot} alt="robot" className='w-[100%] h-[100%]  relative 
          z-[5] '/>
          <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient  animate-pulse' />
          <div className='absolute z-[1] w-[40%] h-[80%] bottom-40 white__gradient rounded-full animate-pulse' />
          <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient ' />
          <div>
            
          </div>
        </div>

        <div className={`sm:hidden ${styles.flexCenter}`}>
          <Getstarted/>
        </div>


    </section>  
)
