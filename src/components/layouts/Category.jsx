import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import beach from "../../assets/icons/Beach.png";
import Jumping from "../../assets/icons/Bungee Jumping.png";
import Backpack from "../../assets/icons/Backpack.png";
import City from "../../assets/icons/City.png";
import Jungle from "../../assets/icons/Jungle.png";
import CardCategory from "../CardCategory";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// custom Arrows
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function Category() {
  // for slider

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="pt-[140px] pb-[70px]">
      <Container>
        <div className="mb-[60px]">
          <Heading text="Select Category" className="mb-5" />
          <Paragraph text="Sost Brilliant reasons Entrada should be your one-stop-shop!" />
        </div>
        <div >
          {/* card */}
          <Slider {...settings}>
            <CardCategory
              rating="4.9"
              icon={beach}
              title="Beach Activity"
              des="196 Activities"
            />
            <CardCategory
              rating={4.9}
              icon={Jumping}
              title="Bungee Jump"
              des="196 Activities"
            />
            <CardCategory
              rating={4.9}
              icon={City}
              title="City Tours"
              des="196 Activities"
            />
            <CardCategory
              rating={4.9}
              icon={Backpack}
              title="Hiking trips"
              des="196 Activities"
            />
            <CardCategory
              rating={4.9}
              icon={Jungle}
              title="Jungle trips"
              des="196 Activities"
            />
          </Slider>
        </div>
      </Container>
    </section>
  );
}

export default Category;
