import React from "react";
import { HomeContainer } from "./styles";
import { UsersI } from "@/globals/interfaces";
import { UserCard } from "@/components/UserCard";

export const Home = ({ users }: UsersI) => {
  return (
    <HomeContainer>
      {users.map((user) => (
        <UserCard
          key={user.avatar_url}
          loginName={user.login}
          avatar_url={user.avatar_url}
          isFavourite={true}
          handleIsFavourite={() => console.log("hola")}
        />
      ))}
    </HomeContainer>
  );
};
