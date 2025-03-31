import React from "react";
import "../../App.css";
import CustomVideoPlayer from "./CustomVideoPlayer";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";

// import { useTheme } from '../../pages/Theme';


const About = () => {
  // const { backgroundColor, setTheme } = useTheme();

  return (
    
    <div className="home-container-1" >
      <LeftSidebar />
      <div className="home-container-2">
        
        <CustomVideoPlayer />
      </div>
    </div>
  );
};

export default About;
