import Link from "next/link";
import { Typography } from "@mui/material";
import {
  AvatarStyled,
  IconButtonStyled,
  PaperStyled,
  StarBorderIconStyled,
  StarIconStyled,
} from "./styles";

export const UserCard = ({
  loginName,
  avatar_url,
  isFavourite,
  handleIsFavourite,
}: {
  loginName: string;
  avatar_url: string;
  isFavourite: boolean;
  handleIsFavourite: () => void;
}) => {
  return (
    <PaperStyled>
      <Link href={`/user/${loginName}`}>
        <AvatarStyled alt={loginName} src={avatar_url} />
      </Link>
      <Typography variant="h6">{loginName}</Typography>
      <IconButtonStyled onClick={handleIsFavourite}>
        {isFavourite ? <StarIconStyled /> : <StarBorderIconStyled />}
      </IconButtonStyled>
    </PaperStyled>
  );
};
