import Heading_ele from "../heading_ele/heading_ele";
import Heading_input from "../heading_input/heading_input";
import "./homepage.css";
export default function Homepage() {
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
        <Heading_ele />
       <Heading_input/>
        <div className="detail_wrapper">
          {places.map((data) => {
            return (
              <div
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
