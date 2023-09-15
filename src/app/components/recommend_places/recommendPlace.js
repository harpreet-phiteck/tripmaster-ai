import "./recommendPlace.css";
export default function RecommendPlaces(props) {
  return (
      <div className="recommend_detail_sec">
        <div className="detail_img">
          <img src={props.data.img_url} alt="Recommendation" />
        </div>
        <div className="detail_txt">
          <h2>Lorem ipsum dolor</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod{" "}
          </p>
        </div>
      </div>
  );
}
