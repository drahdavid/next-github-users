import { UserDetail } from "@/components/UserDetail";
import { UserI } from "@/globals/interfaces";
import { UserContainerStyled } from "./styles";

export const User = ({ user }: { user: UserI }) => {
  return (
    <UserContainerStyled maxWidth="sm">
      <UserDetail user={user} name={user.name} avatarUrl={user.avatar_url} />
    </UserContainerStyled>
  );
};
