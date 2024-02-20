import React from 'react'
import Container from "../Container";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import CardTour from '../CardTour';

function Tourguides() {
    
  return (
    <section className='py-[70px]'>
        <Container>
        <div className="mb-[60px]">
          <Heading text="Tour Guides" className="mb-5" />
          <Paragraph text="Sost Brilliant reasons Entrada should be your one-stop-shop!" />
        </div>
        <div>
            <CardTour/>
        </div>
        </Container>
    </section>
  )
}

export default Tourguides