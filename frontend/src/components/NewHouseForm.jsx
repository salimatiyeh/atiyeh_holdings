import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";

const NewHouseForm = () => {
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
    setHouse({});
  };

  const handleSave = () => {
    console.log("Save clicked:", house);
    onSave(house)
  };

  const handleFieldChange = (field, value) => {
    setHouse((house) => ({
      ...house,
      [field]: value,
    }));
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-6">
          <div className="form-container p-4 shadow rounded">
            <Typography variant="h4" paragraph>
              Create a New House
            </Typography>
            <div className="form-container">
              <TextField
                label="Name"
                onChange={(e) => handleFieldChange("name", e.target.value)}
                required
              />

              <TextField
                label="Square Feet"
                onChange={(e) => handleFieldChange("square_feet", e.target.value)}
                className="form-control"
                required
              />

              <TextField
                label="Address"
                onChange={(e) => handleFieldChange("address", e.target.value)}
                required
              />

              <TextField
                label="Rental Amount"
                onChange={(e) => handleFieldChange("rental_amount", e.target.value)}
                className="form-control"
                required
              />

              <TextField
                label="Number of Rooms"
                onChange={(e) => handleFieldChange("number_of_rooms", e.target.value)}
                className="form-control"
                required
              />

              <TextField
                label="Bathrooms"
                onChange={(e) => handleFieldChange("number_of_bathrooms", e.target.value)}
                className="form-control"
                required
              />

              <div className="row">
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => handleFieldChange("has_garage", !house.has_garage)}
                    />
                  }
                  label="Garage?"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => handleFieldChange("has_storm_shelter", !house.has_storm_shelter)}
                    />
                  }
                  label="Storm Shelter?"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => handleFieldChange("has_gas", !house.has_gas)}
                    />
                  }
                  label="Has Gas"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => handleFieldChange("is_occupied", !house.is_occupied)}
                    />
                  }
                  label="Is Occupied"
                />
              </div>

              <input
                type="file"
                className="mb-4"
                onChange={(e) => handleFieldChange("photos", e.target.files)}
                multiple
                required
              />
            </div>

            <Box display="flex" justifyContent="space-between">
              <div>
                <Button variant="contained" color="secondary" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
              <div>
                <Button variant="contained" color="primary" onClick={handleSave}>
                  Submit
                </Button>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHouseForm;
