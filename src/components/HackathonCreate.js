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
  const [image, setImage] = useState("");

  const handleInputChange = (e) => {
    setHackathonDetails({
      ...hackathonDetails,
      [e.target.name]: e.target.value,
    });
  };

  const imageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file)); // Create and store local URL for preview or usage
  };

  const handleSubmit = (e) => {
    e.PreventDefault();
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
        }}
      >
        Challenge Details
      </Box>
      <Box
        sx={{
          width: "auto",
          height: "auto",
          marginLeft: "80px",
          marginTop: "30px",
          marginBottom: "50px",
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
          <Typography style={{ fontWeight: "600" }}>Challenge Name</Typography>
          <TextField
            type="text"
            name="name"
            onChange={handleInputChange}
            className="textField"
            fullWidth
          />

          {/* Start Date Field */}
          <Typography style={{ fontWeight: "600" }}>Start Date</Typography>
          <TextField
            type="date"
            name="startDate"
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />

          {/* End Date Field */}
          <Typography style={{ fontWeight: "600" }}>End Date</Typography>
          <TextField
            type="date"
            name="endDate"
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />

          {/* Description Field */}
          <Typography style={{ fontWeight: "600" }}>Description</Typography>
          <TextField
            variant="outlined"
            name="description"
            onChange={handleInputChange}
            multiline
            rows={4}
            fullWidth
          />

          {/* Image Upload */}
          <Typography style={{ fontWeight: "600" }}>Image</Typography>
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
            />
          </Button>

          {/* Level Selector */}
          <Typography style={{ fontWeight: "600" }}>Level</Typography>
          <FormControl fullWidth>
            <Select
              name="level"
              defaultValue="Easy"
              onChange={handleInputChange}
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
