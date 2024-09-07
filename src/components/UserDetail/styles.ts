import { Avatar, Box, styled } from "@mui/material";

export const DetailedDataContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const AvatarContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));

export const AvatarStyled = styled(Avatar)(() => ({
  "&.MuiAvatar-root": {
    width: "250px",
    height: "250px",
  },
}));
