import { UserDetail } from "@/components/UserDetail";
import { UserI } from "@/globals/interfaces";
import { UserContainerStyled } from "./styles";

export const User = ({
  user,
  name,
  avatarUrl,
}: {
  user: UserI;
  name: string;
  avatarUrl: string;
}) => {
  return (
    <UserContainerStyled maxWidth="sm">
      <UserDetail user={user} name={name} avatarUrl={avatarUrl} />
    </UserContainerStyled>
  );
};
