// import React from "react";
// import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

// const HeroSection = () => {
//   const details = [
//     {
//       id: 1,
//       title: "1,23,441",
//       subTitle: "Live Job",
//       icon: <FaSuitcase />,
//     },
//     {
//       id: 2,
//       title: "91220",
//       subTitle: "Companies",
//       icon: <FaBuilding />,
//     },
//     {
//       id: 3,
//       title: "2,34,200",
//       subTitle: "Job Seekers",
//       icon: <FaUsers />,
//     },
//     {
//       id: 4,
//       title: "1,03,761",
//       subTitle: "Employers",
//       icon: <FaUserPlus />,
//     },
//   ];
//   return (
//     <>
//       <div className="heroSection">
//         <div className="container">
//           <div className="title">
//             <h1>Find a job that suits</h1>
//             <h1>your interests and skills</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
//               voluptate repellat modi quidem aliquid eaque ducimus ipsa et,
//               facere mollitia!
//             </p>
//           </div>
//           <div className="image">
//             <img src="/heroS.jpg" alt="hero" />
//           </div>
//         </div>
//         <div className="details">
//           {details.map((element) => {
//             return (
//               <div className="card" key={element.id}>
//                 <div className="icon">{element.icon}</div>
//                 <div className="content">
//                   <p>{element.title}</p>
//                   <p>{element.subTitle}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroSection;

import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];

  return (
    <>
      <div className="heroSection bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Title Section */}
          <div className="title text-center md:text-left space-y-4 md:max-w-md">
            <h1 className="text-4xl font-bold leading-tight">
              Find a job that suits
            </h1>
            <h1 className="text-4xl font-bold leading-tight">
              your interests and skills
            </h1>
            <p className="text-gray-400 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              voluptate repellat modi quidem aliquid eaque ducimus ipsa et,
              facere mollitia!
            </p>
          </div>
          {/* Image Section */}
          <div className="image">
            <img
              src="/heroS.jpg"
              alt="hero"
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="details grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 text-center">
          {details.map((element) => {
            return (
              <div
                className="card bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
                key={element.id}
              >
                <div className="icon text-3xl text-blue-500 mb-4">
                  {element.icon}
                </div>
                <div className="content">
                  <p className="text-2xl font-bold">{element.title}</p>
                  <p className="text-gray-400 mt-2">{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
