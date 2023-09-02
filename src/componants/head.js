import React from 'react'
import { Row,Col } from 'react-bootstrap'



export const Head = ({person}) => {
  return (
    <div>  <Row className='font-sp justify-content-center'>
    <Col sm='8' >Your Dates today {person.length}</Col>
  </Row>
  </div>
  )
}
export default Head;