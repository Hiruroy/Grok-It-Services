import PageTopSection from "./PageTopSection";
import { useEffect, useRef, useState } from "react";
import mixitup from "mixitup";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Services() {
  const containerRef = useRef(null);
  const mixerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
 const projects = [
   {
     img: "img/projects-1.jpg",
     title: "3D Animation",
     link: "View More",
   },
   {
     img: "img/projects-2.jpg",

     title: "Online Banking Software",
     link: "View More",
   },
   {
     img: "img/projects-3.jpg",

     title: "Cashier Software",
     link: "View More",
   },
   {
     img: "img/projects-4.jpg",

     title: "Analytics Software",
     link: "View More",
   },
   {
     img: "img/projects-5.jpg",

     title: "Messaging App",
     link: "View More",
   },
   {
     img: "img/projects-3.jpg",

     title: "Analytics Software",

     link: "View More",
   },
 ];
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
      <PageTopSection src="img/banner-bg-3.jpg" titel="Services" />

      <div className="container">
        <div className="md:w-[50%] text-center mx-auto md:pb-[30px] md:pt-[80px]">
          <span className="titel">Services</span>
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
      {/* ============== */}
      {/* -======services====--- */}
      <section className="Project ">
        <div className="mx-4 rounded-2xl  pb-5  bg-black overflow-hidden">
          <div className="container !md:mr-0">
            <div className="project_content mx-auto lg:w-[40%] text-center pb-15 pt-15">
              <span className="titel">Services</span>
              <h1 className="section_titel !text-white">
                Our Latest <span>Incredible</span> Client's Projects
              </h1>
              <p className="text-[#dcdcdc] text-xl leading-[30px] ">
                We are technology solutions providing company all over the world
                doing over 40 years.
              </p>
            </div>
          </div>
          <div className="px-3 md:px-0 Project_slider">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={20}
              pagination={{ clickable: true }}
              loop={true}
              navigation={true}
              centeredSlides={true}
              speed={800}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                567: { slidesPerView: 1 },
                768: { slidesPerView: 2.5 },
                1024: { slidesPerView: 4 },
              }}
              className="!pb-[130px] !pt-5  !md:pr-5"
            >
              {projects.map((projectcon, indexx) => (
                <SwiperSlide key={indexx} className="Project_slideritem">
                  <div className=" text-white ">
                    <img src={projectcon.img} alt="services_img" />
                    <h2 className="lg:text-2xl md:text-xl to-white font-[800] pt-8 pb-5 ps-10">
                      {projectcon.title}
                    </h2>

                    <Link
                      to="/services"
                      className="text-yellow-500 ps-10 font-black"
                    >
                      {projectcon.link}
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ===sms from========= */}

      <section className="bg-gray-100 py-[50px]">
        <div className="container mx-auto px-4">
          {/* Main Section */}
          <div className="grid justify-between md:grid-cols-[40%_50%] items-center">
            {/* Image Section */}
            <div>
              <img
                src="img/talk.png"
                alt="People discussing in office"
                className="w-full h-auto  object-cover"
              />
            </div>

            <div>
              <h3 className="titel">Let's Talk</h3>

              <h1 className="section_titel">
                We Would Like<span> To Hear</span> From You Anytime
              </h1>
              {/* Form */}
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border-none p-4 bg-white rounded-[8px] focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full border-none p-4 bg-white rounded-[8px] focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  {/* Subject */}
                  <input
                    type="text"
                    placeholder="Your Subject"
                    className="w-full border-none p-4 bg-white rounded-[8px] focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  {/* Phone */}
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full border-none p-4 bg-white rounded-[8px] focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                {/* Message */}
                <textarea
                  placeholder="Your message..."
                  className="w-full border-none p-4 bg-white rounded-[8px] focus:outline-none focus:ring-2 focus:ring-yellow-500 h-42 resize-none"
                ></textarea>
                {/* Submit Button */}
                <button type="submit" className="button">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
