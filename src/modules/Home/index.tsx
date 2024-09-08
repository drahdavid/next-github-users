import React, { useState } from "react";
import { HomeContainer, Loader } from "./styles";
import { UsersI } from "@/globals/interfaces";
import { UserCard } from "@/components/UserCard";
import { SearchBar } from "@/components/SearchBar";
import axios from "axios";
import { NEXT_PUBLIC_GITHUB_API } from "@/utils/constants";
import { Typography } from "@mui/material";

export const Home = ({ users }: UsersI) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [usersClient, setUsersClient] = useState(users);
  const [isLoadingQuery, setIsLoadingQuery] = useState(false);
  const [queryError, setQueryError] = useState(false);

  const handleQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleQuerySearch = async () => {
    setIsLoadingQuery(true);
    setQueryError(false);

    await axios
      .get(`${NEXT_PUBLIC_GITHUB_API}/search/users?q=${searchQuery}`)
      .then((response) => setUsersClient(response.data.items))
      .catch((error) => setQueryError(error))
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
        ) : queryError ? (
          <Typography color="error">
            Something went wrong. Please try again later.
          </Typography>
        ) : !usersClient.length ? (
          <Typography>No results found</Typography>
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
