import { useEffect, useState } from "react";
import ServicesCategory from "./ServicesCategory";

/* eslint-disable react/no-unescaped-entities */
const Services = () => {

    const [services, setScervisec] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setScervisec(data)
        })
    }, [])

  return (
    <div>
      <div className="font-bold text-center space-y-3">
        <h1 className="text-5xl">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected humour, or randomised
          words which don't look even slightly believable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {
            services.map( service => <ServicesCategory key={service._id} service={service} />)
        }
      </div>
    </div>
  );
};

export default Services;
