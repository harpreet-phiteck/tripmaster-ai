'use client'
import Homepage from "./components/main/homepage";
import Heading_ele from "./components/heading_ele/heading_ele";
import Heading_input from "./components/heading_input/heading_input";
import { usePathname } from "next/navigation";
export default function Home() {
 const path = usePathname()
  const places = [
    {
      bg_img: "/first.png",
      detail_heading: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod consetetur",
    },
    {
      bg_img: "/second.png",
      detail_heading: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod consetetur",
    },
    {
      bg_img: "/third.png",
      detail_heading: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod consetetur",
    },
  ];
  return (
    <>
      <main className="main_wrapper">
        <div className="container" style={path=='/'? {width:'1360px', margin:'auto'}:null}>
          <Heading_ele
            data={{
              heading: "Plan Your Trip With Tripmaster AI",
              description1:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt",
              description2:
                "ut labore et dolore magna aliquyam erat, sed diam voluptua.",
              m_description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.",
            }}
          />
          <Heading_input />
          <div className="detail_wrapper">
            {places.map((place, index) => {
              return <Homepage key={index} places={places[index]}/>
            })}
          </div>
        </div>
      </main>
    </>
  );
}
