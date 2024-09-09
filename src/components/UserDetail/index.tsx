import { UserI } from "@/globals/interfaces";
import { Typography, Grid2 } from "@mui/material";
import {
  AvatarBox,
  AvatarStyled,
  DetailedDataBox,
  IconButtonStyled,
  PaperStyled,
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
    <PaperStyled elevation={3}>
      <Grid2 container spacing={2}>
        <AvatarBox>
          <AvatarStyled src={avatarUrl} alt={name} />
        </AvatarBox>
        <Grid2>
          <Typography variant="h4">
            {name}
            <IconButtonStyled onClick={handleIsFavourite}>
              {isFavourite ? <StarIconStyled /> : <StarBorderIconStyled />}
            </IconButtonStyled>
          </Typography>

          <DetailedDataBox>
            {Object.entries(user).map(([key, value]) => {
              if (key === "name") return;
              return (
                <Typography variant="caption" key={key}>
                  • {key}:
                  {value !== null && value !== "" ? value.toString() : "N/A"}
                </Typography>
              );
            })}
          </DetailedDataBox>
        </Grid2>
      </Grid2>
    </PaperStyled>
  );
};
