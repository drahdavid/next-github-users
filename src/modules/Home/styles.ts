import {
  Box,
  Button,
  CircularProgress,
  Container,
  styled,
} from "@mui/material";

export const HomeBox = styled(Box)(() => ({
  display: "flex",
  gap: 20,
  margin: "100px",
  flexWrap: "wrap",
}));

export const SearchContainerStyled = styled(Container)(() => ({
  display: "flex",
  gap: 5,
}));

export const ButtonStyled = styled(Button)(() => ({
  width: "200px",
  height: "55px",
}));

export const LoaderContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));

export const Loader = styled(CircularProgress)(() => ({
  color: "white",
  marginTop: "100px",
}));
