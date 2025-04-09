import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function ExploreCareer({ heading, description, img }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        "@media (max-width: 450px)": {
          maxWidth: "80%",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: 170, objectFit: "cover" }}
          image={img}
          alt="Engineering"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            sx={{ fontFamily: "Open Sans, sans-serif", fontWeight: "bold" }}
            component="div"
          >
            {heading}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontFamily: "Raleway, sans-serif", color: "text.secondary" }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
