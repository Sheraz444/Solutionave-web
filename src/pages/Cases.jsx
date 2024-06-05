import React from 'react'
import { useEffect } from 'react'
import frame1 from '../assets/images/Frame1.webp'
import frame2 from '../assets/images/Frame2.webp'
import frame3 from '../assets/images/Frame3.webp'
import frame4 from '../assets/images/frame4.webp'
import frame5 from '../assets/images/Frame5.webp'
import frame6 from '../assets/images/Frame6.webp'
import Navbrr from '../Components/Navbrr'
import ContactForm from '../Components/ContactForm'
import Footter from '../Components/Footter'
import '../pages/Cases.css'
import Projects from '../Components/Projects'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Cases = () => {
  useEffect(()=>{
    Aos.init({duration: "2600"})
      }, []);
  return (
    <>
    
      <Navbrr />
      <Projects />
    <div className="container " style={{marginTop: "140px"}}>
    <div className="row logos" data-aos="zoom-in">
        <div className="col-md-4">
            <img src={frame1} alt="" />
            <img src={frame2} alt="" />
        </div>
        <div className="col-md-4">
            <img src={frame3} alt="" />
            <img src={frame4} alt="" />
        </div>
        <div className="col-md-4">
            <img src={frame5} alt="" />
            <img src={frame6} alt="" />
        </div>
    </div>
</div>
<section id= '1'>
<ContactForm/>
</section>
<Footter/>

    </>
  )
}

export default Cases