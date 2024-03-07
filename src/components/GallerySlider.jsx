import React from "react";
import Flex from "./Flex";
import Image from "./Image";
import a1 from "../assets/images/thumb1.png";
import a2 from "../assets/images/thumb2.png";
import a3 from "../assets/images/thumb3.png";
import a4 from "../assets/images/thumb4.png";
import beach from "../assets/images/Sandy.png";


function GallerySlider() {
  
  return (
    <div className="w-full">
      <Flex className="gap-10">
        <div className="flex flex-col gap-4">
          <Image src={a1} />
          <Image src={a2} />
          <Image src={a3} />
          <Image src={a4} />
        </div>
        <div>
          <Image src={beach}/>
        </div>
      </Flex>
    </div>
  );
}

export default GallerySlider;
