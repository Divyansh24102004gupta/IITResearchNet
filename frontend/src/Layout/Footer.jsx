// import React, { useContext } from "react";
// import { useAuthContext } from "../context/AuthContext";
// import { Link } from "react-router-dom";
// import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
// import { RiInstagramFill } from "react-icons/ri";

// const Footer = () => {
//   const { authUser } = useAuthContext();
//   return (
//     <footer className={authUser ? "footerShow" : "footerHide"}>
//       <div>&copy; All Rights Reserved By YASHVANT SAROJ.</div>
//       <div>
//         <Link to={"https://www.facebook.com/yashvant.saroj.52?mibextid=ZbWKwL"} target="_blank">
//           <FaFacebookF />
//         </Link>
//         <Link to={"https://youtube.com/@ys.edits_25?si=7snUMzLtZrIqdb5d"} target="_blank">
//           <FaYoutube />
//         </Link>
//         <Link to={"https://in.linkedin.com/in/yashvant-saroj"} target="_blank">
//           <FaLinkedin />
//         </Link>
//         <Link to={"https://www.instagram.com/yashvant_saroj.25/"} target="_blank">
//           <RiInstagramFill />
//         </Link>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { authUser } = useAuthContext();

  return (
    <footer className={`${authUser ? "block" : "hidden"} bg-gray-900 text-white py-4 m-0 p-0 left-0 bottom-0`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Copyright Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          &copy; All Rights Reserved By Divyanshu Gupta.
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 text-xl">
          <Link
            to=""
            target="_blank"
            className="hover:text-blue-500"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="https://www.youtube.com/@divyanshuguptaiit-patnacse6694"
            target="_blank"
            className="hover:text-red-500"
          >
            <FaYoutube />
          </Link>
          <Link
            to="https://www.linkedin.com/in/divyanshu2410/?originalSubdomain=in"
            target="_blank"
            className="hover:text-blue-700"
          >
            <FaLinkedin />
          </Link>
          <Link
            to=""
            target="_blank"
            className="hover:text-pink-500"
          >
            <RiInstagramFill />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
