'use client'
import { useEffect,useState } from 'react';
import './result.css';
export default function Search(){
    const [searchData, setSearchData] = useState('data');
    const onSubmit = async (event)=>{        
        event.preventDefault()
        setSearchData('')         
        const formData = event.target[0].value              
        const response = await fetch('https://api.tripmaster.ai/api/search/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: `{"searchTerm":"${formData}"}`
        })    
        const data = await response.json()
        setSearchData(data)
        console.log(data)        
    }
    const placeDetail = [
        {
            sequence_heading: 'Morning',
            place_detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptate atque suscipit non voluptatum consequatur inventore omnis, laudantium soluta debitis asperiores similique reprehenderit neque recusandae enim aut! Necessitatibus, ut impedit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, assumenda, a distinctio praesentium nihil esse voluptas consectetur ea totam deleniti eveniet!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptate atque suscipit non voluptatum consequatur inventore omnis.',
            place_url:'/morning.png',
            place_name:'Name of the place'

        },
        {
            sequence_heading: 'Afternoon',
            place_detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptate atque suscipit non voluptatum consequatur inventore omnis, laudantium soluta debitis asperiores similique reprehenderit neque recusandae enim aut! Necessitatibus, ut impedit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, assumenda, a distinctio praesentium nihil esse voluptas consectetur ea totam deleniti eveniet!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptate atque suscipit non voluptatum consequatur inventore omnis.',
            place_url:'/afternoon.png',
            place_name:'Name of the place'

        },
        {
            sequence_heading: 'Evening',
            place_detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptate atque suscipit non voluptatum consequatur inventore omnis, laudantium soluta debitis asperiores similique reprehenderit neque recusandae enim aut! Necessitatibus, ut impedit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, assumenda, a distinctio praesentium nihil esse voluptas consectetur ea totam deleniti eveniet!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptate atque suscipit non voluptatum consequatur inventore omnis.',
            place_url:'/evening.png',
            place_name:'Name of the place'

        },
        {
            sequence_heading: 'Hotels',
            place_detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptate atque suscipit non voluptatum consequatur inventore omnis, laudantium soluta debitis asperiores similique reprehenderit neque recusandae enim aut! Necessitatibus, ut impedit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, assumenda, a distinctio praesentium nihil esse voluptas consectetur ea totam deleniti eveniet!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptate atque suscipit non voluptatum consequatur inventore omnis.',
            place_url:'/hotels.png',
            place_name:'Name of the place'

        },
    ]
    return(
        <main className="main_wrapper">
        <div className="container">
            <section className="main_result_sec">
                <div className="result_header">
                    <h1>Italy</h1>
                    <div className="search_div">
                    <form onSubmit={onSubmit} style={{width:'100%', display:'flex'}}>
                        <div className="search_heading">
                            <span><img src="/search.png" alt="Search..."/> <input type='text' name='search' placeholder='Any special details?' style={{fontFamily:'Chillax-Regular'}}/></span>
                        </div>
                        <div className="search_submit">
                           <button type='submit' style={{backgroundColor:'transparent', border:'none'}}>
                            <img src="/MagicWand.png" alt="Magic Wand"/>
                           </button>
                        
                        </div>
                    </form>    
                    </div>
                    <div className="save_share_cont">
                        <img src="/Save and share (1).png" alt=""/>
                        <img src="/Save and share (2).png" alt=""/>
                    </div>
                </div>
                {
                    searchData ? ( 
                <div className="result_detail_wrapper">
                    <div className="result_detail_sec">
                        <div className="result_header_sec">
                            <h1>Day 1</h1>
                            <img src="/dot.png" alt="Dot"/>
                            <div className="result_date">
                                <p><img src="/Calender3.png" alt="Calendar"/> 07.08.23</p>
                            </div>
                        </div>
                        {
                            placeDetail.map((place,index)=>{
                                return(
                                    <div className="morning_container" key={index} >
                            <div className="morning_heading">
                                <h2>{place.sequence_heading}</h2>
                            </div>
                            <div className="morning_description">
                                {place.place_detail}
                            </div>
                            <div className="morning_img_cont">
                                <div>
                                    <img src={place.place_url} className="place_img" width="100%" alt=""/>
                                </div>
                                <div className="place_review_cont">
                                    <div>
                                        <h3>{place.place_name}<span style={{color: '#798685', fontWeight: '100', paddingInline: '8px', fontSize: '16px'}}>(557 reviews)</span></h3>
                                        <div style={{paddingTop: '5px', display: 'flex', alignItems: 'center'}}>
                                            <img src="/Star 3.png" alt=""/>
                                            <span style={{color: '#00AEA4', paddingLeft: '8px'}}>5.0</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button>Book now</button>
                                    </div>
                                </div>
                            </div>
                            <img src="/Vector 8.png"  className="border_img" alt=""/>
                        </div>
                        )})
                        }                       
                    </div>
                </div>
                ):(
                <div className="result_detail_wrapper">
                    <div className="result_detail_sec">
                        <img src='/loader.gif' alt='' width={64} height={64} style={{margin:'auto'}} />
                    </div>
                </div>
                )}
            </section>
        </div>
    </main>
    )
}