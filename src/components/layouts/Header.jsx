import React from "react";
import Container from "../Container";
import Logo from "../../assets/images/Emprise.png";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import Button from "../Button";
function Header() {
  return (
    <header className="py-[35px] w-full bg-transparent fixed top-0 left-0">
      <Container className="flex justify-between">
        <div className="">
          <Link><img src={Logo} alt="Logo" /></Link>
        </div>
        <nav className="w-[1328px] flex justify-between">
          <ul className="flex items-center">
            <Link>
              <li className="text-xl font-poppins font-medium text-white mx-5">
                Destination
              </li>
            </Link>
            <Link>
              <li className="text-xl font-poppins font-medium text-white mx-5">
                Activities
              </li>
            </Link>
            <Link>
              <li className="text-xl font-poppins font-medium text-white mx-5">
                Specials
              </li>
            </Link>
            <Link>
              <li className="text-xl font-poppins font-medium text-white mx-5">
              <IoSearchSharp className="text-2xl"/>
              </li>
            </Link>
          </ul>
          <div className="btns">
            <Link className="font-poppins font-normal text-xl text-white me-4">Login</Link>
            <Link className="font-poppins font-normal text-xl text-white"><Button text='Sign Up'/></Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
