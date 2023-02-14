import React from 'react'
import Row from 'react-bootstrap/Row';
import galaxy from '../../images/galaxy-s23-series.jpg'
import { newsData } from '../../Data/news'

const Content = () => {
    return (
        <Row className='px-3' >
            <div class="row">
                <div class="col" >
                    <img src={galaxy} alt="" />
                    <h1 className='mt-4' style={{ fontFamily: "Abril Fatface", fontWeight: '600', fontSize: '30px' }}>Samsung Galaxy S23 Deals: Preorder Upgrades, Trade-In Discounts, Gift Cards and More</h1>
                    <p class="h5" style={{ fontWeight: '400', fontSize: '22px' }}>Samsung's new flagship phones are now official and you can already save on one with these Galaxy S23 deals.</p>
                    <p style={{ letterSpacing: '2px' }}><small>BY ADAM ORAM</small></p>
                </div>
                <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 ">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            {newsData.map((news, id) => (
                                <div style={{ display: 'flex' }}>
                                    <div>
                                        <h1 className='mt-4' style={{ fontFamily: "Abril Fatface", fontWeight: '400', fontSize: '24px' }}>{news.heading}</h1>
                                        <p class="h5" style={{ fontWeight: '400', fontSize: '15px' }}>{news.desc}</p>
                                        <p style={{ letterSpacing: '1px' }}><small>{news.by}</small></p>
                                    </div>
                                    <div>
                                        <img src={news.img} alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </Row>
    )
}

export default Content