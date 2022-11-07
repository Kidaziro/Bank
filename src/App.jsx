import './App.css'
import styles from './style'
import {    
   Billing ,
    Business ,
    Button ,
    CardDeal ,
    Client ,
    CTA ,
    FeadBackcard ,
    Footer ,
    Getstarted ,
    Stats ,
    Navbar ,
    Testimonials ,
    Hero    ,} from './components'
  
function App() {
  

  return (
    <div className="bg-primary text-white">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <Navbar/>


        </div>
      </div>

    <div className={`bg-primary ${styles.flexStart}`}>
           <div className={`${styles.boxWidth}`}>
           <Hero/>
           </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
           <div className={`${styles.boxWidth}`}>
           <Stats/>
           <Business/>
           <Billing/>
           <CardDeal/>
           <Testimonials/>  
           <Client/> 
            <CTA/>
          <Footer/>
           </div>
    </div>

    </div>
  )
}

export default App
