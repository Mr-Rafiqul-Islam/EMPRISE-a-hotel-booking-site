import React from "react";
import Image from "./Image";
import t1 from "../assets/images/t1.png";
import t2 from "../assets/images/t2.png";
import Subheading from "./Subheading";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

function CardTour() {
  return (
    <div>
      <div className="flex">
        {/* image part */}
        <div className="relative">
          <Image src={t1} />
          <div className="w-[72px] h-[72px] grid place-content-center rounded-tr-2xl font-poppins text-2xl absolute bottom-0 left-0 bg-white ">
            01
          </div>
        </div>
        {/* text part */}
        <div className="all_content">
          <div className="pb-[63px] pt-[38px] ps-[38px] ">
            <Subheading text="Adventure Guru" className="text-third  mb-8" />
            <div className="w-[275px] mb-[110px]">
              <Heading text="Martina James Junior" className=" font-medium " />
            </div>
            <div className="flex">
              <div>
                <Subheading text="About" className="mb-4" />
                <Paragraph
                  text="Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking."
                  className="w-[380px]"
                />
              </div>
              <div className="ms-[38px]">
                <Subheading text="Journey" className="mb-4" />
                <Paragraph
                  text="Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking."
                  className="w-[380px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTour;
