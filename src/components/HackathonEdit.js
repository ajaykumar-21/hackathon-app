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
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { editHackathon } from "../features/hackathonSlice";
import { fetchHackathon } from "../features/hackathonSlice";

function HackathonEdit() {
  const { id } = useParams();
  const { hackathons } = useSelector((state) => state.hackathons);
  const [updateHackathon, setUpdateHackathon] = useState({
    image: "",
    level: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Find the current hackathon using the ID from params
  const hackathon = hackathons.find((h) => h.id === id);

  useEffect(() => {
    if (hackathon) {
      // Populate the state with data received from the `hackathon` object
      setUpdateHackathon(hackathon);
      setImagePreview(hackathon.image); // Show the existing image
    }
  }, [hackathon]);

  // Handle input changes in the form
  const handleUpdateHackathon = (e) => {
    const { name, value, files } = e.target;

    // Check if an image is uploaded
    if (name === "image" && files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file); // Create a preview URL for the image
      setImagePreview(imageUrl); // Show the preview
      setUpdateHackathon({
        ...updateHackathon,
        image: imageUrl, // Store the image URL (this can be saved to backend later)
      });
    } else {
      setUpdateHackathon({
        ...updateHackathon,
        [name]: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Dispatch an action to update the hackathon in the store.
    await dispatch(editHackathon(updateHackathon));
    dispatch(fetchHackathon());
    // After successful update, navigate to the Home page
    navigate("/");
  };

  return (
    <>
      <Box>
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
          Edit Hackathon Details
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
              value={updateHackathon.name}
              onChange={handleUpdateHackathon}
              className="textField"
              fullWidth
            />

            {/* Start Date Field */}
            <Typography style={{ fontWeight: "600", color: "black" }}>
              Start Date
            </Typography>
            <TextField
              type="date"
              name="startDate"
              value={updateHackathon.startDate}
              onChange={handleUpdateHackathon}
              fullWidth
            />

            {/* End Date Field */}
            <Typography style={{ fontWeight: "600", color: "black" }}>
              End Date
            </Typography>
            <TextField
              type="date"
              name="endDate"
              value={updateHackathon.endDate}
              onChange={handleUpdateHackathon}
              fullWidth
            />

            {/* Description Field */}
            <Typography style={{ fontWeight: "600", color: "black" }}>
              Description
            </Typography>
            <TextField
              variant="outlined"
              name="description"
              value={updateHackathon.description}
              onChange={handleUpdateHackathon}
              multiline
              rows={4}
              fullWidth
            />

            {/* Image Upload */}
            <Box>
              {/* Image Upload Section */}
              <Box>
                {/* Image Section */}
                <Typography
                  style={{
                    fontWeight: "600",
                    color: "black",
                    marginBottom: "10px",
                  }}
                >
                  Image
                </Typography>

                {/* Display the uploaded or existing image */}
                <Box
                  sx={{
                    backgroundColor: "#F8F9FD",
                    padding: "16px",
                    borderRadius: "10px",
                    width: "fit-content",
                  }}
                >
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Selected"
                      style={{
                        width: "300px",
                        height: "160px",
                        borderRadius: "15px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <Typography>No Image Selected</Typography>
                  )}
                  <Button
                    component="label"
                    sx={{
                      color: "#44924C",
                      textTransform: "none",
                    }}
                    startIcon={<CloudUploadIcon />}
                  >
                    Change image →
                    <input
                      accept="image/*"
                      type="file"
                      name="image"
                      hidden
                      onChange={handleUpdateHackathon}
                    />
                  </Button>
                </Box>
              </Box>

              {/* Level Selector */}
              <Typography style={{ fontWeight: "600", color: "black" }}>
                Level
              </Typography>
              <FormControl fullWidth>
                <Select
                  name="level"
                  value={updateHackathon.level || ""}
                  onChange={handleUpdateHackathon}
                >
                  <MenuItem value="" disabled>
                    <em>Select Level</em>
                  </MenuItem>
                  <MenuItem value="easy">Easy</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="hard">Hard</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* Submit Button */}
            <Box>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  background: "#44924C",
                  width: "170px",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                Save Changes
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HackathonEdit;
