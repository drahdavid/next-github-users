import { Avatar, Box, styled } from "@mui/material";

export const UserCardContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  border: `1px solid white`,
  borderRadius: 1,
  boxShadow: "1",
  padding: 20,
  textTransform: "capitalize",
}));

export const AvatarStyled = styled(Avatar)(() => ({
  width: "56px",
  height: "56px",
  marginRight: "10px",
}));
