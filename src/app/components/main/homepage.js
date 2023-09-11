import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import './homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Homepage(){
    let places = [
        {
            bg_img:'/first.png',
            detail_heading:'Lorem ipsum dolor',
            description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod consetetur'
        },
        {
            bg_img:'/second.png',
            detail_heading:'Lorem ipsum dolor',
            description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod consetetur'
        },
        {
            bg_img:'/third.png',
            detail_heading:'Lorem ipsum dolor',
            description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod consetetur'
        }
    ]
    return(
        <main className="main_wrapper">
        <div className="container">
            <div className="intro_wrapper">
                <h1>Plan Your Trip With Tripmaster AI</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
                <p>ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                <section className="mobile_intro_wrapper">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </section>
            </div>
            <div className="planning_wrapper">
                <div className="plan_here">
                    <form className="nosubmit">
                        <svg className="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g className="search-path" fill="none" stroke="#848F91"><path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>
                        <input className="nosubmit" type="search" placeholder="Where are you looking for?"/>
                    </form>
                </div>
                <div className="choose_date">
                    <button> 
                        <FontAwesomeIcon icon={faCalendarDays} />
                         Start date</button>
                </div>
                <div className="lets_go">
                    <button>Find</button>
                </div>
            </div>
            <div className="detail_wrapper">
                {
                    places.map((data)=>{
                        return(
                            <div className="detail_sec" style={{backgroundImage:`url(${data.bg_img})`}}>
                    <div className="detail_caption">
                        <h6>{data.detail_heading}</h6>
                        <p>{data.description}</p>
                    </div>
                </div>
                        )
                    })
                
}
            </div>
        </div>
    </main>
    )
}