import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"
import styles from "../style"


export const Footer = () => 
   (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>

          <div className="flex-1 flex flex-col justify-start mb-10  ">
            <img src={logo} alt="logo" className="w-[266px] h-[72px] object-contain  " />
            <p className={`${styles.paragraph} mt-4 max-w-[310px] `}>
            A new way to make the payments easy, reliable and secure.
            </p>
          </div>
<div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
{footerLinks.map((footerLinks) => (
  <div key={footerLinks.key} className="flex flex-col ss:my-0 my-4 min-w-[150px] ">
    
    <h4 className={`font-poppins font-medium text-[16px] leading-[27px] `}>
    {footerLinks.title}
    </h4>
    <ul className="mt-2">
      {footerLinks.links.map((link,index) => (
        <li key={link.name} className ={`
        ${index !==footerLinks.links.length -1 ? 'mb-2':'mb-0'}
        font-poppins font-semibold text-[16px] ${styles.paragraph} leading-[24px] hover:text-teal-500 cursor-pointer `} >
        {link.name} 
        </li>
      )) }
    </ul>
     </div>
)
) }
</div>

        </div>
<div className={` w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-slate-800`}>
  <p className="">Copyright Ⓒ 2022 HooBank. All Rights Reserved.</p>

      <div className="flex flex-row md:mt-0 mt-6">
        
          {socialMedia.map((socialMedia , index)=> (
            <img src={socialMedia.icon} key={socialMedia.id} alt={index}  className=
            {`object-contain mt-4 w-[21px] h-[21px] cursor-pointer hover:text-teal-500 
            ${index !==socialMedia.length -1 ? "mr-6":"mr-0"} filter blur-[0.9px] hover:filter-none`} />
            )) }

       </div>
            </div>

    </section>
  )

