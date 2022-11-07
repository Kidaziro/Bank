import { clients } from "../constants"
import styles from "../style"



export const Client = () => 
   (
    <section className={`${styles.flexCenter} my-4`}>
<div className={`${styles.flexCenter} flex-wrap w-full mt-0`}>
{clients.map ((clients) =>(
  <div key={clients.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`} >
    <img src={clients.logo} alt="clients" className='sm:w-[192px] w-[100px] object-contain hover:filter hover:invert mt-2' />
     </div>
))

}
</div>
    </section >
  )

