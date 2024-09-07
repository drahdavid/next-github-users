import { UserI } from "@/globals/interfaces";
import { Container, Paper, Typography, Grid2 } from "@mui/material";
import { AvatarContainer, AvatarStyled, DetailedDataContainer } from "./styles";

export const UserDetail = ({
  user,
  name,
  avatarUrl,
}: {
  user: UserI;
  name: string;
  avatarUrl: string;
}) => {
  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Grid2 container spacing={2}>
          <AvatarContainer>
            <AvatarStyled src={avatarUrl} alt={name} />
          </AvatarContainer>
          <Grid2>
            <Typography variant="h4">{name}</Typography>

            <DetailedDataContainer>
              {Object.entries(user).map(([key, value]) => {
                if (key === "name") return;
                return (
                  <Typography variant="caption" key={key}>
                    • {key}:{" "}
                    {value !== null && value !== "" ? value.toString() : "N/A"}
                  </Typography>
                );
              })}
            </DetailedDataContainer>
          </Grid2>
        </Grid2>
      </Paper>
    </Container>
  );
};
