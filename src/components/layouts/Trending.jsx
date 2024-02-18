import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import CradTrending from "../CradTrending";
import mountain from '../../assets/images/Photo1.png'

function Trending() {
  return (
    <section className="py-[70px]">
      <Container>
        <div className="mb-[60px]">
          <Heading text="Trending 2021" className="mb-5" />
          <Paragraph text="Sost Brilliant reasons Entrada should be your one-stop-shop!" />
        </div>
        <div className="flex gap-10">
        <CradTrending cardimg={mountain} discount='30%' des='Hiking Tour | Stroke on Train' price='$895.00' title='Mountain Hiking Tour'/>
        <CradTrending cardimg={mountain} discount='30%' des='Hiking Tour | Stroke on Train' price='$895.00' title='Mountain Hiking Tour'/>
        <CradTrending cardimg={mountain} discount='30%' des='Hiking Tour | Stroke on Train' price='$895.00' title='Mountain Hiking Tour'/>
        </div>
      </Container>
    </section>
  );
}

export default Trending;
