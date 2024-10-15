// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuthContext } from "../context/AuthContext";
// import LogoutButton from "../components/sidebar/LogoutButton";
// // import axios from "axios";
// // import toast from "react-hot-toast";
// import { GiHamburgerMenu } from "react-icons/gi";

// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   const {authUser,setAuthUser} = useAuthContext();
// //  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
// //   const navigateTo = useNavigate();

// //   const handleLogout = async () => {
// //     try {
// //       const response = await axios.post(
// //         "http://localhost:8000/api/user/logout",
// //         {
// //           withCredentials: true,
// //         }
// //       );
// //       toast.success(response.data.message);
// //       setIsAuthorized(false);
// //       navigateTo("/login");
// //     } catch (error) {
// //       toast.error(error.response.data.message), setIsAuthorized(true);
// //     }
// //   };

//   return (
//     <nav className={authUser ? "navbarShow bg-slate-900" : "navbarHide"}>
//       <div className="container">
//         <div className="logo">
//           <img src="/JobZee-logos__white.png" alt="logo" />
//         </div>
//         <div className={!show ? "menu flex-row" : "show-menu menu"}>
//           <div>
//             <Link to={"/"} onClick={() => setShow(false)}>
//               HOME
//             </Link>
//           </div>
//           <div>
//             <Link to={"/job/getall"} onClick={() => setShow(false)}>
//               ALL JOBS
//             </Link>
//           </div>

//           {/* Add Freelance Gigs Link */}

//           <li>
//             <Link to={"/applications/me"} onClick={() => setShow(false)}>
//               {authUser && authUser.role === "Employer"
//                 ? "APPLICANT'S APPLICATIONS"
//                 : "MY APPLICATIONS"}
//             </Link>
//           </li>
          
//           {authUser && authUser.role === "Employer" ? (
//             <>
//               <li>
//                 <Link to={"/job/post"} onClick={() => setShow(false)}>
//                   POST NEW JOB
//                 </Link>
//               </li>
//               <li>
//                 <Link to={"/job/me"} onClick={() => setShow(false)}>
//                   VIEW YOUR JOBS
//                 </Link>
//               </li>
//             </>
//           ) : null}

//         </div>
//         <div>
//         <LogoutButton />
//         </div>
//         <div className="hamburger">
//           <GiHamburgerMenu onClick={() => setShow(!show)} />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import LogoutButton from "../components/sidebar/LogoutButton";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { authUser } = useAuthContext();

  return (
    <nav className={`w-full ${authUser ? "bg-slate-900" : "hidden"} py-0 m-0 p-0 fixed top-0 left-0 z-50`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo Section */}
        <div className="logo">
          <img
            src="/preview.png"
            alt="logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Menu Links */}
        <div className={`flex flex-col md:flex-row items-center space-x-4 ${show ? "block" : "hidden"} md:block`}>
          <Link
            to="/"
            className="text-white hover:text-gray-300"
            onClick={() => setShow(false)}
          >
            HOME
          </Link>
          <Link
            to="/colleges"
            className="text-white hover:text-gray-300"
            onClick={() => setShow(false)}
          >
           ALL COLLEGES
          </Link>
          <Link
            to="/chat"
            className="text-white hover:text-gray-300"
            onClick={() => setShow(false)}
          >
            CHAT
          </Link>
          <Link
            to="/job/getall"
            className="text-white hover:text-gray-300"
            onClick={() => setShow(false)}
          >
            ALL OPPORTUNITIES
          </Link>

          <Link
            to="/applications/me"
            className="text-white hover:text-gray-300"
            onClick={() => setShow(false)}
          >
            {authUser && authUser.role === "Faculty"
              ? "APPLICANT'S APPLICATIONS"
              : "MY APPLICATIONS"}
          </Link>

          {authUser && authUser.role === "Faculty" && (
            <>
              <Link
                to="/job/post"
                className="text-white hover:text-gray-300"
                onClick={() => setShow(false)}
              >
                POST OPENINGS
              </Link>
              <Link
                to="/job/me"
                className="text-white hover:text-gray-300"
                onClick={() => setShow(false)}
              >
                VIEW YOUR OPENINGS
              </Link>
            </>
          )}
        </div>

        {/* Logout Button */}
        <div className="hidden md:block">
          <LogoutButton />
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <GiHamburgerMenu
            className="text-white cursor-pointer"
            onClick={() => setShow(!show)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
