import React, { useState } from "react";
import { HomeContainer, Loader } from "./styles";
import { UsersI } from "@/globals/interfaces";
import { UserCard } from "@/components/UserCard";
import { SearchBar } from "@/components/SearchBar";
import axios from "axios";
import { NEXT_PUBLIC_GITHUB_API } from "@/utils/constants";

export const Home = ({ users }: UsersI) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [usersClient, setUsersClient] = useState(users);
  const [isLoadingQuery, setIsLoadingQuery] = useState(false);

  const handleQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleQuerySearch = async () => {
    setIsLoadingQuery(true);
    await axios
      .get(`${NEXT_PUBLIC_GITHUB_API}/search/users?q=${searchQuery}`)
      .then((response) => setUsersClient(response.data.items))
      .catch((error) => console.log(error))
      .finally(() => setIsLoadingQuery(false));
  };

  return (
    <HomeContainer>
      <SearchBar
        searchQuery={searchQuery}
        handleInputChange={handleQueryChange}
        handleQuerySearch={handleQuerySearch}
      />

      <>
        {isLoadingQuery ? (
          <Loader />
        ) : !usersClient.length ? (
          <p>No results found</p>
        ) : (
          usersClient.map((user) => (
            <UserCard
              key={user.avatar_url}
              loginName={user.login}
              avatar_url={user.avatar_url}
              isFavourite={true}
              handleIsFavourite={() => console.log("hola")}
            />
          ))
        )}
      </>
    </HomeContainer>
  );
};
