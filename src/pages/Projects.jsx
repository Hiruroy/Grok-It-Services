import PageTopSection from "./PageTopSection";
import { useEffect, useRef, useState } from "react";
import mixitup from "mixitup";

export default function Project() {
  const containerRef = useRef(null);
  const mixerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { name: "All", filter: "all" },
    { name: "Mobile App", filter: ".mobile" },
    { name: "Development", filter: ".development" },
    { name: "Web Design", filter: ".web" },
    { name: "Product Design", filter: ".product" },
  ];

  useEffect(() => {
    if (mixerRef.current) {
      mixerRef.current.destroy();
    }

    if (containerRef.current) {
      mixerRef.current = mixitup(containerRef.current);
    }

    return () => {
      if (mixerRef.current) {
        mixerRef.current.destroy();
      }
    };
  }, []);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    if (mixerRef.current) {
      mixerRef.current.filter(filter === "all" ? "all" : filter);
    }
  };

  return (
    <>
      <PageTopSection src="img/banner-bg-3.jpg" titel="Projects" />
<section>

      <div className="container">
        <div className="md:w-[50%] text-center mx-auto md:pb-[30px] md:pt-[80px]">
          <span className="titel">PROJECTS</span>
          <h2 className="section_titel">
            Our Latest <span>Incredible</span> Client's Projects
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center space-x-6 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.filter}
              className={`px-4 py-2 rounded-full transition duration-300 text-[15px] font-[600] cursor-pointer ${
                activeFilter === cat.filter
                  ? "bg-[radial-gradient(#a66bff,#c666ef,#dd62df,#ee61cf,#fb64bf)] text-[18px] text-white"
                  : "bg-white text-black shadow-2xl"
              }`}
              onClick={() => handleFilter(cat.filter)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Filter Items */}
        <div
          ref={containerRef}
          className="grid md:px-[250px] grid-cols-1  md:grid-cols-3 gap-1 md:gap-6"
        >
          <div className="mix mobile development web">
            <img src="img/pageprojects-5.jpg" alt="Mobile App" />
            <img src="img/pageprojects-2.jpg" alt="Mobile App" />
          </div>

          <div className="mix development product ">
            <img src="img/pageprojects-3.jpg" alt="Development" />
          </div>

          <div className="mix mobile web product">
            <img src="img/pageprojects-4.jpg" alt="Web Design" />
            <img src="img/pageprojects-5.jpg" alt="Web Design" />
          </div>
        </div>
      </div>
</section>
{/* ============= */}

    </>
  );
};


