import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthBox/Authprovider";
import Booking from "./Booking";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setBookings(res.data));
  }, [url]);

  return (
    <div>
      <h1 className="text-5xl font-bold text-center underline">My Bookings:{bookings?.length}</h1>

      <div className="mt-8">
        {bookings.map((booking) => (
          <Booking
            key={booking._id}
            bookings={bookings}
            setBookings={setBookings}
            booking={booking}
          />
        ))}
      </div>
    </div>
  );
};

export default Bookings;
