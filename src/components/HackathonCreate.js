import React, { useState } from "react";
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
import "../App.css";
import { useDispatch } from "react-redux";
import { addHackathon } from "../features/hackathonSlice";
import { useNavigate } from "react-router-dom";

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

function HackathonCreate() {
  const [hackathonDetails, setHackathonDetails] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState("");

  const handleInputChange = (e) => {
    // Update the 'hackathonDetails' state with the new value for the specified input field
    setHackathonDetails({
      ...hackathonDetails, // Spread the current details
      [e.target.name]: e.target.value, // Update the specific field with the new value from the input
    });
  };

  const imageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file)); // Create and store local URL for preview or usage
  };

  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior, dispatch an action to add a new hackathon with the current details,
    // and then navigate to the home page
    e.preventDefault();
    await dispatch(addHackathon(hackathonDetails));
    navigate("/");
  };

  return (
    <>
      <Box
        sx={{
          fontSize: "28px",
          fontWeight: 700,
          lineHeight: "29.05px",
          textAlign: "left",
          background: "#F8F9FD",
          paddingTop: "30px",
          paddingBottom: "30px",
          paddingLeft: "80px",
          color: "black",
        }}
      >
        Challenge Details
      </Box>
      <Box
        sx={{
          width: "auto",
          height: "auto",
          paddingLeft: "80px",
          paddingTop: "30px",
          paddingBottom: "50px",
          background: "#FFFFFF",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "453px",
            height: "auto",
          }}
        >
          {/* Name Field */}
          <Typography style={{ fontWeight: "600", color: "black" }}>
            Challenge Name
          </Typography>
          <TextField
            type="text"
            name="name"
            onChange={handleInputChange}
            className="textField"
            fullWidth
            required
          />

          {/* Start Date Field */}
          <Typography style={{ fontWeight: "600", color: "black" }}>
            Start Date
          </Typography>
          <TextField
            type="date"
            name="startDate"
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
            required
          />

          {/* End Date Field */}
          <Typography style={{ fontWeight: "600", color: "black" }}>
            End Date
          </Typography>
          <TextField
            type="date"
            name="endDate"
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
            required
          />

          {/* Description Field */}
          <Typography style={{ fontWeight: "600", color: "black" }}>
            Description
          </Typography>
          <TextField
            variant="outlined"
            name="description"
            onChange={handleInputChange}
            multiline
            rows={4}
            fullWidth
            required
          />

          {/* Image Upload */}
          <Typography style={{ fontWeight: "600", color: "black" }}>
            Image
          </Typography>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            endIcon={<CloudUploadIcon />}
            sx={{
              border: "1px solid #D9D9D9",
              backgroundColor: "#D9D9D9",
              width: "200px",
            }}
          >
            Upload files
            <VisuallyHiddenInput
              accept="image/*"
              type="file"
              onChange={imageChange}
              style={{ marginTop: "10px" }}
              required
            />
          </Button>

          {/* Level Selector */}
          <Typography style={{ fontWeight: "600", color: "black" }}>
            Level
          </Typography>
          <FormControl fullWidth>
            <Select
              name="level"
              value={hackathonDetails.level || ""}
              onChange={handleInputChange}
              required
            >
              <MenuItem value="" disabled>
                <em>Select Level</em>
              </MenuItem>
              <MenuItem value="easy">Easy</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="hard">Hard</MenuItem>
            </Select>
          </FormControl>

          {/* Submit Button */}
          <Box>
            <Button
              variant="contained"
              type="submit"
              sx={{
                background: "#44924C",
                width: "200px",
                padding: "10px",
              }}
            >
              Create Hackathon
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HackathonCreate;
