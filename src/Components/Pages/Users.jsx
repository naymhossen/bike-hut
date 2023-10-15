import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadUsers = useLoaderData();

  const [users, setusers] = useState(loadUsers)


  const handleDelete = id => {
    fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            alert('Deleted Successfully')
            //remove from user in data UI function
            const remainingusers = users.filter(user => user._id !== id);
            setusers(remainingusers);
        }
    })
  }

  return (
    <div>
      <h2>all daat: {users.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>lastSignin</th>
              <th>lastLoginAt</th>
              <th>Action</th>
            </tr>
          </thead>
          {users.map((user) => (
            <tbody key={user._id}>
              <tr className="bg-base-200">
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.lastLoginAt}</td>
                <td>{user.createAt}</td>
                <td>
                  <button onClick={() => handleDelete(user._id)} className="btn btn-warning">X</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Users;
