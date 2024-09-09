import { UserDetail } from "@/components/UserDetail";
import { UserI } from "@/globals/interfaces";
import { UserContainerStyled } from "./styles";
import { useUserUtils } from "./hooks";

export const User = ({ user }: { user: UserI }) => {
  const { handleIsFavourite, isFavourite } = useUserUtils({ user });

  return (
    <UserContainerStyled maxWidth="sm">
      <UserDetail
        user={user}
        name={user.name}
        avatarUrl={user.avatar_url}
        isFavourite={isFavourite}
        handleIsFavourite={() => handleIsFavourite(user)}
      />
    </UserContainerStyled>
  );
};
