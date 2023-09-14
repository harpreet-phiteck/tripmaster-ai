'use client'
import Heading_ele from "../heading_ele/heading_ele";
import Heading_input from "../heading_input/heading_input";
import "./homepage.css";
import { usePathname } from 'next/navigation'
export default function Homepage() {
  const path = usePathname()
  console.log(path)
  let places = [
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
    <main className="main_wrapper">
      <div className="container">
        <Heading_ele data={
          {
             heading: "Plan Your Trip With Tripmaster AI",
             description1:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt',
             description2:'ut labore et dolore magna aliquyam erat, sed diam voluptua.',
             m_description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.'
            }
          } />
        <Heading_input />
        <div className="detail_wrapper">
          {places.map((data,index) => {
            return (
              <div
                key={'00'+index}
                className="detail_sec"
                style={{ backgroundImage: `url(${data.bg_img})` }}
              >
                <div className="detail_caption">
                  <h6>{data.detail_heading}</h6>
                  <p>{data.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
