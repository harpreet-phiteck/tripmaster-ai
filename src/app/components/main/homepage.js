'use client'
import "./homepage.css";
export default function Homepage(props) {
  return (   
            <div
            className="detail_sec"
            key='155'         
            style={{backgroundImage: `url(${props.places.bg_img})`}}
            >
          <div className="detail_caption">
            <h6>{props.places.detail_heading}</h6>
            <p>{props.places.description}</p>
          </div>
        </div>
  );
}
