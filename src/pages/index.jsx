import * as React from "react"
import  { useRef, useEffect } from 'react';
import Navbrr from '../Components/Navbrr'
import { Typewriter, useTypewriter } from 'react-simple-typewriter'
import './Homepage.css'
import card1 from '../assets/images/card1.png'
import card2 from '../assets/images/car2.png'
import card3 from '../assets/images/card3.png'
import frame1 from '../assets/images/Frame1.webp'
import frame2 from '../assets/images/Frame2.webp'
import frame3 from '../assets/images/Frame3.webp'
import frame4 from '../assets/images/frame4.webp'
import frame5 from '../assets/images/Frame5.webp'
import frame6 from '../assets/images/Frame6.webp'
import frame20 from '../assets/images/Frame20.webp'
import frame21 from '../assets/images/Frame21.webp'
import frame22 from '../assets/images/Frame22.webp'
import companyAdv from '../assets/images/company-advantages.webp'
import Marquee from "react-fast-marquee";
import Footter from '../Components/Footter'
import TeamCard from '../Components/TeamCard'
import ContactForm from '../Components/ContactForm'
import { Link } from 'gatsby';
import Services from '../Components/Services';
import Aos from 'aos';
import 'aos/dist/aos.css';

const IndexPage = () => {
  useEffect(()=>{
    Aos.init({duration: "2600"})
      }, []);


      const [text] = useTypewriter({

        words: [ 'WEB APP ', 'UX/UI', 'MOBILE APP', 'IOS/ANDROID',  'SOFTWARE',  'DATA'],
        loop: {},
    })

  return (
    <>

<Navbrr />

<div className="container">
    <div className="row">
        <div className="col-md-8 text" data-aos="zoom-in">
            <h1>WE ARE</h1>
            <h1 style={{ color: "rgb(214, 8, 32)" }}> '{text}</h1>
            <h1>DEVELOPERS</h1>

        </div>
    </div>
</div>
<div className="container">
    <div className="row">
        <div className="col-md-8" data-aos="zoom-in">
            <p style={{ fontSize: "18px" }}>We are SolutionAve — an international hardware & software development company headquartered in Islamabad, Pakistan.The IT services we provide are dedicated to helping businesses today be in time for tomorrow.</p>
            <br /><br />
            <Link style={{textDecoration: 'none'}} to='/AboutCompany' >        <span style={{ color: "rgb(214, 8, 32)", fontWeight: "bold" }}>About Us</span> </Link>
        </div>
    </div>
</div>

{/* ============= Selected Cases============== */}

<section id='cases'>
    <div className="container">
        <div className="row">
            <div className="col-md-8 mt-5" data-aos="zoom-in">
                <br />
                <h1 style={{ fontWeight: "bold" }}>SELECTED CASES</h1>
            </div>
        </div>
    </div>
    <br /><br />

    <div className="container">
        <div className="row">
            <div className="col" >
                <Marquee autoFill pauseOnHover style={{ zIndex: "" }}>
                    <TeamCard BgImg={card1} />
                    <TeamCard BgImg={card2} />
                    <TeamCard BgImg={card3} />
                </Marquee>
            </div>
        </div>
    </div>
    <br />
    <div className="container mb-5">
        <div className="row">
        <Link style={{textDecoration: 'none'}} to='/Cases' > 
            <div className="col"> <span style={{ color: "rgb(214, 8, 32)", fontWeight: "bold" }}>More Cases</span></div>
        </Link>
        </div>
    </div>
</section>


<section id='services'>
    <div className="container " style={{marginTop: "130px"}}>
        <div className="row justify-content-center">
            <div className="col-md-8 experties" data-aos="zoom-in">
                <h1 style={{ marginBottom: "40px", textAlign: "center" }}>AREAS OF OUR EXPERTISE</h1>
                
            </div>
        </div>  
    </div>
</section>



{/* ========================================== Boxess====================================== */}

<section>

    <Services />

</section>

{/* ===================================OTHERSECTION=========================== */}

<section>
    <div className="container" style={{ marginTop: "120px", marginBottom: "60px" }} >
        <div className="row">
            <div className="col-md-4" data-aos="zoom-in"><h3 style={{ textAlign: "left" }}>SOLUTIONAVE IS A PAINLESS INNOVATIONS PROVIDER</h3></div>
            <div className="col-md-8" data-aos="zoom-in" style={{ textAlign: "left" }}>
                <p style={{ fontSize: "18px" }}>SOLUTIONAVE is on a mission to make drastic innovations simple and effortless for any type of business. We create this value by ensuring the minimum customer involvement during the project implementation process and applying the most relevant technologies and solid expertise.</p>
            </div>
        </div>
    </div>
</section>


<section>
    <div className="container" style={{ marginTop: "120px", maxWidth: "1280px" }}>
        <div className="row">
            <div className="col-md-6" style={{ marginTop: "200px", textAlign: "left" }} data-aos="zoom-in">
                <h1>WHY CHOOSE SOLUTIONAVE?</h1>
                <p style={{ marginTop: "40px", fontSize: "19px" }}>SOLUTIONAVE as a hardware, mobile, and web development company, is fired up by digital challenges. Autonomous work, a fully immersed approach, and flexibility — leverage our expertise for the benefit of your business.</p>
                <ul style={{ marginTop: "40px", fontSize: "20px" }}>
                    <li style={{ marginTop: "20px" }}>8 years of worldwide experience with a domestic market in the Nordic region;</li>
                    <li style={{ marginTop: "20px" }}>Hardware and software expertise in one team;</li>
                    <li style={{ marginTop: "20px" }}>Full range of cutting-edge technologies.</li>
                </ul>
                <div className="whatappbtn">
                    <a href="">Contact via WhatsApp</a>
                </div>
            </div>
            <div className="col-md-6" style={{ padding: "10px", height: "130vh" }} data-aos="zoom-in">
                <img style={{ width: "100%", height: "100%" }} src={companyAdv} alt="" />
            </div>
        </div>
    </div>
</section>

<div className="container " style={{ marginTop: "140px" }}>
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

<section>
    <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
            <div className="col" data-aos="zoom-in">
                <h1 style={{ marginTop: "50px", marginBottom: "40px" }}>NEWS AND UPDATES</h1>
                <p style={{ fontSize: "19px" }}>Technologies, Case Studies, Jobs… there’s always something!</p>
            </div
            ></div>
    </div>
    <div className="container" style={{ marginTop: "80px" }}>
        <div className="row">
            <div className="col-md-4 carddd" data-aos="zoom-in">
                <div className="picr">
                    <img src={frame20} alt="" />
                </div>
                <span >30.01.2024</span>
                <h4 style={{ marginTop: "20px" }}>10 Next Digital Transformation Trends in 2024</h4>
                <p style={{ marginTop: "20px", fontSize: "19px" }}>Whether it's harnessing the power of AI for intelligent decision-making, integrating IoT to create interconnected ecosystems, or prioritizing sustainability in tech practices, 2024 is the year of continuous innovation and adaptability.</p>
                <span style={{ color: "rgb(237, 85, 23)", fontWeight: "bold" }}>Read More</span>
            </div>
            <div className="col-md-4 carddd" data-aos="zoom-in">
                <div className="picr">
                    <img src={frame21} alt="" />
                </div>
                <span >30.01.2024</span>
                <h4 style={{ marginTop: "20px" }}>10 Next Digital Transformation Trends in 2024</h4>
                <p style={{ marginTop: "20px", fontSize: "19px" }}>Whether it's harnessing the power of AI for intelligent decision-making, integrating IoT to create interconnected ecosystems, or prioritizing sustainability in tech practices, 2024 is the year of continuous innovation and adaptability.</p>
                <span style={{ color: "rgb(237, 85, 23)", fontWeight: "bold" }}>Read More</span>
            </div>
            <div className="col-md-4 carddd" data-aos="zoom-in">
                <div className="picr">
                    <img src={frame22} alt="" />
                </div>
                <span >30.01.2024</span>
                <h4 style={{ marginTop: "20px" }}>10 Next Digital Transformation Trends in 2024</h4>
                <p style={{ marginTop: "20px", fontSize: "19px" }}>Whether it's harnessing the power of AI for intelligent decision-making, integrating IoT to create interconnected ecosystems, or prioritizing sustainability in tech practices, 2024 is the year of continuous innovation and adaptability.</p>
                <span style={{ color: "rgb(237, 85, 23)", fontWeight: "bold" }}>Read More</span>
            </div>
        </div>
    </div>
</section>

{/* =========================================== FORM SECTION ============================ */}

<section id='contact'>
    <ContactForm />
</section>

{/* ======================== FOOTER SECTION ========================================= */}

<section>
    <Footter />
</section>
    
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
