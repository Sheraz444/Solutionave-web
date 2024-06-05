import React from 'react'
import { useState } from 'react'
import '../pages/Cases.css'
import Images from './ProjectData'
import Carousel from 'react-bootstrap/Carousel';

const Projects = () => {

  const [filter, setFilter] = useState('All');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  }

  const filteredImages = filter === 'All' ? Images : Images.filter(image => image.category === filter);

  return (
    <>

      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-10 mt-5" data-aos="zoom-in">
            <h1 style={{color: "rgb(214, 8, 32)"}}>SELECTED CASES</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8 filter-buttons" data-aos="zoom-in">
            {['All', 'web', 'Mobile'].map((filterName) => (
              <button
                key={filterName}
                className={filterName === filter ? 'active' : ''}
                onClick={() => handleFilterChange(filterName)}
              >
                {filterName}
              </button>
            ))}
          </div>
        </div>
        <div className="row" >
          {filteredImages.map((image) => (
            <React.Fragment key={image.id}>
              <div key={image.id} className="col-md-6 mt-5  image-gallery" style={{ backgroundColor: "rgb(241, 244, 247)", padding: "20px" }} data-aos="zoom-in">
                <Carousel data-bs-theme="">
                  <Carousel.Item interval={1000}>
                    <img className=" " src={image.url1} style={{ }} />
                  </Carousel.Item >
                  <Carousel.Item interval={1000}>
                    <img className=" " src={image.url2} alt="" style={{}} />
                  </Carousel.Item>
                  <Carousel.Item interval={1000}>
                    <img className=" " src={image.url3} alt="" style={{}} />
                  </Carousel.Item>
                  <Carousel.Item interval={1000}>
                    <img className=" " src={image.url4} alt="" style={{}} />
                  </Carousel.Item>
                </Carousel>




              </div>
              <div key={image.id} className="col-md-6 mt-5 " style={{ backgroundColor: "rgb(241, 244, 247)", padding: "20px" }} data-aos="zoom-in">
                <h1 style={{color: "rgb(214, 8, 32)"}}>{image.heading}</h1>
                <h3>{image.title1}</h3>
                <h5>{image.title2}</h5>
                <p>{image.disc}</p>
                <h3>Tech Stack</h3>
                <div className='mt-3 mb-3' style={{ display: "flex",  textAlign: "center", justifyContent: "space-around"}}>
                  <img src={image.tech1} alt=""   style={{width: "70px", height: "70px"}} />
                  <img src={image.tech2} alt=""   style={{width: "70px", height: "70px"}} />
                  <img src={image.tech3} alt=""   style={{width: "80px", height: "80px"}} />
                  <img src={image.tech4} alt=""   style={{width: "70px", height: "70px"}} />
                  </div>
               <a href="#1"> <button style={{ backgroundColor: "rgb(214, 8, 32)", padding: "5px", borderRadius: "10px", height: "50px", width: "100px", color: 'white' }}>Lets talk</button></a>
              </div>
            </React.Fragment>
          ))}
        </div>


      </div>


    </>
  )
}

export default Projects