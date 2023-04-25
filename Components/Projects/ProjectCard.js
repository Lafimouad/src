import React, { useContext, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { ScrollContext } from "../../Context/scroll";
import projectImg from "../../assets/imgs/dummy-project.png";
import AllImages from '../../assets/imgs/projects'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function ProjectCard({ project,images }) {
  const { scrollChange } = useContext(ScrollContext);
 


  useEffect(() => {

    return () => {
      
    }
  }, [])
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  
const CarouselView = ()=>{



  return (<Carousel
 

    responsive={responsive}


  >
 {images.map((img,index)=>
 {
   
   return(
   
    <img src={AllImages[img]} alt="" key={index} style={{
      width:'350px',
      height:'350px',
      margin:'0px',
      borderRadius: '2px',
      objectFit: 'scale-down',
     
      transition: '0.3s ease'}} />


  )
 })}
  </Carousel>)
}

  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible) {
          scrollChange("projects");
        }
      }}
    >

      <div className="project-card">
        <div className="content-wrapper">
          <img src={projectImg} alt="" className="project-card-img" />
          <div className="card-content">
            <div className="project-name">{project.projectName}</div>
           {project.links ? <div className="card-bio"><a href="" target="_blank" rel="noopener noreferrer">  Full project report</a></div> :<></>}
            <div className="card-bio">{project.projectBio}</div>
          </div>
          
        </div>
       
        <div className="languages">
          <div className="languages-profile">
            <div className="languages-name">
              {project.stackList.map((stack, i) => {
                return <span key={i}>{stack}</span>;
              })}
            </div>
 
          </div>

        </div>
        <div    style={{
      width:'350px',
      height:'350px',
      alignItems:'center',
      alignContent:'center'
    }}> <CarouselView></CarouselView></div>
      </div>


    </VisibilitySensor>
  );
}

export default ProjectCard;
