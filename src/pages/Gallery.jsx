

export default function Gallery() {
  return (
    <>
      <section className="mt-[120px]">
        <div className="container my-5 md:my-[50px] ">
          <div className="mx-auto  text-center md:w-[100%] lg:w-[60%] pb-10">
            <h3 className="titel">Gallery</h3>
            <h2 className="section_titel">
              Explore Our <span>Gallery</span>
            </h2>
            <p className="praghraph">
              A glimpse of our creative work and inspiring moments. Would you
              like a more specific style or theme? I can customize it for your
              project!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="imgitem">
              <img
                src="/img/gallery-1.jpg"
                alt="Image 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="imgitem">
              <img
                src="/img/gallery-2.jpg"
                alt="Image 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="grid my-5 md:grid-cols-3 gap-4">
            <div className="imgitem">
              <img
                src="/img/gallery-3.jpg"
                alt="Image 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="imgitem">
              <img
                src="/img/gallery-4.jpg"
                alt="Image 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="imgitem">
              <img
                src="/img/gallery-5.jpg"
                alt="Image 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="grid my-5 md:grid-cols-2 gap-4">
            <div className="imgitem">
              <img
                src="/img/gallery-6.jpg"
                alt="Image 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="imgitem">
              <img
                src="/img/gallery-7.jpg"
                alt="Image 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
