import React, { useState } from 'react'
import './popup.css'
import { Link } from 'gatsby';
import AboutCompany from '../pages/AboutCompany'


const PopupBar = (props) => {

    return (props.trigger) ? (
      <div className="popup ">
        <div className="popup-inner">
          <button type='button' className='close btn-close' aria-label="Close" onClick={() => props.setTrigger(false)}></button>
          <div className="linkss">
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li>

                <div className="accordion  acr" id="accordionFlushExample" >
                  <div className="accordion-item item" >
                    <h2 className="accordion-header header " >
                      <button  className=" collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" >
                        About
                      </button>
                    </h2>
                    
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body mb-0">
                        <Link className='Link'  to= '/AboutCompany'>
                       Company 
                        </Link>
                        </div>
                    </div>
                    <div id="flush-collapseOne" className="accordion-collapse collapse mt-0" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        <Link className='Link' to= '/Team'>
                        Team
                        </Link>
                        </div>
                    </div>
        
                  </div>
                </div>


              </li>
              <li><Link to="/AboutCompany" >Services</Link></li>
              <li>
                <Link to="/Cases"  >Cases</Link>
              </li>
              <li><Link to="/FormPage">Contact</Link></li>
            </ul>
          </div>
          {props.children}
        </div>
      </div>
    ) : "";
}

export default PopupBar