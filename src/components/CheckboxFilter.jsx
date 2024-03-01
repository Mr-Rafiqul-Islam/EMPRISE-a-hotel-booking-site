import React from "react";
import Label from "./Label";
import { Checkbox, Typography } from "@material-tailwind/react";

function CheckboxFilter({ className, title, data }) {
  let myArray = data
  return (
    <div className={`my-5 ${className}`}>
      <Label text={title} className=""/>
      {myArray.map((i) => (
        <div className="">
          <Checkbox label={<Typography className="font-poppins text-base text-[#212529]">{i.checklist}</Typography>} color="red" className="ms-[-10px]"/>
        </div>
      ))}
    </div>
  );
}

export default CheckboxFilter;
