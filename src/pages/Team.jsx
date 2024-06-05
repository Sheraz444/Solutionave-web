import React, {useEffect} from 'react'
import Navbrr from '../Components/Navbrr'
import Marquee from 'react-fast-marquee'
import team1 from '../assets/images/team1.webp'
import team2 from '../assets/images/team2.webp'
import team3 from '../assets/images/team3.webp'
import team4 from '../assets/images/team4.webp'
import team5 from '../assets/images/team5.webp'
import team6 from '../assets/images/team6.webp'
import TeamCard from '../Components/TeamCard'
import Footter from '../Components/Footter'
import Aos from 'aos';
import 'aos/dist/aos.css';


const Team = () => {

    useEffect(()=>{
        Aos.init({duration: "2600"})
          }, []);

    return (
        <>
            <Navbrr />
            <div className="container">
                <div className="row">
                    <div className="col-md-8 text mb-5" data-aos="zoom-in">
                        <h1>SOLUTIONAVE IS A PEOPLE – CENTRIC COMPANY</h1>
                    </div>
                    <div className="col-md-8 text mt-5 mb-5" data-aos="zoom-in">
                        <p>Our team is our source of value. We are a dedicated and experienced squad of professionals in various fields. We appreciate each other’s expertise, build strong partnership relations, and care deeply about our work.</p>
                    </div>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="row mt-5 mb-5">
                        <div className="col-md-4" data-aos="zoom-in">
                            <h1>TOP MANAGERS</h1>
                        </div>
                    </div>

                    <div className="row mb-5 mt-3" >
                        <div className="col" data-aos="zoom-in" >
                            <Marquee autoFill pauseOnHover speed={20} >
                                <TeamCard BgImg={team1} />
                                <TeamCard BgImg={team2} />
                                <TeamCard BgImg={team3} />
                            </Marquee>
                        </div>
                    </div>
                </div>

                {/* ================================== Sales Department ====================== */}



                <div className="container">
                    <div className="row mt-5 mb-5">
                        <div className="col-md-8 mt-5" data-aos="zoom-in">
                            <h1>Sales Team</h1></div>
                    </div>
                    <div className="row mb-5" >
                        <div className="col" data-aos="zoom-in" >
                            <Marquee autoFill pauseOnHover direction='right' speed={20}>
                                <TeamCard BgImg={team4} />
                                <TeamCard BgImg={team5} />
                                <TeamCard BgImg={team6} />
                            </Marquee>
                        </div>
                    </div>
                </div>
            </section>



            {/* ======================================= FOOTTER =================================== */}

            <section>
                <Footter />
            </section>


        </>
    )
}

export default Team