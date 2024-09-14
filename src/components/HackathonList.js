import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { ReactComponent as RightArrow } from "../assets/rightArrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchHackathon } from "../features/hackathonSlice";
import { Link } from "react-router-dom";

function HackathonList() {
  const { filteredHackathons } = useSelector((state) => state.hackathons);
  const [timeRemaining, setTimeRemaining] = useState({});
  const dispatch = useDispatch();

  // Helper function to calculate time remaining
  const getTimeRemaining = (endDate) => {
    const total = new Date(endDate) - new Date();
    if (total <= 0) return null; // Event has passed
    // Calculate the time remaining from a total milliseconds value
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
  };

  // Helper function to determine the hackathon status based on the dates
  const getStatus = (startDate, endDate) => {
    const today = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (end < today) {
      return "past";
    } else if (start <= today && end >= today) {
      return "active";
    } else if (start > today) {
      return "upcoming";
    }
    return null;
  };

  useEffect(() => {
    // Set up an interval to regularly update the time remaining for each filtered hackathon
    const interval = setInterval(() => {
      setTimeRemaining(
        filteredHackathons.reduce((acc, hackathon) => {
          const status = getStatus(hackathon.startDate, hackathon.endDate);

          // Only update time remaining for active or upcoming hackathons
          if (status === "active" || status === "upcoming") {
            acc[hackathon.id] = getTimeRemaining(
              status === "active" ? hackathon.endDate : hackathon.startDate
            );
          }
          return acc;
        }, {})
      );
    }, 1000);

    return () => clearInterval(interval); // Clear the interval on unmount
  }, [filteredHackathons]);

  useEffect(() => {
    dispatch(fetchHackathon());
  }, [dispatch]);

  // console.log(hackathons);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "50px",
        marginTop: "70px",
        marginBottom: "50px",
      }}
    >
      {filteredHackathons &&
        filteredHackathons.map((hackathon) => {
          const status = getStatus(hackathon.startDate, hackathon.endDate);

          return (
            <Link
              to={`/details/${hackathon.id}`}
              key={hackathon.id}
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  width: "300px",
                  height: "400px",
                  borderRadius: "15px",
                  cursor: "pointer",
                }}
              >
                <CardActionArea>
                  {/* First: Display Image */}
                  <CardMedia
                    component="img"
                    height="150"
                    image={hackathon.image}
                    alt={hackathon.name}
                    sx={{ paddingBottom: "20px" }}
                  />

                  {/* Third: Display Status (Upcoming, Active, Past) */}
                  {status === "active" && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          background: "green",
                          textAlign: "center",
                          width: "100px",
                          height: "21px",
                          borderRadius: "5px",
                          color: "#fff",
                        }}
                      >
                        Active
                      </Typography>
                    </div>
                  )}

                  {status === "upcoming" && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          background: "#b4a107",
                          textAlign: "center",
                          width: "100px",
                          height: "21px",
                          borderRadius: "5px",
                          color: "#fff",
                        }}
                      >
                        Upcoming
                      </Typography>
                    </div>
                  )}

                  {status === "past" && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          background: "#e56023",
                          textAlign: "center",
                          width: "100px",
                          height: "21px",
                          borderRadius: "5px",
                          color: "#fff",
                        }}
                      >
                        Past
                      </Typography>
                    </div>
                  )}

                  <CardContent sx={{ height: "auto" }}>
                    {/* Second: Display Event Name */}
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "16px",
                        lineHeight: "26px",
                        fontWeight: "600",
                        padding: "10px",
                      }}
                    >
                      {hackathon.name}
                    </Typography>

                    {/* Fourth: Display Start/End Time Remaining */}
                    {status === "active" && timeRemaining[hackathon.id] && (
                      <div
                        style={{
                          color: "#444444",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        End On
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#454545",
                            textAlign: "center",
                            marginTop: "5px",
                            fontWeight: "700",
                            fontSize: "18px",
                            lineHeight: "28px",
                          }}
                        >
                          {timeRemaining[hackathon.id].days}d :{" "}
                          {timeRemaining[hackathon.id].hours}h :{" "}
                          {timeRemaining[hackathon.id].minutes}m :{" "}
                          {timeRemaining[hackathon.id].seconds}s
                        </Typography>
                      </div>
                    )}

                    {status === "upcoming" && timeRemaining[hackathon.id] && (
                      <div
                        style={{
                          color: "#444444",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        Starts In
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#454545",
                            textAlign: "center",
                            marginTop: "5px",
                            fontWeight: "700",
                            fontSize: "18px",
                            lineHeight: "28px",
                          }}
                        >
                          {timeRemaining[hackathon.id].days}d :{" "}
                          {timeRemaining[hackathon.id].hours}h :{" "}
                          {timeRemaining[hackathon.id].minutes}m :{" "}
                          {timeRemaining[hackathon.id].seconds}s
                        </Typography>
                      </div>
                    )}

                    {/* Fifth: Button for Participation */}
                    <div
                      style={{
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        style={{
                          background: "#44924C",
                          padding: "10px",
                          borderRadius: "10px",
                          border: "none",
                          width: "185px",
                          color: "#FFFFFF",
                          fontWeight: "600",
                          display: "flex",
                          justifyContent: "center",
                          gap: "8px",
                          cursor: "pointer",
                        }}
                      >
                        <RightArrow /> Participate Now
                      </button>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          );
        })}
    </div>
  );
}

export default HackathonList;
