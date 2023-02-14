import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { BsYoutube } from "react-icons/bs";
import { FaTiktok, FaFacebookF, FaTwitter, FaFlipboard } from "react-icons/fa";

const Footer = () => {
    return (
        <div class="container my-5">
            <div
                class="text-center text-lg-start text-black"
            >
                <section class="px-5 mx-5">
                    <div class="container text-center text-md-start mt-5">
                        <div class="row mt-3">
                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class=" fw-bold"> More From CNET</h6>

                                <p>
                                    <a style={{ textDecoration: 'none' }} href="#!" class="text-black">Deals</a>
                                </p>
                                <p>
                                    <a style={{ textDecoration: 'none' }} href="#!" class="text-black">Reviews</a>
                                </p>
                                <p>
                                    <a style={{ textDecoration: 'none' }} href="#!" class="text-black">Best Products</a>
                                </p>
                                <p>
                                    <a style={{ textDecoration: 'none' }} href="#!" class="text-black"> Gift Guide</a>
                                </p>
                                <p>
                                    <a style={{ textDecoration: 'none' }} href="#!" class="text-black">Shopping Extenstion</a>
                                </p>
                                <p>
                                    <a style={{ textDecoration: 'none' }} href="#!" class="text-black"> Videos</a>
                                </p>
                            </div>



                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="fw-bold">About</h6>

                                <p>
                                    <a style={{ textDecoration: 'none' }} href="#!" class="text-black">About CNET</a>
                                </p>
                                <p>
                                    <a style={{ textDecoration: 'none' }} href="#!" class="text-black">Newsletter</a>
                                </p>
                                <p>
                                    <a style={{ textDecoration: 'none' }} href="#!" class="text-black">Sitemap</a>
                                </p>
                                <p>
                                    <a style={{ textDecoration: 'none' }} href="#!" class="text-black">Careers</a>
                                </p>
                            </div>

                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class=" fw-bold">Policies</h6>

                                <p>
                                    <a style={{ textDecoration: 'none' }} href="#!" class="text-black">Help Center</a>
                                </p>
                                <p>
                                    <a style={{ textDecoration: 'none' }} href="#!" class="text-black">Privacy Policy</a>
                                </p>
                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <p><i class="fas fa-home mr-3"></i> Terms of Use</p>
                                <p><i class="fas fa-envelope mr-3"></i> Licensing</p>
                                <p><i class="fas fa-envelope mr-3"></i> Do Not Sell or Share My Personal Information</p>
                            </div>
                        </div>
                    </div>
                </section>
                <hr />

                {/* <div
                    class="text-center p-3" style={{display:'flex'}}
                >
                    <p style={{fontSize:'12px', alignItems:'flex-start'}}>© 2023 CNET, a Red Ventures company. All rights reserved.</p>
                </div> */}
                <section
                    class="d-flex justify-content-between p-4"
                >
                    <div class="me-5">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="#a" class="text-black me-4">
                            <FiInstagram style={{ fontSize: '24px' }} />
                        </a>
                        <a href="#a" class="text-black me-4">
                            <BsYoutube />
                        </a>
                        <a href="#a" class="text-black me-4">
                            <FaTiktok />
                        </a>
                        <a href="#a" class="text-black me-4">
                            <FaFacebookF />
                        </a>
                        <a href="#a" class="text-black me-4">
                            <FaTwitter />
                        </a>
                        <a href="#a" class="text-black me-4">
                            <FaFlipboard />
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer