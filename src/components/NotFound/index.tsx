import { Box, Typography } from "@mui/material";
import React from "react";
import { NotFoundContainer } from "./styles";

export const NotFound = ({ searchTerm }: { searchTerm: string }) => {
  return (
    <NotFoundContainer maxWidth="md">
      <Box>
        <Typography variant="h1" color="error">
          404
        </Typography>
        <Typography variant="h5">
          Oops! The {searchTerm} you are looking for does not exist.
        </Typography>
      </Box>
    </NotFoundContainer>
  );
};
