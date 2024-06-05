import React, { useState } from 'react'
import PopupBar from './PopupBar'
import sollogo from '../assets/images/sol-logo.png'
import { Link } from 'gatsby';


const Navbrr = () => {
  const [popup, setpopup] = useState(false)


  const Handlepop = () => {
    setpopup(true);
  }
  return (
    <>
      <section style={{ position: "sticky", top: "0px", zIndex: "10" }} >
        <nav className="navbar navbar-expand-lg bg-body-tertiary "  >
          <div className="container-fluid" >
            <Link className="navbar-brand" to="/HomePage" >
              <img src={sollogo} alt="" style={{ height: "70px" }} />
              <span style={{ color: "rgb(214, 8, 32)", fontWeight: "600", fontSize: "25px" }}>SOLUTIONAVE</span>
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            </div>
            <button style={{ borderRadius: "50px", width: "fit-content", padding: "10px" }} onClick={Handlepop}> <span className="navbar-toggler-icon " /></button>
          </div>
        </nav>
      </section>
      <PopupBar trigger={popup} setTrigger={setpopup}> </PopupBar>
    </>
  )
}

export default Navbrr