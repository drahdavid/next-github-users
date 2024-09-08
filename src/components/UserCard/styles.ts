import { Avatar, IconButton, Paper, styled } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export const PaperStyled = styled(Paper)(() => ({
  width: "300px",
  height: "90px",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  textTransform: "capitalize",
  gap: 2,
}));

export const AvatarStyled = styled(Avatar)(() => ({
  width: "70px",
  height: "70px",
}));

export const IconButtonStyled = styled(IconButton)(() => ({
  marginLeft: "auto",
}));

export const StarIconStyled = styled(StarIcon)(() => ({
  cursor: "pointer",
  color: "black",
}));

export const StarBorderIconStyled = styled(StarBorderIcon)(() => ({
  cursor: "pointer",
}));
