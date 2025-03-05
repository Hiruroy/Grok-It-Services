import React from 'react'

export default function PageTopSection({titel,src}) {
  return (
    <>
      <section className="mt-[90px] page_top_section">
        <div
          className="cntentheader h-[150px] md:h-[500px] bg-cover"
          style={{ backgroundImage: `url(${src})` }}
        >
          <div className="container  h-[100%] flex items-center justify-center md:justify-start">
            <h1 className="text-white text-[30px] md:text-6xl font-bold ">
              {titel}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
