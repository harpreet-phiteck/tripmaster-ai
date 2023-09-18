"use client";
import Heading_ele from "@/app/components/heading_ele/heading_ele";
import Heading_input from "@/app/components/heading_input/heading_input";
import RecommendPlaces from "@/app/components/recommend_places/recommendPlace";
import Homepage from "@/app/components/main/homepage";
import TopPlaces from "@/app/components/top_places/top_places";
import { usePathname } from "next/navigation";
import Footer from "@/app/components/footer/Footer";
import "../recommend/recommend.css";
export default function Search_Anywhere() {
  const path = usePathname();

  const places = [
    {
      key: 11,
      bg_img: "/first.png",
      detail_heading: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod consetetur",
    },
    {
      key: 12,
      bg_img: "/second.png",
      detail_heading: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod consetetur",
    },
    {
      key: 13,
      bg_img: "/third.png",
      detail_heading: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod consetetur",
    },
    {
      key: 14,
      bg_img: "/second.png",
      detail_heading: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod consetetur",
    },
  ];
  return (
    <main className="main_wrapper">
      <div className="container">
        <Heading_ele
          data={{
            heading: "Where Are You Planning To Go?",
            description1: "",
            description2: "",
            m_description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.",
          }}
        />
        <Heading_input />
        <section className="recommend_content_wrapper">
          <h2>Our recommendations</h2>
          <div className="recommend_sec">
            <RecommendPlaces data={{ img_url: "/recommend1.png" }} />
            <RecommendPlaces data={{ img_url: "/recommend2.png" }} />
            <RecommendPlaces data={{ img_url: "/recommend3.png" }} />
            <RecommendPlaces data={{ img_url: "/recommend4.png" }} />
          </div>
          <TopPlaces />
          <h2>Best destinations for your next vacation</h2>
          <div
            className={
              path == "/pages/country_wise"
                ? "detail_wrapper detail_wrapper_recommend"
                : "detail_wrapper"
            }
          >
            {places.map((place, index) => {
              return <Homepage key={index} places={places[index]} />;
            })}
          </div>
        </section>
        <TopPlaces order={"order"} data={{heading:'Incredible 5 day trip to Tokyo, Japan', img_url1:'/tokyo.png'}} />  
        <section className="recommend_content_wrapper">
          <h2>More to explores</h2>
          <div className="recommend_sec">
            <RecommendPlaces data={{ img_url: "/eiffle.png" }} />
            <RecommendPlaces data={{ img_url: "/mehal.png" }} />
            <RecommendPlaces data={{ img_url: "/banglow.png" }} />
            <RecommendPlaces data={{ img_url: "/sea-view.png" }} />
          </div>
        </section>    
      </div>
      <Footer/>
    </main>
    
  );
}
