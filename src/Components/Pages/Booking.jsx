/* eslint-disable react/prop-types */

const Booking = ({ booking, bookings, setBookings }) => {
  const { _id, name, date, price, img, email, status } = booking || {};

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure its delete");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Delete Succesfull");
            const remaining = bookings.filter((book) => book._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleConfirme = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Confirmed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaing = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "Confirmed";
          const newBooking = [updated, ...remaing];
          setBookings(newBooking);
        }
      });
  };

  return (
    <div>
      <section>
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              <tr>
                <th>
                  <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-24 h-12">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                      </div>
                    </div>
                    <div>{name && <div className="font-bold">{name}</div>}</div>
                  </div>
                </td>
                <td>
                  {date}
                  <h1> {email}</h1>
                </td>
                <td>
                  <span>$</span>
                  {price}
                </td>
                <th>
                  {
                    status === 'Confirmed' ? <button className="btn bg-green-500">Confirmed</button>
                    :
                    <button onClick={() => handleConfirme(_id)} className="btn bg-red-500 text-white">
                    Pending
                  </button>
                  }
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Booking;
