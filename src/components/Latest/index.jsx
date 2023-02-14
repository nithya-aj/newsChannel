import React from 'react'
import { latestData } from '../../Data/latestData.js'

const Latest = () => {
    return (
        <div>
            <h1 className='mt-4, p-3' style={{ fontFamily: "Abril Fatface", fontWeight: '600', fontSize: '24px' }}>Latest</h1>
            <div className="row">
                <div className="col-md-9 m-3">
                    {latestData.map((data) => (<div className="row">
                        <div className="col-md-8">
                            <h1 className='mt-4 ' style={{ fontFamily: "Abril Fatface", fontWeight: '600', fontSize: '18px', lineHeight:'1.5rem' }}>{data.heading}</h1>
                            <p class="h5" style={{ fontWeight: '400', fontSize: '16px' }}>{data.desc}</p>
                            <p style={{ letterSpacing: '2px', lineHeight:'2rem' }}><small>{data.by}</small></p>
                        </div>
                        <div className="col-md-4 p-2">
                            <img src={data.img} alt="" />
                        </div>
                    </div>
                    ))}
                    <button type="button" class="btn btn-outline-danger m-3" style={{width:'100%'}}>Danger</button>
                </div>
            </div>
        </div>
    )
}

export default Latest