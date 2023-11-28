import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

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
const defaultHouseForm = {
  name: "",
  square_feet: "",
  address: "",
  rental_amount: "",
  number_of_rooms: "",
  number_of_bathrooms: "",
  has_garage: false,
  has_storm_shelter: false,
  has_gas: false,
  is_occupied: false,
  photos: [],
};

const NewHouseForm = () => {
  const navigate = useNavigate();
  const [editedHouse, setEditedHouse] = useState(defaultHouseForm);
  const [house, setHouse] = useState({
    name: "",
    square_feet: "",
    address: "",
    rental_amount: "",
    number_of_rooms: "",
    number_of_bathrooms: "",
    has_garage: false,
    has_storm_shelter: false,
    has_gas: false,
    is_occupied: false,
    photos: [],
  });

  async function onSave(housePayload) {
    try {
      const response = await fetch("http://localhost:3000/api/houses/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(housePayload),
      });

      if (!response.ok) {
        console.error("Error creating house:", response.statusText);
        return null;
      }

      const newHouse = await response.json();
      console.log("House created successfully:", newHouse);

      return newHouse;
    } catch (error) {
      console.error("Error creating house:", error.message);
      return null;
    }
  }

  const handleCancel = () => {
    setEditedHouse(defaultHouseForm);
    navigate("/houses");
  };

  const handleSave = () => {
    console.log("Save clicked:", house);
    onSave(house);
  };

  const handleFieldChange = (field, value) => {
    setHouse((house) => ({
      ...house,
      [field]: value,
    }));
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        gap="8px"
        alignItems="flex-start"
      >
        <Typography variant="h4" paragraph>
          Create a New House
        </Typography>
        <TextField
          label="Name"
          value={editedHouse.name}
          onChange={(e) => handleFieldChange("name", e.target.value)}
          required
        />
        <TextField
          label="Square Feet"
          value={editedHouse.square_feet}
          onChange={(e) => handleFieldChange("square_feet", e.target.value)}
          className="form-control"
          required
        />
        <TextField
          label="Address"
          value={editedHouse.address}
          onChange={(e) => handleFieldChange("address", e.target.value)}
          required
        />
        <TextField
          label="Rental Amount"
          value={editedHouse.rental_amount}
          onChange={(e) => handleFieldChange("rental_amount", e.target.value)}
          className="form-control"
          required
        />
        <TextField
          label="Number of Rooms"
          value={editedHouse.number_of_rooms}
          onChange={(e) => handleFieldChange("number_of_rooms", e.target.value)}
          className="form-control"
          required
        />
        <TextField
          label="Bathrooms"
          value={editedHouse.number_of_bathrooms}
          onChange={(e) =>
            handleFieldChange("number_of_bathrooms", e.target.value)
          }
          className="form-control"
          required
        />
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={editedHouse.has_garage}
                onChange={() =>
                  handleFieldChange("has_garage", !editedHouse.has_garage)
                }
              />
            }
            label="Garage?"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={editedHouse.has_storm_shelter}
                onChange={() =>
                  handleFieldChange(
                    "has_storm_shelter",
                    !editedHouse.has_storm_shelter
                  )
                }
              />
            }
            label="Storm Shelter?"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={editedHouse.has_gas}
                onChange={() =>
                  handleFieldChange("has_gas", !editedHouse.has_gas)
                }
              />
            }
            label="Has Gas"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={editedHouse.is_occupied}
                onChange={() =>
                  handleFieldChange("is_occupied", !editedHouse.is_occupied)
                }
              />
            }
            label="Is Occupied"
          />
        </Box>
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Upload picture
          <VisuallyHiddenInput type="file" multiple />
        </Button>
        <Box display="flex" gap="15px">
          <Button variant="text" color="error" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="text" color="primary" onClick={handleSave}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default NewHouseForm;
