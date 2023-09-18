import './top_places.css';
export default function TopPlaces(props){    
    return(
        <section className="top_places_wrapper">
                <div className="top_place_detail_sec">
                    <div className={props.order ? 'top_place_img '+ props.order:'top_place_img' }>
                        <img src={props.data ? props.data.img_url1:"/top-places.png"} alt="Top Places"/>
                    </div>
                    <div className="top_place_txt">
                        <h2>{props.data ? props.data.heading :'Top 10 places to visit in San Francisco'}</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <strong>nonumy eirmod tempor</strong> invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
                        <div className="top_place_btn">
                            <button>Know more</button>
                        </div>
                    </div>
                </div>
        </section>
    )
}