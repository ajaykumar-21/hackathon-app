import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  Typography,
  FormControl,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function HackathonEdit() {
  const { id } = useParams();
  const {hackathons} = useSelector((state) => state.hackathons);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hackathon = hackathons.find((h) => h.id === id);
  console.log(hackathon);
//   console.log(hackathon);

  return <></>;
}

export default HackathonEdit;
