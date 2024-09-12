import React from "react";
import { ReactComponent as RockeImage } from "../assets/RocketImage.svg";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        top: "100px",
      }}
    >
      <div
        style={{
          background: "#FFCE5C",
          width: "10px",
          height: "116px",
          marginRight: "60px",
          marginLeft: "50px",
        }}
      ></div>

      <div style={{ width: "643px", height: "346px" }}>
        <div
          style={{
            fontSize: "48px",
            fontWeight: "700",
            marginBottom: "30px",
            textAlign: "left",
          }}
        >
          Accelerate Innovation with Global AI Challenges
        </div>
        <div
          style={{
            fontSize: "18px",
            fontWeight: "400",
            marginBottom: "30px",
            textAlign: "left",
          }}
        >
          AI Challenges at DPhi simulate real-world problems. It is a great
          place to put your AI/Data Science skills to test on diverse datasets
          allowing you to foster learning through competitions.
        </div>
        <div>
          <button
            style={{
              width: "200px",
              height: "50px",
              borderRadius: "10px",
              background: "#FFFFFF",
              fontSize: "18px",
              fontWeight: "600",
            }}
            onClick={() => navigate("/create")}
          >
            Create Challenge
          </button>
        </div>
      </div>

      <div>
        <div>
          <RockeImage width={"300px"} height={"320px"} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
