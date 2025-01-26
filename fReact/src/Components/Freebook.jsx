import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Freebook() {
  const [hospital, sethospital] = useState([]); // State for all books
  const [filteredhospital, setFilteredhospital] = useState([]); // State for filtered books

  // Fetch and filter books on component mount
  useEffect(() => {
    const gethospital = async () => {
      try {
        const response = await axios.get("/api/Hospital");
        console.log("response", response.data);

        // Set all books
        sethospital(response.data);

        // Filter books with category 'free' and set filtered books
        const freeBooks = response.data.filter((data) => data.category === "Heart");
        setFilteredhospital(freeBooks); // Store filtered books in state
      } catch (error) {
        console.log(error);
      }
    };

     gethospital(); // Call the fetch function
  }, []); // Empty dependency array ensures it runs once after initial render

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-bold text-xl pb-2 text-center">What Offered Our <span className="text-pink-500">Hospitals:)</span> </h1>
          <p>
          A hospital is a sanctuary of care and healing, providing a range of medical services
           to individuals in need of attention, comfort, and recovery. Whether it's a routine check-up,
            a specialized treatment, or emergency care, hospitals are equipped with state-of-the-art 
            facilities and staffed by dedicated healthcare professionals. They serve as a place where
             people of all ages receive the medical expertise, compassion, and support necessary to improve 
             their health, manage chronic conditions, or recover from illness and injury. Hospitals are not 
             only centers of medical excellence but also pillars
           of hope, offering patients a path to wellness and a renewed sense of well-being.
          </p>
        </div>

        {/* Render the slider only if there are filtered books */}
        <div>
          {filteredhospital.length > 0 ? (
            <Slider {...settings}>
              {filteredhospital.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          ) : (
            <p className="text-center mt-5 mb-5 ">Hospital loading..<span className="loading loading-spinner text-error"></span></p> // Show loading message if no books are available yet
          )}
        </div>
      </div>
    </>
  );
}
