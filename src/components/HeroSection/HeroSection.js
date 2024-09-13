import React from "react";
import { ReactComponent as RockeImage } from "../../assets/RocketImage.svg";
import { ReactComponent as AIicon } from "../../assets/AI-Icon.svg";
import { ReactComponent as UserIcon } from "../../assets/userIcon.svg";
import { ReactComponent as HeartRobo } from "../../assets/heartRobo.svg";
import { useNavigate } from "react-router-dom";
import { cardData } from "../../data/cartData";
import Filter from "../Filters/Filters";
import HackathonList from "../HackathonList";
import "./HeroSection.css";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
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
                cursor: "pointer",
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
      <div
        style={{
          background: "#002A3B",
          height: "200px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", paddingLeft: "30px" }}
        >
          <div style={{ marginRight: "20px" }}>
            <AIicon />
          </div>
          <div>
            <div style={{ fontSize: "24px", fontWeight: "700" }}>100K+</div>
            <div>AI model submission</div>
          </div>
        </div>
        <div className="divider"></div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "20px" }}>
            <UserIcon />
          </div>
          <div>
            <div style={{ fontSize: "24px", fontWeight: "700" }}>50K+</div>
            <div>Data Scientists</div>
          </div>
        </div>

        <div className="divider"></div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "20px" }}>
            <HeartRobo />
          </div>
          <div>
            <div style={{ fontSize: "24px", fontWeight: "700" }}>100+</div>
            <div>AI Challenges Hosted</div>
          </div>
        </div>
      </div>

      <div style={{ padding: "60px", background: "#FFFFFF" }}>
        <div variant="h4" className="sectionTitle">
          Why Participate in{" "}
          <span style={{ color: "#0FA958" }}>AI Challenges?</span>
        </div>

        <div className="cartContainer">
          {cardData.map((card, index) => (
            <div item xs={12} md={5} key={index}>
              <div className="card">
                <div>
                  <div className="icon">{card.icon}</div>
                  <div variant="h6" className="title">
                    {card.title}
                  </div>
                  <div className="description">{card.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Filter />
        <HackathonList />
      </div>
    </>
  );
}

export default HeroSection;
