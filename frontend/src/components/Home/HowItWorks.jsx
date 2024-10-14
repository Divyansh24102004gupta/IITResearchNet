import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks bg-transparent mt-40">
        <div className="container mt-0">
          <h1 className="text-4xl text-white">Discover, Collaborate, Innovate</h1>
          <div className="banner ">
            <div className="card bg-transparent" style={{backgroundColor:'#1F2937'}}>
              <FaUserPlus />
              <p style={{color:"white"}}>Create Account</p>
              <p style={{color:"white"}}>
              Join our platform to explore a world of research opportunities. By creating an account, you will gain access to valuable resources and connections that can help you advance your academic journey.
              </p>
            </div>
            <div className="card" >
              <MdFindInPage />
              <p style={{color:"white"}}>Explore or contribute to research opportunities.</p>
              <p style={{color:"white"}}>
              Discover a wide range of research opportunities or share your own listings with our community. Whether you're seeking your next role or looking to connect with talent, our platform is here to support your career goals.


              </p>
            </div>
            <div className="card" style={{backgroundColor:'#1F2937'}}>
              <IoMdSend />
              <p style={{color:"white"}}>Apply for Research Opportunities / Recruit Talented Researchers</p>
              <p style={{color:"white"}}>
              Discover a platform that connects ambitious researchers with relevant opportunities. Our mission is to facilitate collaboration by matching skilled individuals with the right research projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;