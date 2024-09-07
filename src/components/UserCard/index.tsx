import { IconButton, Typography } from "@mui/material";
import React from "react";
import { AvatarStyled, UserCardContainer } from "./styles";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

export const UserCard = ({
  loginName,
  avatar_url,
}: {
  loginName: string;
  avatar_url: string;
}) => {
  return (
    <UserCardContainer>
      <Link href={`/user/${loginName}`}>
        <AvatarStyled alt={loginName} src={avatar_url} />
      </Link>
      <Typography variant="h6">{loginName}</Typography>
      <IconButton>
        {/* {isFavorite ? <StarIcon color="primary" /> : <StarBorderIcon />} */}
        <StarIcon color={'info'} />
      </IconButton>
    </UserCardContainer>
  );
};
