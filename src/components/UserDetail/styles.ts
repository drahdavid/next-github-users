import { Avatar, Box, IconButton, Paper, styled } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export const PaperStyled = styled(Paper)(() => ({
  padding: "20px",
}));

export const DetailedDataBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const AvatarBox = styled(Box)(() => ({
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

export const IconButtonStyled = styled(IconButton)(() => ({
  marginLeft: "8px",
}));

export const StarIconStyled = styled(StarIcon)(() => ({
  cursor: "pointer",
  color: "black",
}));

export const StarBorderIconStyled = styled(StarBorderIcon)(() => ({
  cursor: "pointer",
}));
