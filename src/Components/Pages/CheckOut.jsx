import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthBox/Authprovider";

const CheckOut = () => {

    const { user } = useContext(AuthContext);

  const services = useLoaderData();
  const { _id, img, price, title } = services || {};

  const handleServices = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;

    const bookingInfo = {name, date, email, services_id: _id, price, img};
    console.log(bookingInfo);


    fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(bookingInfo)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            alert('service booked')
        }
    })

  }


  return (
    <div>
      <h1>{title}</h1>
      <div>
        <form onSubmit={handleServices} className="p-24 text-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            <div>
              <label>Name</label>
              <input
                className="w-full p-1 rounded-md border"
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={user?.displayName}
              />
            </div>
            <div>
              <label>Date</label>
              <input
                className="w-full p-1 rounded-md border"
                type="date"
                placeholder="Date"
                name="date"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                className="w-full p-1 rounded-md border"
                type="email"
                placeholder="example@gmail.com"
                name="email"
                defaultValue={user?.email}
              />
            </div>
            <div>
              <label>Dew Amount</label>
              <input
                className="w-full p-1 rounded-md border"
                type="number"
                placeholder={"$"+price}
                name="price"
              />
            </div>
          </div>

          <div className="space-y-4 mt-5">
            <div>
              <textarea
                className="border w-full p-2 rounded-md"
                placeholder="Your Message"
                name=""
                id=""
                cols="10"
                rows="5"
              ></textarea>
            </div>
            <div>
              <input
                className="bg-orange-600 btn hover:bg-yellow-400 hover:text-black w-full col-span-2 rounded-md p-2 text-white font-bold"
                type="submit"
                value="Order Confirm"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
