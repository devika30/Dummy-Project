"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid';
import { List, ListItem, Typography } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PaymentIcon from '@mui/icons-material/Payment';
import FAQ from "./FAQ";
import ProgressBar from "./ProgressBar";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "white" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "left",
  color: theme.palette.text.primary,
  boxShadow: theme.shadows[5],
}));

export default function About() {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, padding: theme.spacing(2) }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <div style={{ display: "flex", alignItems: "center" }}>
              <AutoStoriesIcon
                sx={{ fontSize: 60, marginRight: theme.spacing(2) }}
              />
              <Typography variant="h4" fontWeight="bold">
                Brief
              </Typography>
            </div>
            <Typography variant="body1" marginBottom={2}>
              Your challenge is to build out this intro section with dropdown
              navigation and get it looking as close to the design as possible.
              View the relevant dropdown menus on desktop and mobile when
              interacting with the navigation links.
            </Typography>
            <List>
              <ListItem>
                View the relevant dropdown menus on desktop and mobile when
                interacting with the navigation links
              </ListItem>
              <ListItem>
                View the relevant dropdown menus on desktop and mobile when
                interacting with the navigation links
              </ListItem>
              <ListItem>
                View the relevant dropdown menus on desktop and mobile when
                interacting with the navigation links
              </ListItem>
            </List>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <div style={{ display: "flex", alignItems: "center" }}>
              <LightbulbIcon
                sx={{ fontSize: 60, marginRight: theme.spacing(2) }}
              />
              <Typography variant="h6" fontWeight="bold">
              Ideas to test yourself
              </Typography>
            </div>
            <List>
              <ListItem>
                1.View the relevant dropdown menus on desktop and mobile when
                interacting with the navigation links
              </ListItem>
              <ListItem>
                2.View the relevant dropdown menus on desktop and mobile when
                interacting with the navigation links
              </ListItem>
              <ListItem>
                3.View the relevant dropdown menus on desktop and mobile when
                interacting with the navigation links
              </ListItem>
            </List>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
          <div style={{ display: "flex", alignItems: "center" }}>
          <PaymentIcon
                sx={{ fontSize: 30, marginRight: theme.spacing(1) }}
              />
              <Typography variant="h6" fontWeight="bold">
              Payment Details
              </Typography>
          </div>
          <ProgressBar/>
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item>
          <div style={{ display: "flex", alignItems: "center" }}>
          <QuestionMarkIcon
                sx={{ fontSize: 30, marginRight: theme.spacing(1) }}
              />
              <Typography variant="h6" fontWeight="bold">
              Challenge FAQs
              </Typography>
          </div>
          <FAQ/>
            </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
