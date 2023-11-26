import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import CardActions from "@mui/material/CardActions";

function House(props) {
  const { editing } = props;
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedHouse, setEditedHouse] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/api/houses/${id}`);
      const houseResponse = await response.json();
      setHouse(houseResponse);
      setEditedHouse(houseResponse);
    }
    fetchData();
  }, []);

  async function onDelete(houseId) {
    const response = await fetch(
      `http://localhost:3000/api/houses/${houseId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const houseResponse = await response.json();
    return houseResponse;
  }

  async function onSave(houseId, housePayload) {
    const response = await fetch(
      `http://localhost:3000/api/houses/${houseId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(housePayload),
      }
    );
    const houseResponse = await response.json();
    setHouse(houseResponse);
    return houseResponse;
  }

  function handleCancel() {
    console.log("edit clicked");
    setIsEditing(false);
    setEditedHouse({ ...house });
  }

  function handleSave() {
    onSave(house.id, editedHouse);
    setIsEditing(false);
  }

  function handleFieldChange(event, field, value) {
    event.preventDefault();
    setEditedHouse((prevHouse) => ({
      ...prevHouse,
      [field]: value,
    }));
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function EditField({ value }) {
    return (
      <TextField
        label={capitalizeFirstLetter(value)}
        value={editedHouse[value]}
        onChange={(e) => handleFieldChange(e, value, e.target.value)}
      />
    );
  }

  return (
    <>
      {house && (
        <div style={{ padding: "20px 15px" }}>
          <Typography variant="h4" paragraph>
            <EditField value="name" />
          </Typography>
          <Typography variant="body1" paragraph>
            {isEditing ? (
              <EditField value="address" />
            ) : (
              `Address: ${house.address}`
            )}
          </Typography>
          <Typography variant="body1" paragraph>
            {isEditing ? (
              <EditField value="square_feet" />
            ) : (
              `Square Feet: ${house.square_feet}`
            )}
          </Typography>
          <Typography variant="body1" paragraph>
            {isEditing ? (
              <EditField value="number_of_rooms" />
            ) : (
              `Number of Rooms: ${house.number_of_rooms}`
            )}
          </Typography>
          <Typography variant="body1" paragraph>
            {isEditing ? (
              <EditField value="number_of_bathrooms" />
            ) : (
              ` Number of Bathrooms: ${house.number_of_bathrooms}`
            )}
          </Typography>
          <Typography variant="body1" paragraph>
            {isEditing ? (
              <EditField value="rental_amount" />
            ) : (
              `Rent: ${house.rental_amount}`
            )}
          </Typography>
          <Typography variant="body1" paragraph>
            {isEditing ? (
              <EditField value="has_gas" />
            ) : (
              `Gas: ${house.has_gas ? "Yes" : "No"}`
            )}
          </Typography>
          <Typography variant="body1" paragraph>
            {isEditing ? (
              <EditField value="is_occupied" />
            ) : (
              `Occupied: ${house.is_occupied ? "Yes" : "No"}`
            )}
          </Typography>
          <CardActions sx={{ flexDirection: "column" }}>
            {isEditing ? (
              <>
                <Button onClick={handleSave}>Save</Button>
                <Button onClick={handleCancel} color="error">
                  Cancel
                </Button>
              </>
            ) : (
              <Button onClick={() => setIsEditing(true)} color="secondary">
                Edit
              </Button>
            )}
            <Button onClick={() => onDelete(house.id)} color="error">
              Delete
            </Button>
            <Link to={"/houses"}>
              <Button color="primary">Back to Houses</Button>
            </Link>
          </CardActions>
        </div>
      )}
    </>
  );
}

export default House;
