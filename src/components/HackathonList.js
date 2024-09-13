import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { ReactComponent as RightArrow } from "../assets/rightArrow.svg";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { fetchHackathon } from "../features/hackathonSlice";

function HackathonList() {
  const { hackathons } = useSelector((state) => state.hackathons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHackathon());
  }, [dispatch]);
  console.log(hackathons);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "50px",
        marginTop: "70px",
      }}
    >
      {hackathons &&
        hackathons.map((hackathon) => (
          <div key={hackathon.id}>
            <Card
              sx={{ maxWidth: 300, maxHeight: "auto", borderRadius: "15px" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="170"
                  image={hackathon.image}
                  alt="green iguana"
                />
                <CardContent sx={{ height: "200px" }}>
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
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", textAlign: "center" }}
                  >
                    <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                      Ended On
                    </Typography>
                    <Typography
                      sx={{
                        marginTop: "20px",
                        fontSize: "18px",
                        color: "black",
                        fontWeight: "600",
                      }}
                    >
                      {hackathon.endDate}
                    </Typography>
                  </Typography>
                  <div
                    style={{
                      marginTop: "35px",
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
                      }}
                    >
                      <RightArrow /> Participate Now
                    </button>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
    </div>
  );
}

export default HackathonList;
