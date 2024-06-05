import React from 'react'

const Footter = () => {
    return (
        <>
            <div className="container-fluid" style={{ borderTop: "1px solid black" }}>
                <div className="row">
                    <div className="col-md-6" style={{ paddingTop: "40px" }}>
                        <span style={{ marginTop: "15px" }}>Hell@olarans.com</span>
                        <p style={{ marginTop: "15px" }}>Contact directly via WhatsApp</p>
                        <h5 style={{ marginTop: "15px" }}>Clutch  Goodfirms</h5>
                        <span style={{ marginTop: "15px" }}>@ Lanars, 2016-2024. Allrights reserved</span>
                    </div>
                    <div className="col-md-6 footer mt-4" >
                        <ul style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                            <li><a href="">  </a>Linkedin</li>
                            <li><a href="">  </a>Facebook</li>
                            <li><a href="">  </a>Insta</li>
                            <li><a href="">  </a>YouTube</li>
                            <li><a href="">  </a>Git hub</li>
                            <li><a href="">  </a>Twiter</li>
                        </ul>
                        <ul style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "100px" }}>
                            <li><a href="">  </a>FAQ</li>
                            <li><a href="">  </a>Cookies Policy</li>
                            <li><a href="">  </a>Terms and Conditions</li>
                            <li><a href="">  </a>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footter