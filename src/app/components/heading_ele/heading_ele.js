'use client'
import { usePathname } from 'next/navigation'
import './heading_ele.css';
export default function Heading_ele(props) {
  const path = usePathname()
  return (
    <div className="intro_wrapper">
      <h1>{props.data.heading}</h1>
      { 
      path !='/pages/search_anywhere'?[
        <p>{props.data.description1}</p>,
        <p>{props.data.description2}</p>
      ]:null
      }
      <section className="mobile_intro_wrapper">
        <p>{props.data.m_description}</p>
      </section>
    </div>
  );
}
