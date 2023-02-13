import React from 'react'
import Content from '../../components/Content'
import Favorite from '../../components/Favorite'
import NavbarCmp from '../../components/Navbar'
import './style.css'

const Homepage = () => {

    const links = ["Tech", "Home Entertainment", "Mobile", "Computing", "Services & Software", "Gaming"]

    return (
        <>
            <div className="container mb-5" style={{ maxWidth: "1391px" }}>
                <NavbarCmp />
                <h1 className="px-4" style={{ fontFamily: "Abril Fatface", fontWeight: '600', fontSize: '52px' }}>Get the tech that takes you places</h1>
                <p class="h5, px-4" style={{ fontWeight: '400', fontSize: '22px' }}>Our experts share the newest products and technologies that get you the most out of your world.</p>

                <nav class="navbar navbar-expand-lg bg-body-tertiary px-2">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                {links.map((link, index) => (
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#home">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
                <hr style={{ marginLeft: '1.5rem' }} className='mt-1' />
                <div style={{ marginLeft: '1.5rem' }}>
                    <Content />
                </div>
                <hr style={{ marginLeft: '1.5rem' }} className='mt-1' />
                <Favorite />
            </div>
        </>
    )
}

export default Homepage