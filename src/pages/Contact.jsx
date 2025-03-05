
import PageTopSection from "./PageTopSection";


export default function Contact() {
  const contactMethods = [
    { title: "Call Us", detail: "+91 743 5333 435" },
    { title: "Email Us", detail: "hicoze@gmail.com" },
    { title: "Tech Support", detail: "+1 (514) 312-5678" },
    { title: "Visit Us", detail: "413 North Las Vegas, NV 89032" },
  ];
  return (
    <>
      <PageTopSection src="img/banner-bg-5.jpg" titel="Contact" />
      {/* ============= */}

      <section className="bg-linear-to-bl py-[70px] from-[#edbefa] to-[#a3cff8] ">
        <div className="container ">
          <div className="flex flex-col md:flex-row justify-between md:px-[100px] md:items-center  relative">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative  "
              >
                {/* Circle with Gradient */}
                <div className="flex  gap-2  items-center ">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ac4efe] to-[#f637ed] flex items-center justify-center"></div>
                  <span className="text-black -translate-x-4 text-[20px] font-bold text-sm">
                    {method.title}
                  </span>
                </div>
                {/* Contact Detail */}
                <p className="mt-4 text-gray-800  font-bold text-[20px]">
                  <a
                    href={`tel:${method.detail.replace(/[^0-9+]/g, "")}`}
                    className="mt-4 text-gray-800 text-sm md:text-base hover:underline"
                  >
                    {method.detail}
                  </a>
                </p>

                {index < contactMethods.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-[100%] h-0.5 bg-black  transform translate-x-[100px]"></div>
                )}
              </div>
            ))}
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
      {/* =======map======== */}
      <section>
        <div className="container my-[20px] md:my-[100px]">
          <div className="w-full h-[250px]  md:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d165982.52865708366!2d87.86912479960962!3d23.18003929058778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1740808694198!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
