import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import './page.css'
import companyTop from '../assets/images/companyTop.webp'
import business from '../assets/images/business.webp'
import work from '../assets/images/work.webp'
import frame1 from '../assets/images/Frame1.webp'
import frame2 from '../assets/images/Frame2.webp'
import frame3 from '../assets/images/Frame3.webp'
import frame4 from '../assets/images/frame4.webp'
import frame5 from '../assets/images/Frame5.webp'
import frame6 from '../assets/images/Frame6.webp'
import Navbrr from '../Components/Navbrr'
import Footter from '../Components/Footter'
import Services from '../Components/Services'
import Aos from 'aos';
import 'aos/dist/aos.css';


const AboutCompany = () => {

    useEffect(()=>{
        Aos.init({duration: "2600"})
          }, []);

    return (
        <>
            <Navbrr />
            <div className="container ">
                <div className="row  heading">
                    <div className="col-md-7 heading" data-aos="zoom-in">
                        <h1>SOLUTIONAVE IS A PAINLESS INNOVATIONS PROVIDER</h1>
                    </div>
                    <div className="col-md-9" data-aos="zoom-in">
                        <div className="text">
                            <p>We are an international hardware & software development company that is focused on diving deep into each project and creating custom IT solutions to help businesses be in time for tomorrow</p>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col mt-5 pic1" data-aos="zoom-in">
                            <img src={companyTop} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-5 mt-3" data-aos="zoom-in">
                            <h2>HARDWARE & SOFTWARE DEVELOPMENT COMPANY</h2>
                            <div>
                                <button type="button" class="btn btn-secondary">Contact Via whatsApp</button>
                            </div>
                        </div>
                        <div className="col-md-7 mt-3" data-aos="zoom-in">
                            <p style={{ fontSize: "18px" }}>We create the Internet of Things, the Industrial Internet of Things, Embedded systems, PCB boards, mobile applications, websites and web solutions, new products, CRM & ERP systems, and custom enterprise solutions. LANARS was established in 2016, has headquarters in Oslo (Norway), Wrocław (Poland), and Tbilisi (Georgia), and is open to the world – we work with clients from different countries</p>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container  " style={{ backgroundColor: "rgb(241, 244, 247)" }}>
                    <div className="row">
                        <div className="col-md-6 " style={{ marginTop: "200px" }} data-aos="zoom-in">
                            <h1>ABOUT OUR BUSINESS</h1>
                            <h2>OUR MISSION</h2>
                            <p>SOLUTIONAVE is on a mission to make drastic innovations simple and effortless for any business.</p>
                            <h2>Our approach</h2>
                            <p>We do believe that information technologies are the property of all mankind, thus they should be understandable and available to everyone, IT projects should be painless and affordable for any venture. That is why we build our business based on the principles of honesty, transparency, and excellent client service — we educate our clients if necessary and ensure their minimum involvement in the project without wasting their time to make digitalization easy and painless.</p>
                            <p>Competition in the market allows our team to spread this approach, and make painless digital transformation the norm for any company worldwide. Join us, and let’s make the drastic innovations effortless</p>
                        </div>
                        <div className="col-md-6 business" data-aos="zoom-in">
                            <img src={business} alt="" />
                        </div>
                    </div>
                </div>

            </section>


            <section>
                <div className="container" style={{ marginTop: "150px" }}>
                    <div className="row justify-content-end">
                        <div className="col-md-8" data-aos="zoom-in">
                            <h1>SOLUTIONAVE IS BUILT UPON VALUES WE ALL SHARE AND ARE READY TO STAND FOR</h1>
                        </div>
                        <div className="col-md-8 mt-5 mb-5 mx-2" data-aos="zoom-in">
                            <p>They bring us together well beyond our current products and technologies</p>
                        </div>
                        <div className="col-md-4" style={{ borderBottom: "1px solid grey" }} data-aos="zoom-in" >
                            <h3>We strive to Leadership</h3>
                            <p style={{ marginTop: "50px", marginBottom: "50px" }}>We’re incredibly ambitious — we left our comfort zone when we started this journey. Now our attitude in business is to be number one</p>
                        </div>
                        <div className="col-md-4" style={{ borderBottom: "1px solid grey" }} data-aos="zoom-in" >
                            <h3>We are the Team</h3>
                            <p style={{ marginTop: "50px", marginBottom: "50px" }}>Each of us is a unique instrument, but together we’re an orchestra. As a team, we put our hearts and souls into the work we do.</p>
                        </div>
                    </div>
                    <div className="row justify-content-end mt-5">
                        <div className="col-md-4" style={{ borderBottom: "1px solid grey" }} data-aos="zoom-in">
                            <h3>We are oriented towards Profit</h3>
                            <p style={{ marginTop: "50px", marginBottom: "50px" }}>We get hyped up by implementing projects that are the most widely used, loved, and profitable. It keeps us going.</p>
                        </div>
                        <div className="col-md-4" style={{ borderBottom: "1px solid grey" }} data-aos="zoom-in">
                            <h3>We are driven by Competition</h3>
                            <p style={{ marginTop: "50px", marginBottom: "50px" }}>Competition means performing more than 100% and always staying on the route towards improvement</p>
                        </div>
                    </div>
                    <div className="row justify-content-end mt-5">
                        <div className="col-md-4" style={{ borderBottom: "1px solid grey" }} data-aos="zoom-in">
                            <h3>We provide Reliability</h3>
                            <p style={{ marginTop: "50px", marginBottom: "50px" }}>When it comes to business, we ensure the result and cutting-edge innovations.</p>
                        </div>
                        <div className="col-md-4" style={{ borderBottom: "1px solid grey" }} data-aos="zoom-in">
                            <h3>We stand for Honesty</h3>
                            <p style={{ marginTop: "50px", marginBottom: "50px" }}>We seek truth and speak openly about demand, money, and technologies</p>
                        </div>
                    </div>
                    <div className="row justify-content-end mt-5">
                        <div className="col-md-8" data-aos="zoom-in">
                            <h3>Corporate social responsibility policy</h3>
                            <p style={{ marginTop: "50px", marginBottom: "50px" }}>We follow our CSR policy in 3 key directions: Inclusive employment; Raising a new generation; Technologies without borders</p>
                        </div>
                        <div className="col-md-8" style={{ textAlign: "left" }} data-aos="zoom-in">
                            <Link to={""} style={{ textDecoration: "none" }}><h5 style={{ color: "rgb(237, 85, 23)" }}>Dowload report</h5></Link>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container" style={{ marginTop: "120px", maxWidth: "1280px" }}>
                    <div className="row">
                        <div className="col-md-6" style={{ marginTop: "200px", textAlign: "left" }} data-aos="zoom-in">
                            <h1>OUR WORK GETS RECOGNIZED</h1>
                            <p style={{ marginTop: "40px", fontSize: "19px" }}>We are proud to have been recognized for our commitment to providing businesses with painless innovations. Over the years, our company is delivering the best quality of hardware & software solutions aligned with industry standards.</p>
                            <p style={{ marginTop: "40px", fontSize: "19px" }}>Our awards include Top IoT Developer and Top App Developer from Clutch, Top IoT Development Company by Goodfirms, and others. We are continuously striving to provide exceptional customer service and best solutions for our customers, and these marks of recognition prove our dedication. We are listed in:</p>
                            <ul style={{ marginTop: "40px", fontSize: "20px" }}>
                                <li style={{ marginTop: "20px" }}>Top IoT Development companies on Goodfirms (see the reviews from Norway, Sweden, Finland, Denmark, Switzerland, and other countries);</li>
                                <li style={{ marginTop: "20px" }}>Top Internet of Things companies on Clutch (worldwide)</li>
                                <li style={{ marginTop: "20px" }}>Top-100 Global IoT Developers Ranking on The Manifest.</li>
                            </ul>
                            <div className="whatappbtn">
                                <a href="">Contact via WhatsApp</a>
                            </div>
                        </div>
                        <div className="col-md-6" style={{ padding: "10px", height: "130vh" }} data-aos="zoom-in">
                            <img style={{ width: "100%", height: "100%" }} src={work} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== Flip cards ============================== */}


            <section>
                <Services />
            </section>


            <div className="container " style={{ marginTop: "140px", marginBottom: "100px" }}>
                <div className="row logos" data-aos="zoom-in">
                    <div className="col-md-4" >
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

            {/* =======================footer ================================== */}


            <section>
                <Footter />
            </section>

        </>
    )
}

export default AboutCompany