"use client";
import {
  Box,
  Typography,
  Switch,
  Paper,
  Button,
  useMediaQuery,
} from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  useTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Navbar from "./Navbar";
import BMI from "./bmical/page";
import bmiImg from "../public/bmiImg.jpeg";
import Image from "next/image";
import CssBaseline from "@mui/material/CssBaseline";



export default function Home() {
  const [dark, setDark] = useState(false);
  const theme = responsiveFontSizes(
    createTheme({
      palette: {
        mode: dark ? "dark" : "light",
      },
    })
  );
  const mediaTheme = useTheme();
  const matches = useMediaQuery(mediaTheme.breakpoints.up("sm"));

  const MyContainer = styled("div")({
    height: "100vh",
    background: "grey",
  });

  return (
    <MyContainer
      sx={{ [mediaTheme.breakpoints.up("sm")]: { backgroundColor: "white" } }}
    >
      <CssBaseline />
      <nav>
        <Navbar />
      </nav>
      <Box
        sx={{
          display: "flex",
          flexDirection: matches ? "row" : "column",
          justifyContent: matches ? "space-evenly" : "center",
          alignItems: "center",
        }}
        id="abc"
      >
        <Box sx={{ marginTop: "200px" }}>
          <BMI />
        </Box>
        <Box sx={{ flex: 0.5, marginTop: "200px" }}>
          <Image
            src={bmiImg}
            alt="Description"
            layout="responsive"
            width={500}
            height={300}
          />
        </Box>
      </Box>
    </MyContainer>
  );
}
