import React from 'react'
import { carouselData } from '../../Data/carouselData'
import './style.css'

const Carousel = () => {
    return (
        <div style={{ overflow: 'hidden' }} className='mx-4'>
            <div style={{ overflow:'auto', display: 'flex' }}>
                {
                    carouselData.map((data, id) => (
                        <div className="row">
                            <a href="#a" style={{ textDecoration: "none", color: 'black' }} >
                                <div class="card, m-2" style={{ width: '18rem' }}>
                                    <img src={data.img} class="card-img-top" alt="..." />
                                    <div class="card-body text-center" style={{ fontFamily: "Abril Fatface" }}>
                                        <div className='border-bottom border-danger mt-3 p-3' style={{ height: '12rem' }}>
                                            <h5 class="card-title link_style" style={{ fontWeight: '600' }}>{data.heading}</h5>
                                            <p class="card-text mt-3">{data.by}</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Carousel