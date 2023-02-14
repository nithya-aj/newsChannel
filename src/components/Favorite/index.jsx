import React from 'react'
import Carousel from '../Carousel'

const Favorite = () => {
    return (
        <div >
            <div style={{ display: 'flex', alignItems: 'center' }} className='mx-5'>
                <h1 className='mt-4, p-3 mx-5' style={{ fontFamily: "Abril Fatface", fontWeight: '600', fontSize: '24px' }}>Our Favorite Picks</h1>
                <caption><u>All best</u></caption>
            </div>
            <Carousel />

        </div>
    )
}

export default Favorite