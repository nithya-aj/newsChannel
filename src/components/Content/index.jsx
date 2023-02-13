import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import galaxy from '../../images/galaxy-s23-series.jpg'
import { newsData } from '../../Data/news'

const Content = () => {
    return (
        <Row className='px-3' >
            <Col xs={6} md={5}>
                <img src={galaxy} alt="" />
                <h1 className='mt-4' style={{ fontFamily: "Abril Fatface", fontWeight: '600', fontSize: '30px' }}>Samsung Galaxy S23 Deals: Preorder Upgrades, Trade-In Discounts, Gift Cards and More</h1>
                <p class="h5" style={{ fontWeight: '400', fontSize: '22px' }}>Samsung's new flagship phones are now official and you can already save on one with these Galaxy S23 deals.</p>
                <p style={{ letterSpacing: '2px' }}><small>BY ADAM ORAM</small></p>
            </Col>
            <Col xs={12} md={7}>
                {newsData.map((news, id) => (
                    <Row className='px-3' >
                        <Col xs={12} md={5}>
                            <h1 className='mt-4' style={{ fontFamily: "Abril Fatface", fontWeight: '400', fontSize: '24px' }}>{news.heading}</h1>
                            <p class="h5" style={{ fontWeight: '400', fontSize: '15px' }}>{news.desc}</p>
                            <p style={{ letterSpacing: '1px' }}><small>{news.by}</small></p>
                        </Col>
                        <Col xs={12} md={7}>
                            <img src={news.img} alt="" />
                        </Col>
                    </Row>
                ))}
            </Col>
        </Row>
    )
}

export default Content