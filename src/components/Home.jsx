import React from "react";
import "./Services.css";
import home1 from "/assets/home1.jpg";
import home2 from "/assets/home2.jpg";
import home3 from "/assets/home3.jpg";
import home4 from "/assets/home4.jpg";
import home5 from "/assets/home5.jpg";
import home6 from "/assets/home6.jpg";

const Home = () => {
  return (
    <section className="bg-white py-8">
      <h2 className="text-black font-bold mb-6 text-[30px] font-medium opacity-80 text-center font-sfPro not-italic leading-[1.366]">
        Your Dream Home
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative">
        {/* Image 1 */}
        <div className="overflow-hidden">
          <img
            src={home1}
            alt="Dream Home 1"
            className="image-full object-cover transform hover:scale-125 hover:z-10  transition-transform duration-300"
          />
        </div>

        {/* Image 2 */}
        <div className="overflow-hidden">
          <img
            src={home2}
            alt="Dream Home 2"
            className="image-full object-cover transform hover:scale-125 hover:z-10  transition-transform duration-300"
          />
        </div>

        {/* Image 3 */}
        <div className="overflow-hidden">
          <img
            src={home3}
            alt="Dream Home 3"
            className="image-full object-cover transform hover:scale-125 hover:z-10  transition-transform duration-300"
          />
        </div>

        {/* Image 4 */}
        <div className="overflow-hidden">
          <img
            src={home4}
            alt="Dream Home 4"
            className="image-full object-cover transform hover:scale-125 hover:z-10  transition-transform duration-300"
          />
        </div>

        {/* Image 5 */}
        <div className="overflow-hidden">
          <img
            src={home5}
            alt="Dream Home 5"
            className="image-full object-cover transform hover:scale-125 hover:z-10  transition-transform duration-300"
          />
        </div>

        {/* Image 6 */}
        <div className="overflow-hidden">
          <img
            src={home6}
            alt="Dream Home 6"
            className="image-full object-cover transform hover:scale-125 hover:z-10  transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
