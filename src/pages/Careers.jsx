import PageTopSection from "./PageTopSection";
import React, { useState } from "react";
export default function Careers() {

   const jobs = [
     {
       title: "Team Lead - Digital Marketing",
       description:
         "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.",
       location: "New York, USA",
       type: "Full Time",
     },
     {
       title: "Senior ASP.Net Core Developer",
       description:
         "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.",
       location: "New York, USA",
       type: "Half Time",
     },
     {
       title: "Android Developer",
       description:
         "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.",
       location: "New York, USA",
       type: "Half Time",
     },
     {
       title: "kkkkk Developer",
       description:
         "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.",
       location: "New York, USA",
       type: "Half Time",
     },
     {
       title: "kkkkk Developer",
       description:
         "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.",
       location: "New York, USA",
       type: "Half Time",
     },
     {
       title: "acb Developer",
       description:
         "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.",
       location: "New York, USA",
       type: "Half Time",
     },
     {
       title: "Android Developer",
       description:
         "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.",
       location: "New York, USA",
       type: "Half Time",
     },
     {
       title: "kkkkk Developer",
       description:
         "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.",
       location: "New York, USA",
       type: "Half Time",
     },
     {
       title: "acb Developer",
       description:
         "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.",
       location: "New York, USA",
       type: "Half Time",
     },
   ];

   const [currentPage, setCurrentPage] = useState(1);
   const jobsPerPage = 3;

   const indexOfLastJob = currentPage * jobsPerPage;
   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
   const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

   const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <PageTopSection src="img/banner-bg-3creer.jpg" titel="Career" />

      {/* ======job list====== */}
      <section className="jobsection py-[50px]">
        <div className=" mx-auto py-[30px] text-center w-[40%]">
          <h3 className="titel ">Career</h3>

          <h1 className="section_titel">
            When You Have Jobs In Multiple <span>Locations</span>
          </h1>
        </div>
        <div className="container">
          {currentJobs.map((job, index) => (
            <div
              key={index}
              className="bg-white border border-[#f0ead4] rounded-2xl p-6 mb-6 flex justify-between items-center"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
                <p className="text-gray-600 md:w-[66%] mb-4">
                  {job.description}
                </p>
                <div className="text-sm text-gray-700">
                  <span className="font-semibold text-orange-500">
                    Location:
                  </span>{" "}
                  {job.location} &nbsp;
                  <span className="font-semibold text-orange-500">
                    Type:
                  </span>{" "}
                  {job.type}
                </div>
              </div>
              <button className="button cursor-pointer">Get Started</button>
            </div>
          ))}

          <div className="flex justify-center items-center space-x-2 mt-4">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-full ${
                currentPage === 1 ? "text-gray-400" : "text-black"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-arrow-left-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
              </svg>
            </button>
            {[...Array(Math.ceil(jobs.length / jobsPerPage)).keys()].map(
              (number) => (
                <button
                  key={number + 1}
                  onClick={() => paginate(number + 1)}
                  className={`w-[35px] h-[35px]  rounded-full ${
                    currentPage === number + 1
                      ? "bg-orange-400 text-white"
                      : "text-purple-800 border border-purple-800"
                  }`}
                >
                  {number + 1}
                </button>
              )
            )}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(jobs.length / jobsPerPage)}
              className={`p-2 rounded-full ${
                currentPage === Math.ceil(jobs.length / jobsPerPage)
                  ? "text-gray-400"
                  : "text-black"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
