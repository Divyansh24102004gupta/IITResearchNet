import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  const { authUser } = useAuthContext();
  // const navigateTo = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("/api/job/getallcolleges", {
          withCredentials: true,
        });
        setColleges(res.data);
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
        <h1 className="text-3xl text-white font-bold text-center mb-8 bg-blend-saturation">All Current Research Opportunities</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-32">
          {colleges.colleges &&
            colleges.colleges.map((element) => (
              <div
                className="bg-slate-800 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                key={element._id}
              >
                <h2 className="text-xl text-slate-50 font-semibold">{element.collegeName}</h2>
                <Link
                  to={`/college/${element._id}`}
                  className="mt-4 inline-block text-blue-600 hover:underline"
                >
                  {`Research opportunities at ${element.collegeName}`} 
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>

  );
};

export default Colleges;
