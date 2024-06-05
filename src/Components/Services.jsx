import React from 'react'
import FlipCards from '../Components/FlipCards';
import LanguageIcon from '@mui/icons-material/Language';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import ComputerIcon from '@mui/icons-material/Computer';
import ConstructionIcon from '@mui/icons-material/Construction';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import DatasetIcon from '@mui/icons-material/Dataset';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import { Link } from 'gatsby';

const Services = () => {
  return (
    <>
     <div className="container-md" style={{ backgroundColor: "rgb(241, 244, 247)", maxWidth: "1300px", paddingTop: "50px", marginTop: "90px", paddingBottom: "30px" }}>
                    <div className="row  ">
                    <div className="col-md-4  " data-aos="zoom-in" >
                        <div style={{ textAlign: "left", width: "94%" }}>
                            <h1>APP DEVELOPMENT</h1>
                            <p>Transform your ideas into reality with our comprehensive web and mobile app development services. Our expert team crafts user-friendly, high-performance solutions tailored to your business needs.</p>
                            <Link style={{textDecoration: 'none'}} to='/FormPage' >  <span style={{ color: "rgb(214, 8, 32)", fontWeight: "bold" }}>Contact Us</span> </Link>
                        </div>
                    </div>
                        <div className="col-md-4 mt-1  ">
                            <FlipCards frontTitle={"Web App Development "} backData={['Python Fast API', 'Type Script', "Mern", "Mean", 'Python', 'Nest', 'next', 'MY SQL']} logo={<LanguageIcon />} />
                        </div>
                        <div className="col-md-4 mt-1  ">
                        <FlipCards frontTitle={"MObile App Development "} backData={['Native Apps (swift, Kotlin, Java)','React Native',  "Flutter" ]} logo={<MobileScreenShareIcon />} />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-md-4 self-align-center  mt-2 ">
                    <FlipCards frontTitle={"UX/UI DESIGNING "} backData={['Figma', 'Adobe']} logo={<ComputerIcon />} />    
                    </div>
                    </div>
                </div>


                <div className="container-md" style={{ backgroundColor: "rgb(241, 244, 247)", maxWidth: "1300px", paddingTop: "50px", marginTop: "90px", paddingBottom: "30px" }}>
                    <div className="row  ">
                    <div className="col-md-4  "  data-aos="zoom-in">
                        <div style={{ textAlign: "left", width: "94%" }}>
                            <h1>DATA DEVELOPMENT</h1>
                            <p>Unlock the power of data with our specialized content data development services. We help businesses transform raw data into actionable insights, driving smarter decisions and enhanced performance.</p>
                           <Link style={{textDecoration: 'none'}} to='/FormPage' > <span style={{ color: "rgb(214, 8, 32)", fontWeight: "bold" }}>Contact Us</span> </Link>
                        </div>
                    </div>
                    <div className="col-md-4 mt-1  ">
                            <FlipCards frontTitle={"Data Extraction "} backData={['Scrapy', 'Selenium', "Requests", "Rotating Promises"]} logo={<ConstructionIcon />} />
                        </div>
                        <div className="col-md-4 mt-1  ">
                        <FlipCards frontTitle={"Data Pipelines"} backData={['AWS','Azure',  "Data Factory", 'Lambda' ]} logo={<DataSaverOffIcon />} />
                        </div>
                    </div>
                    <div className="row justify-content-end">
                    <div className="col-md-4 mt-1  ">
                            <FlipCards frontTitle={"Data Management"} backData={['Snowflake', 'Mongo DB', "My SQL", "Postgres", 'Oracle']} logo={<DatasetIcon />} />
                        </div>
                        <div className="col-md-4 mt-1  ">
                        <FlipCards frontTitle={"Data Warehousing"} backData={['Wearhousing','Redis Aws',  "Snowflake", 'Lambda' ]} logo={<WarehouseOutlinedIcon />} />
                        </div>
                    </div>
                    <div className="row justify-content-end">
                    <div className="col-md-4 mt-1  ">
                            <FlipCards frontTitle={"Data Mining"} backData={['My SQL', 'Weka', "Python"]} logo={<PrecisionManufacturingOutlinedIcon />} />
                        </div>
                        <div className="col-md-4 mt-1  ">
                        <FlipCards frontTitle={"AI, ML, DL"} backData={['Python','Pandas',  "Sklearn", 'ML', 'DL' ]} logo={<PrecisionManufacturingOutlinedIcon />} />
                        </div>
                    </div>
                  
                </div>
    
    
    
    </>
  )
}

export default Services