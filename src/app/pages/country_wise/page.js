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
      bg_img: "/Rome.png",
      detail_heading: "Rome",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod consetetur",
    },
    {
      key: 12,
      bg_img: "/Milan.png",
      detail_heading: "Milan",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod consetetur",
    },
    {
      key: 13,
      bg_img: "/Venice.png",
      detail_heading: "Venice",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod consetetur",
    },
    {
      key: 14,
      bg_img: "/Bologna.png",
      detail_heading: "Bologna",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod consetetur",
    },
  ];
  return (
    <main className="main_wrapper">
      <div className="container">
        <Heading_ele
          data={{
            heading: "Your best trip to Italy",
            description1: "",
            description2: "",
            m_description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.",
          }}
        />
        <Heading_input data={'Italy'} />
        <section className="recommend_content_wrapper">
          <h2>Top 3-days tours</h2>
          <div className="recommend_sec">
            <RecommendPlaces data={{ img_url: "/Tuscan.png", heading:'Tuscan Wine Tour by italy and Wine'}} />
            <RecommendPlaces data={{ img_url: "/walks.png", heading:'Walks of Italy' }} />
            <RecommendPlaces data={{ img_url: "/joe-banana.png", heading:'Joe Banana Limos' }} />
            <RecommendPlaces data={{ img_url: "/3daysMilan.png", heading:'3 Days in Milan' }} />
          </div>
          <TopPlaces data={{heading:'A wheelchair-accessible guide to Rome and Naples', img_url1:'/wheelchair.png'}} />
          <h2>Best destinations from Tripmaster AI</h2>
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
      </div>
      <Footer/>
    </main>
    
  );
}
