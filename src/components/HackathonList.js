import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHackathon } from "../features/hackathonSlice";

function HackathonList() {
  const { hackathons } = useSelector((state) => state.hackathons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHackathon());
  }, [dispatch]);
  console.log(hackathons);

  return (
    <div>
      <h1>Hackathon List</h1>
      {/* <Link to="/create">Create Hackathon</Link> */}
      {hackathons &&
        hackathons.map((hackathon) => (
          <div key={hackathon.id}>
            <h2>{hackathon.name}</h2>
            <p>{hackathon.description}</p>
            {/* <Link to={`/edit/${hackathon.id}`}>Edit</Link> */}
            <button>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default HackathonList;
