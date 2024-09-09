import { UserI } from "@/globals/interfaces";
import { Paper, Typography, Grid2, IconButton } from "@mui/material";
import {
  AvatarContainer,
  AvatarStyled,
  DetailedDataContainer,
  StarBorderIconStyled,
  StarIconStyled,
} from "./styles";

export const UserDetail = ({
  user,
  name,
  avatarUrl,
  isFavourite,
  handleIsFavourite,
}: {
  user: UserI;
  name: string;
  avatarUrl: string;
  isFavourite: boolean;
  handleIsFavourite: () => void;
}) => {
  return (
    <Paper elevation={3} style={{ padding: "20px" }}>
      <Grid2 container spacing={2}>
        <AvatarContainer>
          <AvatarStyled src={avatarUrl} alt={name} />
        </AvatarContainer>
        <Grid2>
          <Typography variant="h4">
            {name}
            <IconButton
              onClick={handleIsFavourite}
              style={{ marginLeft: "8px" }}
            >
              {isFavourite ? <StarIconStyled /> : <StarBorderIconStyled />}
            </IconButton>
          </Typography>

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
  );
};
