import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ReactComponent as Level } from "../../assets/level.svg";
import style from "./HackathonDetails.module.css";

function HackathonDetails() {
  const { hackathons } = useSelector((state) => state.hackathons);
  const { id } = useParams();

  const hackathon = hackathons.find((data) => data.id === id);
  console.log(hackathon);

  if (!hackathon) {
    return <h1>Not Found!.</h1>;
  }

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.hackathonTime}>{hackathon.endDate}</div>
        <div className={style.hackathonName}>{hackathon.name}</div>
        <div className={style.hackathonDescription}>
          {hackathon.description}
        </div>
        <div className={style.hackathonLevel}>
          <Level />
          {hackathon.level}
        </div>
      </div>
      <div className={style.subNavBar}>
        <div className={style.overViewButton}>
          <div className={style.overViewHead}>Overview</div>
          <div className={style.overViewHighlight}></div>
        </div>
        <div className={style.btnWrapper}>
          <button className={style.btnEdit}>Edit</button>
          <button className={style.btnDelete}>Delete</button>
        </div>
      </div>
      <div className={style.overViewContainer}>
        <div className={style.hackathonOverview}>
          Butterflies are the adult flying stage of certain insects belonging to
          an order or group called Lepidoptera. The word "Lepidoptera" means
          "scaly wings" in Greek. This name perfectly suits the insects in this
          group because their wings are covered with thousands of tiny scales
          overlapping in rows.
          <br />
          <br /> {/* For spacing between paragraphs */}
          An agency of the Governmental Wildlife Conservation is planning to
          implement an automated system based on computer vision so that it can
          identify butterflies based on captured images. As a consultant for
          this project, you are responsible for developing an efficient model.
          <br />
          <br />
          Your task is to build an Image Classification Model using CNN that
          classifies which class of weather each image belongs to.
        </div>
      </div>
    </>
  );
}

export default HackathonDetails;
