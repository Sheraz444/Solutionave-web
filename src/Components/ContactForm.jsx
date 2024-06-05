import React from 'react'
import formpic from '../assets/images/form-pic.webp'

const ContactForm = () => {
    return (
        <>

            <div className="container" style={{ marginTop: "80px", backgroundColor: "rgb(241, 244, 247)", maxWidth: "1280px", padding: "20px", marginBottom: "100px" }}>
                <div className="row">
                    <div className="col-md-6" style={{ marginTop: "40px" }} data-aos="zoom-in" >
                        <h1 style={{ marginBottom: "40px" }}>GET STARTED WITH SOLUTIONAVE</h1>
                        <p style={{ marginBottom: "40px", fontSize: "18px" }}>Tell us about your project. We respond to every inquiry within one business day. Really!</p>
                        <form className="row  needs-validation" noValidate>
                            <div className="col-md-12">
                                <input placeholder='Name*' type="text" className="form-control mt-4" id="validationCustom01" style={{ padding: "10px", background: "transparent", border: "1px solid black" }} required />
                            </div>
                            <div className="col-md-12">
                                <input placeholder='Email*' type="text" className="form-control mt-4" id="validationCustom01" style={{ padding: "10px", background: "transparent", border: "1px solid black" }} required />
                            </div>
                            <div className="col-md-12">
                                <input placeholder=' Company Name*' type="text" className="form-control mt-4" id="validationCustom01" style={{ padding: "10px", background: "transparent", border: "1px solid black" }} required />
                            </div>
                            <div className="col-md-12">
                                <input placeholder='Company Website Link' type="text" className="form-control mt-4" id="validationCustom01" style={{ padding: "10px", background: "transparent", border: "1px solid black" }} required />
                            </div>
                            <div className="col-md-12">
                                <div className="input-group has-validation">
                                    <input placeholder='Message' type="text" className="form-control mt-4" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required style={{ height: "40vh", background: "transparent", border: "1px solid black" }} />
                                    <div className="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-check mt-5">
                                    <input className="form-check-input mt-3" type="checkbox" defaultValue id="invalidCheck" required />
                                    <label className="form-check-label mt-3" htmlFor="invalidCheck">
                                        I have an in-house Development Team
                                    </label>
                                    <div className="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 ">
                                <button className="btn btn-primary mt-5" type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6" style={{ marginTop: "130px" }} data-aos="zoom-in" >
                        <img style={{ width: "100%" }} src={formpic} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactForm