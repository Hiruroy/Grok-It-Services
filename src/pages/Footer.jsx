import React from 'react'
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      {/* =====footer========= */}

      <section className="mx-2 pt-5 overflow-hidden  md:pt-30  mb-2 rounded-2xl  bg-black text-white  px-6 ">
        <div className="container  grid grid-cols-1 md:grid-cols-[25%_40%_25%] justify-between gap-1">
          {/* Brand Section */}
          <div>
            <div className='text-center md:text-left'>
              <h2 className="text-2xl font-bold flex items-center justify-center md:justify-start space-x-2">
                <img src="/img/logo.png" alt="logo" />
                <span>Grok</span>
              </h2>
              <p className="mt-4 text-gray-400 leading-[150%] text-[18px] text-balance">
                Lorem ipsum dolor sit amet consetetur sadi scing elitr sed diam
                nonumy.
              </p>
            </div>
            <div className="flex space-x-4 mt-6 ">
              <Link to="#" className="text-purple-400">
                facebook
              </Link>
              <Link to="#" className="text-purple-400">
                Instagram
              </Link>
              <Link to="#" className="text-purple-400">
                Youtube
              </Link>
              <Link to="#" className="text-purple-400">
                Linkdin
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 py-4 md:py-0 justify-between w-full">
            {/* Links Section */}
            <div>
              <h3 className="text-2xl lead font-semibold mb-4">Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/about" className="hover:text-purple-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-purple-400">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="hover:text-purple-400">
                    News
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-purple-400">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-purple-400">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Pages Section */}
            <div>
              <h3 className="text-2xl lead font-semibold mb-4">Pages</h3>
              <ul className="space-y-2  text-gray-400">
                <li>
                  <Link to="/contact" className="hover:text-purple-400">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/purchase-guide" className="hover:text-purple-400">
                    Purchase Guide
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" className="hover:text-purple-400">
                    FAQ's
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-purple-400">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-purple-400">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="w-full">
            <h3 className="text-2xl lead font-semibold mb-4">
              Subscribe Newsletter
            </h3>
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-5 px-3  rounded-lg bg-[#3b0267] placeholder-gray-300 border-none focus:outline-none"
              />
              <button className="button justify-center ">Subscribe</button>
            </div>
          </div>
        </div>
        <p className="text-center text-[15px]  pt-10 pb-5 text-[#787878]">
            <Link>
          © 2025 GROK IT SERVICE PVT LTD
            </Link>
        </p>
      </section>

      {/* =====end========= */}
    </>
  );
}
