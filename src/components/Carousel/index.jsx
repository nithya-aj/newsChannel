import React from 'react'
import { carouselData } from '../../Data/carouselData'

const Carousel = () => {
    return (
        <div style={{display:'flex'}} className="scroll">
            {
                carouselData.map((data, id) => (
                    <div class="card, m-3" style={{ width: '18rem' }}>
                        <img src={data.img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{data.heading}</h5>
                            <p class="card-text">{data.by}</p>
                            <a href="#ss" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Carousel