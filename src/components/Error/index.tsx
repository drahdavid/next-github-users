import { Box, Typography } from "@mui/material";
import React from "react";
import { NotFoundContainer } from "./styles";

export const Error = ({ searchTerm }: { searchTerm: string }) => {
  return (
    <NotFoundContainer maxWidth="md">
      <Box>
        <Typography variant="h5">
          Something went wrong or {searchTerm} was not found.
        </Typography>
      </Box>
    </NotFoundContainer>
  );
};
