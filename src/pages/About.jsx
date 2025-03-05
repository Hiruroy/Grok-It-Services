import { Link } from "react-router-dom";

import PageTopSection from "./PageTopSection";

export default function About() {
  
  const features = [
    {
      img: "img/choose-1.png",
      title: "Mobile Apps",
      description:
        "Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.",
    },
    {
      img: "img/choose-2.png",

      title: "Branding Strategy",
      description:
        "Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.",
    },
    {
      img: "img/choose-3.png",

      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.",
    },
    {
      img: "img/choose-4.png",

      title: "Search Optimization",
      description:
        "Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.",
    },
  ];
  return (
    <>
      <PageTopSection src="img/banner-bg.jpg" titel="About Us" />
      {/* =================== */}
      <section className="aboutsection mt-6 md:mt-[50px]">
        <div className="container">
          <div className="grid text-center  md:text-left justify-between items-center grid-cols-1 md:grid-cols-[44%_45%] gap-[50px]">
            <div className="aboutimg hidden md:block">
              <img
                className="w-[90%]   m-auto md:w-full"
                src="img/about-2.png"
                alt="banner"
              />
            </div>
            <div className="about_content">
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
                src="img/about.png"
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

      {/* =====card section======== */}
      <section className="cardsection my-[100px] ">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3   w-[100%] flex-wrap    gap-6">
            <div className="carditem  p-5 rounded-2xl items-center gap-5 flex ">
              <img
                className="w-[100px] h[100px]  "
                src="img/features-1.png"
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
                src="img/features-2.png"
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
                src="img/features-3.png"
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
      {/* =================== */}
      {/* ========misssion vision=========== */}
      <section className="aboutsection mt-6 md:mt-[50px]">
        <div className="container">
          <div className="grid text-center  md:text-left justify-between items-center grid-cols-1 md:grid-cols-[45%_50%] gap-[50px]">
            <div className="aboutimg ">
              <img
                className="w-[90%] rounded-3xl   m-auto md:w-full"
                src="img/about-5.jpg "
                alt="banner"
              />
            </div>
            <div className="about_content">
              <span className="titel">OUR GOAL</span>
              <h1 className="section_titel">
                Your Trusted Partner For All <br></br>IT Solutions
              </h1>
              <p className="praghraph ">
                We are leading technology solutions providing company all over
                the world doing over 40 years. Lorem ipsum dolor sit amet
                consetetur sadipscing elitre sed diam non umy eirmod tempor
                invidunt ut labore.
              </p>
            </div>
          </div>
          <div className="grid text-center  md:text-left justify-between grid-cols-1 md:grid-cols-[30%_30%_30%] gap-[50px] py-[50px]">
            <div className="about_content">
              <h1 className="font-[800] text-3xl pb-4">Our Vision</h1>
              <p className="praghraph ">
                Lorem ipsum dolor sit amet consetetur sadip scing elitr sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyamei erat sed diam voluptua at vero eos et accusam et
                justo duo.
              </p>

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
            <div className="about_content">
              <h1 className="font-[800] text-3xl pb-4"> Our Mission</h1>
              <p className="praghraph ">
                Lorem ipsum dolor sit amet consetetur sadip scing elitr sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyamei erat sed diam voluptua at vero eos et accusam et
                justo duo.
              </p>
            </div>
            <div className="aboutimg ">
              <img
                className="w-[90%] rounded-3xl   m-auto md:w-full"
                src="img/about-4.jpg"
                alt="banner"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --==WHY CHOOSE US===-- */}
      <section className="py-16 bg-[url(/img/choose-shape.png)] bg-[100%]">
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
    </>
  );
}
