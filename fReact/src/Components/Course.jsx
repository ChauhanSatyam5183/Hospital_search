import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Course() {
  const [hospital, sethospital] = useState([]);

  useEffect(() => {
    const gethospital = async () => {
      try {
        const response = await axios.get("/api/Hospital");
        console.log("response", response.data);
        sethospital(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    gethospital();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            Were delighted to have you<span className="text-pink-500"> here! :)</span>
          </h1>

          <p className="mt-12">
            Our hospitals provide top-tier healthcare services designed to meet
            your unique medical needs. Whether youre seeking specialized treatment, routine care, 
            or emergency services, we offer a wide range of options to support your well-being. Each
            facility is equipped with state-of-the-art technology and staffed by experienced medical
            professionals, ensuring that you receive the best care possible. From general health services
            to specialized treatments in cardiology, oncology, orthopedics, and more, our hospitals are 
            committed to delivering compassionate and high-quality care.
          </p>

          <Link to={"/"}>
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              BACK
            </button>
          </Link>
        </div>

        <div className="mt-12">
  {hospital.length > 0 ? (
    // Grid only when data is available
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {hospital.map((item) => (
        <Cards item={item} key={item.id} />
      ))}
    </div>
  ) : (
    // Centered loader
    <div className="flex justify-center   min-h-[10vh]">
      <span className="loading loading-spinner text-error text-4xl"></span>
    </div>
  )}
</div>
      </div>
    </>
  );
}

export default Course;
