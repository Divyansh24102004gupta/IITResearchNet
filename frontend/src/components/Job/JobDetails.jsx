// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useAuthContext } from "../../context/AuthContext";

// const JobDetails = () => {
//   const { id } = useParams();
//   const [job, setJob] = useState({});
//   const navigateTo = useNavigate();

//   const { authuser } = useAuthContext();

//   useEffect(() => {
//     axios
//       .get(`/api/job/${id}`, {
//         withCredentials: true,
//       })
//       .then((res) => {
//         setJob(res.data.job);
//       })
//       .catch((error) => {
//         navigateTo("/notfound");
//       });
//   }, []);

//   // if (!authuser) {
//   //   navigateTo("/login");
//   // }

//   return (
//     <section className="jobDetail page">
//       <div className="container">
//         <h3>Job Details</h3>
//         <div className="banner">
//           <p>
//             Title: <span> {job.title}</span>
//           </p>
//           <p>
//             Category: <span>{job.category}</span>
//           </p>
//           <p>
//             Country: <span>{job.country}</span>
//           </p>
//           <p>
//             City: <span>{job.city}</span>
//           </p>
//           <p>
//             Location: <span>{job.location}</span>
//           </p>
//           <p>
//             Description: <span>{job.description}</span>
//           </p>
//           <p>
//             Job Posted On: <span>{job.jobPostedOn}</span>
//           </p>
//           <p>
//             Salary:{" "}
//             {job.fixedSalary ? (
//               <span>{job.fixedSalary}</span>
//             ) : (
//               <span>
//                 {job.salaryFrom} - {job.salaryTo}
//               </span>
//             )}
//           </p>
//           {authuser && authuser.role === "Employer" ? (
//             <></>
//           ) : (
//             <Link to={`/application/${job._id}`}>Apply Now</Link>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JobDetails;


import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigateTo = useNavigate();
  const { authuser } = useAuthContext();

  useEffect(() => {
    axios
      .get(`/api/job/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setJob(res.data.job);
      })
      .catch((error) => {
        navigateTo("/notfound");
      });
  }, [id, navigateTo]);

  return (
    <section className="min-h-screen p-4">
      <div className="container mx-auto bg-slate-800 shadow-lg rounded-lg p-4 m-[300px]">
        <h3 className="text-2xl font-bold mb-4 text-slate-50">Job Details</h3>
        
        <div className="space-y-4 text-slate-50">
          <p>
            <strong>Title:</strong> <span>{job.title}</span>
          </p>
          <p>
            <strong>Category:</strong> <span>{job.category}</span>
          </p>
          <p>
            <strong>Country:</strong> <span>{job.country}</span>
          </p>
          <p>
            <strong>City:</strong> <span>{job.city}</span>
          </p>
          <p>
            <strong>Location:</strong> <span>{job.location}</span>
          </p>
          <p>
            <strong>Description:</strong> <span>{job.description}</span>
          </p>
          <p>
            <strong>Job Posted On:</strong> <span>{job.jobPostedOn}</span>
          </p>
          <p>
            <strong>Salary:</strong>{" "}
            {job.fixedSalary ? (
              <span>{job.fixedSalary}</span>
            ) : (
              <span>
                {job.salaryFrom} - {job.salaryTo}
              </span>
            )}
          </p>

          {/* Apply Now link */}
          {authuser && authuser.role === "Employer" ? null : (
            <Link 
              to={`/application/${job._id}`} 
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Apply Now
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
