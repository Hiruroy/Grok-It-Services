import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  const features = [
    {
      img: "/img/choose-1.png",
      title: "Mobile Apps",
      description:
        "Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.",
    },
    {
      img: "/img/choose-2.png",

      title: "Branding Strategy",
      description:
        "Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.",
    },
    {
      img: "/img/choose-3.png",

      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.",
    },
    {
      img: "/img/choose-4.png",

      title: "Search Optimization",
      description:
        "Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.",
    },
  ];
  const projects = [
    {
      img: "/img/projects-1.jpg",
      title: "3D Animation",
      link: "View More",
    },
    {
      img: "/img/projects-2.jpg",

      title: "Online Banking Software",
      link: "View More",
    },
    {
      img: "/img/projects-3.jpg",

      title: "Cashier Software",
      link: "View More",
    },
    {
      img: "/img/projects-4.jpg",

      title: "Analytics Software",
      link: "View More",
    },
    {
      img: "/img/projects-5.jpg",

      title: "Messaging App",
      link: "View More",
    },
    {
      img: "/img/projects-3.jpg",

      title: "Analytics Software",

      link: "View More",
    },
  ];

  const blogitem = [
    {
      img: "/img/blog-1.jpg",
      title: "How Technology Dominate In The new World In 2024",
      pra: "Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.",
      date: "7th July, 2024",
    },
    {
      img: "/img/blog-1.jpg",
      title: "How Technology Dominate In The new World In 2024",
      pra: "Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.",
      date: "28th Feb, 2025",
    },
    {
      img: "/img/blog-2.jpg",
      title: "Top 10 Most Famous Technology Trend In 2024",
      pra: "Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.",
      date: "27th Feb, 2025",
    },
  ];

  const testimonials = [
    {
      name: "Herry Hopper",
      team: "Solit Team",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonummy eirmod.",
      image: "/img/testimonials-1.jpg",
    },
    {
      name: "Daniel John",
      team: "Spix Team",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonummy eirmod.",
      image: "/img/testimonials-2.jpg",
    },
    {
      name: "Zinnia",
      team: "Coze Team",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonummy eirmod.",
      image: "/img/testimonials-3.jpg",
    },
  ];

  return (
    <>
      {/* -------hero section-------- */}
      <section className="bg-black overflow-hidden mt-[90px]">
        <div className="container ">
          <div className="grid text-center min-h-[calc(100vh-90px)] md:text-left items-center grid-cols-1 md:grid-cols-[50%_50%] xl:grid-cols-[60%_40%] lg:grid-cols-[55%_40%] gap-[25px]">
            <div
              className="banner_content  twhite py-5 "
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <span className="titel">
                WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY
              </span>
              <h1 className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[100px] text-white py-3 md:py-8 font-[900] leading-[50px] md:leading-[120%] ">
                Best IT Services<br></br> For Your Business
              </h1>
              <p className="text-[20px] leading-[30px] md:leading-[40px] text-balance text-[#cecbde]">
                We are leading technology solutions providing company all over
                the world doing over 40 years. Lorem ipsum dolor sit amet
                consetetur sadipscing elitr sed diam nonumy eirmod tempor.
              </p>

              <img
                className="w-[100%] md:hidden mt-5  m-auto md:w-full"
                src="/img/banner.png"
                alt="banner"
              />
              <Link to="/contact" className="button mt-5">
                <span>Get Started</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </Link>
            </div>
            <div className="banner_img" data-aos="fade-left">
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={900}
                scale={1}
                transitionSpeed={5000}
              >
                <img
                  className="w-[90%] hidden md:block  m-auto md:w-full"
                  src="/img/banner.png"
                  alt="banner"
                />
              </Tilt>
            </div>
          </div>
        </div>
      </section>

      {/* =====card section======== */}
      <section className="cardsection ">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3   w-[100%] flex-wrap -translate-y-4 md:-translate-y-12 lg:-translate-y-8   gap-6">
            <div className="carditem  p-5 rounded-2xl items-center gap-5 flex ">
              <img
                className="w-[100px] h[100px]  "
                src="/img/features-1.png"
                alt="card"
              />
              <div className="cardcontanet">
                <h2 className="text-2xl font-bold "> Product Design</h2>
                <p className="text-lg mt-2">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed.
                </p>
              </div>
            </div>

            <div className="carditem  p-5 rounded-2xl items-center gap-5 flex ">
              <img
                className="w-[100px] h[100px]  "
                src="/img/features-2.png"
                alt="card"
              />
              <div className="cardcontanet">
                <h2 className="text-2xl font-bold "> Development</h2>
                <p className="text-lg mt-2">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed.
                </p>
              </div>
            </div>

            <div className="carditem  p-5 rounded-2xl items-center gap-5 flex ">
              <img
                className="w-[100px] h[100px]  "
                src="/img/features-3.png"
                alt="card"
              />
              <div className="cardcontanet">
                <h2 className="text-2xl font-bold "> Data Analysis</h2>
                <p className="text-lg mt-2">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =====about section======== */}
      <section className="aboutsection overflow-hidden mt-6 md:mt-[50px]">
        <div className="container">
          <div className="grid text-center  md:text-left justify-between items-center grid-cols-1 md:grid-cols-[44%_45%] gap-[50px]">
            <div
              className="aboutimg hidden md:block"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              <img
                className="w-[90%] m-auto md:w-full"
                src="/img/about.png"
                alt="banner"
              />
            </div>
            <div
              className="about_content"
              data-aos-delay="100"
              data-aos="fade-up"
            >
              <span className="titel">WHO WE ARE</span>
              <h1 className="section_titel">
                We Are <span>All In One</span> IT Solution & Technology Company
              </h1>
              <p className="praghraph ">
                We are leading technology solutions providing company all over
                the world doing over 40 years lorem ipsum dolor sit amet.
                <br></br>
                <br></br>
                We are leading technology solutions providing company all over
                the world doing over 40 years. Lorem ipsum dolor sit amet
                consetetur sadipscing elitr sed diam non umy eirmod tempor
                invidunt ut labore.
              </p>
              <img
                className="w-[90%] md:hidden my-3   m-auto md:w-full"
                src="/img/about.png"
                alt="banner"
              />
              <Link to="/about" className="button mt-5">
                <span>Know More About Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* -======services====--- */}
      <section className="services overflow-hidden mt-[50px]  ">
        <div className="mx-4 rounded-2xl py-5  bg-black overflow-hidden">
          <div className="container !md:mr-0">
            <div className="grid md:py-[130px] text-center  md:text-left justify-between items-center grid-cols-1 md:grid-cols-[50%_50%] lg:grid-cols-[40%_70%] gap-[25px]">
              <div className="service_content">
                <span className="titel">SERVICES</span>
                <h1 className="section_titel !text-white">
                  We Provide the Best Quality <span>Services</span>
                </h1>
                <p className="text-[#dcdcdc] text-xl leading-[30px] md:w-[70%]">
                  We are technology solutions providing company all over the
                  world doing over 40 years.
                </p>

                <Link to="/services" className="button mt-5">
                  <span>Explore All Services</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </Link>
              </div>
              <div className="servicesslider">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={20}
                  centeredSlides={true}
                  pagination={{ clickable: true }}
                  loop={true}
                  breakpoints={{
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 2.5 },
                  }}
                  className="!pb-[57px] !pt-10 !md:pr-5"
                >
                  <SwiperSlide className="services_slideritem">
                    <div className=" text-white ">
                      <img src="/img/services-4.jpg" alt="services_img" />
                      <h2 className="text-2xl to-white font-[800] pt-4">
                        Analytic Solutions
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <Link
                        to="/services"
                        className="text-yellow-500 font-black"
                      >
                        View More
                      </Link>
                    </div>
                  </SwiperSlide>
                  {/* ====slideritem======= */}
                  <SwiperSlide className="services_slideritem">
                    <div className=" text-white ">
                      <img src="/img/services-1.jpg" alt="services_img" />
                      <h2 className="text-2xl to-white font-[800] pt-4">
                        Software Development
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <Link
                        to="/services"
                        className="text-yellow-500 font-black"
                      >
                        View More
                      </Link>
                    </div>
                  </SwiperSlide>
                  {/* ====slideritem======= */}
                  <SwiperSlide className="services_slideritem ">
                    <div className=" text-white ">
                      <img src="/img/services-2.jpg" alt="services_img" />
                      <h2 className="text-2xl to-white font-[800] pt-4">
                        App Development
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <Link
                        to="/services"
                        className="text-yellow-500 font-black"
                      >
                        View More
                      </Link>
                    </div>
                  </SwiperSlide>
                  {/* ====slideritem======= */}
                  <SwiperSlide className="services_slideritem ">
                    <div className=" text-white ">
                      <img src="/img/services-3.jpg" alt="services_img" />
                      <h2 className="text-2xl to-white font-[800] pt-4">
                        Web Development
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <Link
                        to="/services"
                        className="text-yellow-500 font-black"
                      >
                        View More
                      </Link>
                    </div>
                  </SwiperSlide>
                  {/* ====slideritem======= */}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --==WHY CHOOSE US===-- */}
      <section className="py-16 overflow-hidden bg-[url(/img/choose-shape.png)] bg-[100%]">
        <div className="container  ">
          <div className="mx-auto  text-center md:w-[100%] lg:w-[60%] pb-10">
            <h3 className="titel">WHY CHOOSE US</h3>
            <h2 className="section_titel">
              We Help You To <span className="text-pink-500">Increase</span>{" "}
              Your Sale Through Solutions
            </h2>
            <p className="praghraph">
              We are leading technology solutions providing company all over the
              world doing over 40 years lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="whychoose_section bg-slate-50 p-3 rounded-2xl text-center md:text-left"
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-auto mx-auto md:mx-0"
                />
                <h4 className="text-2xl font-[800] py-3 md:py-5">
                  {feature.title}
                </h4>
                <p className="praghraph ">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --==videopopup section===-- */}
      <section className="md:pt-16 overflow-hidden w-full  ">
        <div className="container  ">
          {/* Thumbnail Image */}
          <div className="relative   cursor-pointer w-full">
            <img
              src="/img/video.jpg"
              alt="Video Thumbnail"
              className="rounded-[30px]  object-cover md:h-[500px] w-[100%] border-[11px] border-[white]"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-30 h-30 bg-[#36c790fd] rounded-full flex items-center justify-center">
                <svg
                  onClick={() => setShowPopup(true)}
                  className="w-15 h-15 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-6.489-3.74A1 1 0 007 8.194v7.612a1 1 0 001.263.962l6.489-3.74a1 1 0 000-1.778z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Video Popup */}
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-[#000000ba] bg-opacity-80 z-50 ">
              <div className="relative w-full max-w-4xl">
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute -top-15 right-0 text-black text-4xl cursor-pointer"
                >
                  ❌
                </button>

                <iframe
                  className="w-full aspect-video rounded-lg"
                  src={videoUrl}
                  title="YouTube Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* -======Project====--- */}
      <section className="Project overflow-hidden -mt-[100px]">
        <div className="mx-4 rounded-2xl pt-10 pb-5  bg-black overflow-hidden">
          <div className="container !md:mr-0">
            <div className="project_content mx-auto lg:w-[40%] text-center pb-15 pt-25">
              <span className="titel">PROJECTS</span>
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

      {/* --==TESTIMONIALS===-- */}
      <section className=" testimonial overflow-hidden my-5 md:my-[100px]">
        <div className="container overflow-hidden">
          <div className=" grid gap-3  md:grid-cols-2 items-center">
            {/* Left Section (Text) */}
            <div
              className="text-center md:text-left "
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="500"
            >
              <p className="titel">TESTIMONIALS</p>
              <h1 className="section_titel">
                Some <span>Sweet Talk</span> Of Our Happy Clients
              </h1>
              <p className="praghraph md:w-[70%]">
                We are leading technology solutions providing company all over
                the world doing over 40 years lorem ipsum dolor sit amet.
                <br></br>
                <br></br>
                We are leading technology solutions providing company all over
                the world doing over 40 years. lorem ipsum dolor sit amet
                consetetur.
              </p>
              <Link to="/contact" className="button mt-5  ">
                <span>Know More About Us </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </Link>
            </div>

            <div className=" grid  grid-cols-1 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-duration="500"
                  key={index}
                  className="  p-6 rounded-lg border-[1px] border-[#e8e7e7] flex items-center gap-4"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-[100px] rounded-full"
                  />
                  <div>
                    <p className="text-[18px] text-[#5e5d5d]">
                      {testimonial.quote}
                    </p>
                    <p className="font-[600] text-[#8b27d7] mt-2 text-[17px]">
                      {testimonial.name},
                      <span className="text-[#a8a7a7] text-[15px] ps-2 font-[400]">
                        {testimonial.team}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --==ARTICLE===-- */}
      <section className="overflow-hidden md:py-16 bg-[url(/img/choose-shape.png)] bg-[100%]">
        <div className="container  ">
          <div className="mx-auto  text-center md:w-[100%] lg:w-[70%] pb-10">
            <h3 className="titel">ARTICLE</h3>
            <h2 className="section_titel">
              Read Our Blog To Get All<br></br> Recent Tech<span> News</span>
            </h2>
          </div>

          <div className="container">
            <div className="px-3 md:px-0 new_slider">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                pagination={{ clickable: true }}
                loop={true}
                navigation={true}
                speed={800}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  567: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                }}
                className="!pb-[130px] !pt-5 !md:pl-[17px]  !md:pr-5"
              >
                {blogitem.map((projectcon, indexx) => (
                  <SwiperSlide key={indexx} className="news_slideritem">
                    <div className="grid gap-5 items-center md:grid-cols-2">
                      <div className="left">
                        <img
                          className="rounded-3xl"
                          src={projectcon.img}
                          alt={projectcon.title}
                        />
                      </div>
                      <div className="right">
                        <p className="bg-white rounded-full shadow-2xl inline-block p-3">
                          {" "}
                          {projectcon.date}
                        </p>
                        <h2 className="lg:text-2xl md:text-xl to-white font-[800] pt-8 pb-5 ">
                          {projectcon.title}
                        </h2>
                        <p className="text-[18px] md:py-5 text-[#636363] text-balance">
                          {projectcon.pra}
                        </p>

                        <Link className="text-[#ff8800] text-[17px]" to="/blog">
                          View More
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* =====end========= */}
      {/* =====end========= */}
    </>
  );
}
