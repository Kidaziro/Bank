import React from 'react'


export const Button = ({styles}) => {
  return (
    <button className={` rounded-xl animate-pulse hover:animate-none
    py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`} 
    type='button'>
    Get started
    </button>
  )
}
