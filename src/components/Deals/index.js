import React from 'react'
import { dealsData } from '../../Data/dealsData';

const Deals = () => {
    console.log(dealsData);
    return (
        <>
            {dealsData.map((deals) =>
                <div class="row">
                    <div style={{ display: 'flex', alignItems: 'center' }} >
                        <h1 className='mt-4, p-3' style={{ fontFamily: "Abril Fatface", fontWeight: '600', fontSize: '24px' }}>{deals.mainHeading}</h1>
                        <caption><u>{deals.subHeading}</u></caption>
                    </div>
                    <div class="col" style={{ display: 'flex' }}>
                        {deals.list?.map((data) => (
                            <a href="#a" style={{textDecoration:'none', color:'black'}}>
                                <div className="row p-2">
                                    <div className="col">
                                        <img src={data.img} alt="" />
                                        <h1 className='mt-4' style={{ fontFamily: "Abril Fatface", fontWeight: '600', fontSize: '18px' }}>{data.heading}</h1>
                                        <p class="h5" style={{ fontWeight: '400', fontSize: '16px' }}>{data.desc}</p>
                                        <p style={{ letterSpacing: '2px' }}><small>{data.by}</small></p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 ">
                        <div className="row">
                            {deals.news?.map((data) => (
                                <>
                                    <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12" style={{ lineHeight: '12px' }}>
                                        <h1 className='mt-4' style={{ fontFamily: "Abril Fatface", fontWeight: '600', fontSize: '22px', lineHeight: '2rem' }}>{data.heading}</h1>
                                        <p class="h5 mb-5" style={{ fontWeight: '400', fontSize: '16px' }}>{data.desc}</p>
                                    </div>
                                    <hr />
                                </>
                            ))}
                        </div>
                    </div>
                    <hr style={{marginTop:'-17px'}}/>
                </div>
            )}
        </>
    )
}

export default Deals