import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [fixedSalary, setFixedSalary] = useState("");
  const [salaryType, setSalaryType] = useState("default");

  const { authuser } = useAuthContext();
  const navigateTo = useNavigate();

  // useEffect(() => {
  //   if (!authuser || (authuser && authuser.role !== "Employer")) {
  //     navigateTo("/");
  //   }
  // }, [authuser, navigateTo]);

  const handleJobPost = async (e) => {
    e.preventDefault();
    if (salaryType === "Fixed Salary") {
      setSalaryFrom("");
      setSalaryTo("");
    } else if (salaryType === "Ranged Salary") {
      setFixedSalary("");
    }

    await axios
      .post(
        "/api/job/post",
        fixedSalary.length >= 4
          ? {
              title,
              description,
              category,
              country,
              city,
              location,
              fixedSalary,
            }
          : {
              title,
              description,
              category,
              country,
              city,
              location,
              salaryFrom,
              salaryTo,
            },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-0 mt-20 mb-10">
      <h3 className="text-2xl font-bold mb-6 text-center text-slate-50">Post a New Job</h3>
      <form onSubmit={handleJobPost} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Job Title"
            className="p-1 border rounded-lg w-full"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-1 border rounded-lg w-full"
          >
            <option value="">Select Category</option>
            <option value="Graphics & Design">Graphics & Design</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="Frontend Web Development">Frontend Web Development</option>
            <option value="MERN Stack Development">MERN Stack Development</option>
            <option value="Account & Finance">Account & Finance</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="Video Animation">Video Animation</option>
            <option value="MEAN Stack Development">MEAN Stack Development</option>
            <option value="MEVN Stack Development">MEVN Stack Development</option>
            <option value="Data Entry Operator">Data Entry Operator</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
            className="p-1 border rounded-lg w-full"
          />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            className="p-1 border rounded-lg w-full"
          />
        </div>

        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="p-1 border rounded-lg w-full"
        />

        <div className="space-y-4">
          <select
            value={salaryType}
            onChange={(e) => setSalaryType(e.target.value)}
            className="p-1 border rounded-lg w-full"
          >
            <option value="default">Select Salary Type</option>
            <option value="Fixed Salary">Fixed Salary</option>
            <option value="Ranged Salary">Ranged Salary</option>
          </select>

          {salaryType === "default" ? (
            <p className="text-red-600">Please provide Salary Type *</p>
          ) : salaryType === "Fixed Salary" ? (
            <input
              type="number"
              placeholder="Enter Fixed Salary"
              value={fixedSalary}
              onChange={(e) => setFixedSalary(e.target.value)}
              className="p-1 border rounded-lg w-full"
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Salary From"
                value={salaryFrom}
                onChange={(e) => setSalaryFrom(e.target.value)}
                className="p-1 border rounded-lg w-full"
              />
              <input
                type="number"
                placeholder="Salary To"
                value={salaryTo}
                onChange={(e) => setSalaryTo(e.target.value)}
                className="p-1 border rounded-lg w-full"
              />
            </div>
          )}
        </div>

        <textarea
          rows="6"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Job Description"
          className="p-1 border rounded-lg w-full h-20"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-lg w-full hover:bg-blue-700 transition"
        >
          Create Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;




// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { useAuthContext } from "../../context/AuthContext";

// const PostJob = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [country, setCountry] = useState("");
//   const [city, setCity] = useState("");
//   const [location, setLocation] = useState("");
//   const [salaryFrom, setSalaryFrom] = useState("");
//   const [salaryTo, setSalaryTo] = useState("");
//   const [fixedSalary, setFixedSalary] = useState("");
//   const [salaryType, setSalaryType] = useState("default");

//   const { authuser } = useAuthContext();

//   const handleJobPost = async (e) => {
//     e.preventDefault();
//     if (salaryType === "Fixed Salary") {
//       setSalaryFrom("");
//       setSalaryFrom("");
//     } else if (salaryType === "Ranged Salary") {
//       setFixedSalary("");
//     } else {
//       setSalaryFrom("");
//       setSalaryTo("");
//       setFixedSalary("");
//     }
//     await axios
//       .post(
//         "/api/job/post",
//         fixedSalary.length >= 4
//           ? {
//               title,
//               description,
//               category,
//               country,
//               city,
//               location,
//               fixedSalary,
//             }
//           : {
//               title,
//               description,
//               category,
//               country,
//               city,
//               location,
//               salaryFrom,
//               salaryTo,
//             },
//         {
//           withCredentials: true,
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//       .then((res) => {
//         toast.success(res.data.message);
//       })
//       .catch((err) => {
//         toast.error(err.response.data.message);
//       });
//   };

//   // const navigateTo = useNavigate();
//   // if (!authuser || (authuser && authuser.role !== "Employer")) {
//   //   navigateTo("/");
//   // }

//   return (
//     <>
//       <div className="job_post page ">
//         <div className="container">
//           <h3>POST NEW JOB</h3>
//           <form onSubmit={handleJobPost}>
//             <div className="wrapper">
//               <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="Job Title"
//               />
//               <select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               >
//                 <option value="">Select Category</option>
//                 <option value="Graphics & Design">Graphics & Design</option>
//                 <option value="Mobile App Development">
//                   Mobile App Development
//                 </option>
//                 <option value="Frontend Web Development">
//                   Frontend Web Development
//                 </option>
//                 <option value="MERN Stack Development">
//                   MERN STACK Development
//                 </option>
//                 <option value="Account & Finance">Account & Finance</option>
//                 <option value="Artificial Intelligence">
//                   Artificial Intelligence
//                 </option>
//                 <option value="Video Animation">Video Animation</option>
//                 <option value="MEAN Stack Development">
//                   MEAN STACK Development
//                 </option>
//                 <option value="MEVN Stack Development">
//                   MEVN STACK Development
//                 </option>
//                 <option value="Data Entry Operator">Data Entry Operator</option>
//               </select>
//             </div>
//             <div className="wrapper">
//               <input
//                 type="text"
//                 value={country}
//                 onChange={(e) => setCountry(e.target.value)}
//                 placeholder="Country"
//               />
//               <input
//                 type="text"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 placeholder="City"
//               />
//             </div>
//             <input
//               type="text"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               placeholder="Location"
//             />
//             <div className="salary_wrapper">
//               <select
//                 value={salaryType}
//                 onChange={(e) => setSalaryType(e.target.value)}
//               >
//                 <option value="default">Select Salary Type</option>
//                 <option value="Fixed Salary">Fixed Salary</option>
//                 <option value="Ranged Salary">Ranged Salary</option>
//               </select>
//               <div>
//                 {salaryType === "default" ? (
//                   <p>Please provide Salary Type *</p>
//                 ) : salaryType === "Fixed Salary" ? (
//                   <input
//                     type="number"
//                     placeholder="Enter Fixed Salary"
//                     value={fixedSalary}
//                     onChange={(e) => setFixedSalary(e.target.value)}
//                   />
//                 ) : (
//                   <div className="ranged_salary">
//                     <input
//                       type="number"
//                       placeholder="Salary From"
//                       value={salaryFrom}
//                       onChange={(e) => setSalaryFrom(e.target.value)}
//                     />
//                     <input
//                       type="number"
//                       placeholder="Salary To"
//                       value={salaryTo}
//                       onChange={(e) => setSalaryTo(e.target.value)}
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>
//             <textarea
//               rows="10"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Job Description"
//             />
//             <button type="submit">Create Job</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PostJob;


