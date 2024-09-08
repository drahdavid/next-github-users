import { Box, CircularProgress, styled } from "@mui/material";

export const HomeContainer = styled(Box)(() => ({
  display: "flex",
  gap: 20,
  margin: "100px",
  flexWrap: "wrap",
}));

export const Loader = styled(CircularProgress)(() => ({
  position: "relative",
  left: "50%",
  color: "white",
  marginTop: "100px",
}));
