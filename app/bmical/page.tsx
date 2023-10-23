"use client";
import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Switch,
  Paper,
  createTheme,
  ThemeProvider,
  Card,
  Box,
} from "@mui/material";
import axios from "axios";
import { BASEURL } from "../apiClient/apiEndpoints";

const BMI: React.FC = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [bmi, setBMI] = useState<number>(0);
  const [dark, setDark] = useState(false);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue);
  };

  const getData = async () => {
    //@ts-ignore
    const data = await axios.get(BASEURL);
    console.log(data);
  };
  const currentEnvironment = process.env.NODE_ENV;
  console.log(`Current environment: ${currentEnvironment}`);

  useEffect(() => {
    getData();
  }, []);

  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
    },
  });

  return (
    <div>
      <Card sx={{ padding: "30px" }}>
        <ThemeProvider theme={theme}>
          <Paper sx={{ boxShadow: "none", padding: "20px" }}>
            <Typography variant="h4">BMI Calculator</Typography>
            <TextField
              id="outlined"
              label="Weight(kgs)"
              type="number"
              fullWidth
              margin="normal"
              value={weight}
              sx={{
                backgroundColor: "white",
                color: theme.palette.mode === "light" ? "yellow" : "red",
              }}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
            />
            <TextField
              variant="outlined"
              label="Height(cms)"
              type="number"
              fullWidth
              margin="normal"
              value={height}
              sx={{
                backgroundColor: "white",
                color: theme.palette.mode === "light" ? "yellow" : "red",
              }}
              onChange={(e) => setHeight(parseFloat(e.target.value))}
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={calculateBMI}
              style={{ marginTop: "20px" }}
            >
              Calculate BMI
            </Button>
            {bmi > 0 && (
              <Typography
                variant="h5"
                sx={{ marginTop: "20px", color: dark ? "white" : "black" }}
              >
                Your BMI: {bmi.toFixed(2)}
              </Typography>
            )}
            <Box display="flex" alignItems="center">
              <Switch
                checked={dark}
                onChange={() => setDark((prev) => !prev)}
              />{" "}
              <Typography>Switch to dark</Typography>
            </Box>
          </Paper>
        </ThemeProvider>
      </Card>
    </div>
  );
};

export default BMI;
