// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuthContext } from "../../context/AuthContext";

// const Jobs = () => {
//   const [jobs, setJobs] = useState([]);
//   const { authUser } = useAuthContext();
//   const navigateTo = useNavigate();
//   useEffect(() => {
//     try {
//       axios
//         .get("/api/job/getall", {
//           withCredentials: true,
//         })
//         .then((res) => {
//           setJobs(res.data);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);
//   if (!authUser) {
//     navigateTo("/");
//   }

//   return (
//     <section className="jobs page">
//       <div className="container">
//         <h1>ALL AVAILABLE JOBS</h1>
//         <div className="banner">
//           {jobs.jobs &&
//             jobs.jobs.map((element) => {
//               return (
//                 <div className="card" key={element._id}>
//                   <p>{element.title}</p>
//                   <p>{element.category}</p>
//                   <p>{element.country}</p>
//                   <Link to={`/job/${element._id}`}>Job Details</Link>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Jobs;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { authUser } = useAuthContext();
  // const navigateTo = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("/api/job/getall", {
          withCredentials: true,
        });
        setJobs(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobs();
  }, []);

  // if (!authUser) {
  //   navigateTo("/");
  // }

  return (
    <section className="min-h-screen p-40">
      <div className="container mx-auto">
        <h1 className="text-3xl text-white font-bold text-center mb-8 bg-blend-saturation">ALL AVAILABLE JOBS</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.jobs &&
            jobs.jobs.map((element) => (
              <div
                className="bg-slate-800 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                key={element._id}
              >
                <h2 className="text-xl text-slate-50 font-semibold">{element.title}</h2>
                <p className="text-slate-50">{element.category}</p>
                <p className="text-slate-50">{element.country}</p>
                <Link
                  to={`/job/${element._id}`}
                  className="mt-4 inline-block text-blue-600 hover:underline"
                >
                  Job Details
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
