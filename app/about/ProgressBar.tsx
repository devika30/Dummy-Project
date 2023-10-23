import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";
import { Button, Box, List, ListItem } from "@mui/material";

function ProgressBar() {
  const progressValue = 30;

  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: 500, margin: "auto", marginTop: 2, maxHeight: "400px" }}
    >
      <CardContent
        sx={{
          height: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginBottom: "16px",
            textAlign: "center",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h4>Pricing/Month</h4>
          <p>$16.00/month</p>
        </div>
        <LinearProgress
          variant="determinate"
          value={progressValue}
          sx={{ width: "100%", marginBottom: "16px" }}
        />
        <p style={{ margin: 0 }}>Profit: {progressValue}%</p>
        <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
          <List>
            <ListItem>
              1. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis dicta officiis qui. 2.vel quasi ipsam atque velit.
            </ListItem>
          </List>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "purple",
              height:"20px",
              width:"50px",
              padding: {
                xs: "2px",
                sm: "5px",
                md: "20px",
              },
              transition: "width 0.3s ease",
              "&:hover": { transform: "scale(1.1)" },
            }}
            size="medium"
          >
            Pay
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProgressBar;
