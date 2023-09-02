import { Container } from 'react-bootstrap'
import Head from './componants/head';
import Dates from './componants/dates';
import Actions from './componants/actions';
import { person } from './data';
import React, { useState } from 'react';

function App() {
  const[personData,setpersonData]=useState(person)
  const onDelete = () => {
    setpersonData([])
  }
  const onViewAll = () => {
    setpersonData(person)
  }
  return (

    <div className="font color-body ">

      <Container className=' p-5'>
        <Head person={personData} />
        <Dates person={personData} />
        <Actions deleteAll={onDelete} viewAll={onViewAll} />






      </Container>

    </div>
  );
}

export default App;
