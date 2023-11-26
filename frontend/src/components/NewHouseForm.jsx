// import React from "react";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import TextField from "@mui/material/TextField";
// import CardActions from "@mui/material/CardActions";

// function NewHouseForm(props) {
//   console.log("NewHouseForm");
//   const [house, setHouse] = useState(null);
//   const [editedHouse, setEditedHouse] = useState({ ...house });


//   async function onSave(housePayload) {
//     const response = await fetch(
//       `http://localhost:3000/api/houses/new`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(housePayload),
//       }
//     );
//     const houseResponse = await response.json();
//     setHouse(houseResponse);
//     return houseResponse;
//   }

//   function handleCancel() {
//     console.log("edit clicked");
//     setEditedHouse({ ...house });
//   }

//   function handleSave() {
//     onSave(house.id, editedHouse);
//   }

//   function handleFieldChange(field, value) {
//     setEditedHouse((prevHouse) => ({
//       ...prevHouse,
//       [field]: value,
//     }));
//   }

//   function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   function EditField({ value }) {
//     return (
//       <TextField
//         label={capitalizeFirstLetter(value)}
//         value={editedHouse[value]}
//         onChange={(e) => handleFieldChange(value, e.target.value)}
//       />
//     );
//   }

//   return (
//     <>
//       <div style={{ padding: "20px 15px" }}>
//         <Typography variant="h4" paragraph>
//           <EditField value="name" />
//         </Typography>
//         <Typography variant="body1" paragraph>
//           <EditField value="address" />
//         </Typography>
//         <Typography variant="body1" paragraph>
//             <EditField value="square_feet" />
//         </Typography>
//         <Typography variant="body1" paragraph>
//             <EditField value="number_of_rooms" />
//         </Typography>
//         <Typography variant="body1" paragraph>
//             <EditField value="number_of_bathrooms" />
//         </Typography>
//         <Typography variant="body1" paragraph>
//             <EditField value="rental_amount" />
//         </Typography>
//         <Typography variant="body1" paragraph>
//             <EditField value="has_gas" />
//         </Typography>
//         <Typography variant="body1" paragraph>
//             <EditField value="is_occupied" />
//         </Typography>
//         <CardActions sx={{ flexDirection: "column" }}>
//             <>
//               <Button onClick={handleSave}>Save</Button>
//               <Button onClick={handleCancel} color="error">
//                 Cancel
//               </Button>
//             </>
//           <Link to={"/houses"}>
//             <Button color="primary">Back to Houses</Button>
//           </Link>
//         </CardActions>
//       </div>
//     </>
//   );
// }

// export default NewHouseForm;

import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";

const NewHouseForm = () => {
  const [editedHouse, setEditedHouse] = useState({
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
    photos: [], // For file input
  });

  const handleCancel = () => {
    setEditedHouse({});
  };

  const handleSave = () => {
    // Implement the logic to save the editedHouse data
    console.log("Save clicked:", editedHouse);
  };

  const handleFieldChange = (field, value) => {
    setEditedHouse((prevHouse) => ({
      ...prevHouse,
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
                onChange={(e) => handleFieldChange("number_of_bathrooms", e.target.value)}
                className="form-control"
                required
              />

              <div className="row">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={editedHouse.has_garage}
                      onChange={() => handleFieldChange("has_garage", !editedHouse.has_garage)}
                    />
                  }
                  label="Garage?"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={editedHouse.has_storm_shelter}
                      onChange={() => handleFieldChange("has_storm_shelter", !editedHouse.has_storm_shelter)}
                    />
                  }
                  label="Storm Shelter?"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={editedHouse.has_gas}
                      onChange={() => handleFieldChange("has_gas", !editedHouse.has_gas)}
                    />
                  }
                  label="Has Gas"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={editedHouse.is_occupied}
                      onChange={() => handleFieldChange("is_occupied", !editedHouse.is_occupied)}
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
