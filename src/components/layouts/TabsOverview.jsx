import React from "react";
import Description from "../../assets/icons/descript.svg";
import iternary from "../../assets/icons/inclusions.svg";
import inclusions from "../../assets/icons/iternary.svg";
import review from "../../assets/icons/review.svg";
import faq from "../../assets/icons/faq.svg";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import { useState } from "react";
import Paragraph from "../Paragraph";
import { Link } from "react-router-dom";
import Image from "../Image";
import Subheading from "../Subheading";
import watch from "../../assets/icons/watch.svg";

function TabsOverview() {
  const [activeTab, setActiveTab] = useState("overview");
  const data = [
    {
      label: "Overview",
      value: "overview",
      desc: `Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do. Elit dolore sunt cupidatat minim nisi nulla fugiat sit dolor adipisicing excepteur eiusmod. Mollit reprehenderit magna tempor ex.`,
    },
    {
      label: "Iternary",
      value: "iternary",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Inclusions",
      value: "inclusions",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Reviews",
      value: "reviews",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "FAQ",
      value: "faq",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Essential",
      value: "essential",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  const info = [
    {
      title: "Duration",
      logo: "/src/assets/icons/watch.svg",
      besideLogo: "2 Days",
    },
    {
      title: "Activity",
      logo: "/src/assets/icons/walking.svg",
      besideLogo: "Walking",
    },
    {
      title: "Physical",
      logo: "/src/assets/icons/meter.svg",
      besideLogo: "Strenuous",
    },
    {
      title: "Group Size",
      logo: "/src/assets/icons/group.svg",
      besideLogo: "8",
    },
    {
      title: "Age",
      logo: "/src/assets/icons/age.svg",
      besideLogo: "7+",
    },
    {
      title: "Season",
      logo: "/src/assets/icons/season.svg",
      besideLogo: "Apr-Sep",
    },
  ];
  return (
    <div>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-[#28B0A6] shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={
                activeTab === value
                  ? "font-poppins text-[18px] text-primary"
                  : "font-poppins text-[18px] text-[#28B0A6]"
              }
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          
            <TabPanel key="overview" value="overview">
              <div className="flex gap-16">
                <Image src={Description} className={`self-start`} />
                <div>
                  <Paragraph className="text-[#1D293F] mb-5" text={data.at(0).desc} />
                  <Link className="text-[#99A3AD] font-poppins text-base">
                    Show More...
                  </Link>
                  <div className="flex flex-wrap gap-y-7 mt-14">
                    {info.map(({ title, logo, besideLogo }) => (
                      <div key={title} className="basis-1/3">
                        <Subheading
                          text={title}
                          className="text-base text-[#546179]"
                        />
                        <div className="flex items-center gap-2 mt-7">
                          <Image src={logo} />
                          <Subheading
                            text={besideLogo}
                            className="text-[#1D293F] font-medium"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel key='iternary' value="iternary">
            <div className="flex gap-16">
                <Image src={iternary} className={`self-start`} />
                <div>
                  
                </div>
            </div>
            </TabPanel>
            <TabPanel key='inclusions' value="inclusions">
            <Image src={inclusions} className={`self-start`} />
                <div>
                  
                </div>
            </TabPanel>
            <TabPanel key='reviews' value="reviews">
            <Image src={review} className={`self-start`} />
                <div>
                  
                </div>
            </TabPanel>
            <TabPanel key='faq' value="faq">
            <Image src={faq} className={`self-start`} />
                <div>
                  
                </div>
            </TabPanel>
            <TabPanel key='essential' value="essential">
            <Image src={iternary} className={`self-start`} />
                <div>
                  
                </div>
            </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
}

export default TabsOverview;
