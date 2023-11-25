import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function HouseCard({ house, onDelete }) {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {house.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Address: ${house.address}`}
        </Typography>
        {/* Add other fields as needed */}
      </CardContent>
      <CardActions>
        <Link to={`/houses/${house.id}`}>
          <Button size="small" color="primary">
            House Details
          </Button>
        </Link>

        <Button onClick={() => onDelete(house.id)} size="small" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default HouseCard;
