import React from "react";
import { Row, Col } from "react-bootstrap";


const Actions = ({deleteAll,viewAll}) => {

  return (
    <div>
      <Row className="justify-content-center">
        <Col sm="8" className="d-flex justify-content-between">
          <button onClick={deleteAll} className="btn-style">Delete All</button>
          <button onClick={viewAll} className="btn-style">Display All</button>
        </Col>
      </Row>
    </div>
  );
};

export default Actions;
