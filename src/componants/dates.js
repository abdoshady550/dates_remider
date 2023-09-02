import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Dates = ({ person }) => {
    return (
        <div>
            <Row className='justify-content-center'>
                <Col sm='8' className='my-2'>
                    <div className='scroll regtangel'>
                        {person.length ? (person.map((item) => {
                            return <div key={item.id} className='d-flex p-2 border-bottom mx-3 '>
                                <img className=' avatar-style' src={item.img} alt='avatar' />
                                <div className='px-3'>
                                    <p className='font-arab d-inline fs-5'>{item.name}</p>
                                    <p className='font-arab fs-6'>{item.date}</p>

                                </div>

                            </div>
                        })) : <h1 className='font-sp text-center p-5'>'You don't have any Dates today'</h1>}


                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Dates;