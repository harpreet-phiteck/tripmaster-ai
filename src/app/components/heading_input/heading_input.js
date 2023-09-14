'use client'
import './heading_input.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from 'next/navigation'
export default function Heading_input(){
  const path = usePathname()
    return(
        <div className="planning_wrapper">
        <div className="plan_here">
          <form className="nosubmit">
            <svg
              className="svg-icon search-icon"
              aria-labelledby="title desc"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19.9 19.7"
            >
              <title id="title">Search Icon</title>
              <desc id="desc">A magnifying glass icon.</desc>
              <g className="search-path" fill="none" stroke="#848F91">
                <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" />
                <circle cx="8" cy="8" r="7" />
              </g>
            </svg>
            <input
              className="nosubmit"
              type="search"
              placeholder="Where are you looking for?"
            />
          </form>
        </div>
        <div className="choose_date">
          <button>
            <FontAwesomeIcon icon={faCalendarDays}/>
            Start date
          </button>
        </div>
        <div className="lets_go">
          <button>Plan my trip</button>
        </div>
      </div>
    )
}