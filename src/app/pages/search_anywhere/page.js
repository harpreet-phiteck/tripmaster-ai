
import Heading_ele from "@/app/components/heading_ele/heading_ele"
import Heading_input from "@/app/components/heading_input/heading_input"
import RecommendPlaces from "@/app/components/recommend_places/recommendPlace"
import './search_anywhere.css';
export default function Search_Anywhere(){
    return(
       
        <main className="main_wrapper">
        <div className="container">
            <Heading_ele
              data={
                {
                   heading: "Where Are You Planning To Go?",
                   description1:'',
                   description2:'',
                   m_description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.'
                  }
                }  
            />
            <Heading_input/>
            <section className="recommend_content_wrapper">
                <h1>Our recommendations</h1>
                <RecommendPlaces/>
            </section>        
        </div>
        </main>      
    )
}