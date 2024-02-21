import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import Container from "../Container";
import { Link } from "react-router-dom";
import Paragraph from "../Paragraph";
import Subheading from "../Subheading";
import Heading from "../Heading";
import Image from "../Image";
import earth from '../../assets/icons/officeIcon.png'
import { CgArrowLongRight } from "react-icons/cg";

function Footer() {
  return (
    <footer className="pt-[70px] pb-8">
      <Container>
        {/* upper part */}
        <div className="flex justify-between items-center">
          <div className="flex gap-10 items-center">
            <Link
              to=""
              className="font-poppins font-semibold text-primary text-2xl uppercase"
            >
              <CiCirclePlus className="me-4 inline-block text-4xl" /> Quick
              Links
            </Link>
            <Paragraph text="Explore More Categories" className="text-2xl" />
          </div>
          <div className="flex gap-10 items-center">
            <Subheading text="0123-456-324-54" className="text-[#212529]" />
            <Subheading text="|" className="text-[#212529]" />
            <Subheading text="hello@entrada.com" className="text-[#212529]" />
          </div>
        </div>
        <hr className="my-10" />
        {/*office location part  */}
        <div className="flex justify-between items-center">
          <div>
            <Subheading text="Get In Touch" className="text-third mb-6" />
            <Heading
              text="Adventures Calling You Guys!"
              className=" font-medium w-[388px] leading-[60px]"
            />
          </div>
          <div className="flex">
            <div><Image src={earth} className='block'/></div>
            <div className="ms-5">
                <Subheading text='Our Offices' className='text-black'/>
                <Subheading text='Nepal, USA, India' className='font-medium text-black my-4'/>
                <Link><CgArrowLongRight className="text-4xl"/></Link>
            </div>
          </div>
        </div>
        <hr className="my-10" />
        {/*  */}
      </Container>
    </footer>
  );
}

export default Footer;


