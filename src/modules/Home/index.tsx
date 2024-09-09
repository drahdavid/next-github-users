import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { PartialUserI, UsersI } from "@/globals/interfaces";
import { HomeContainer, Loader } from "./styles";
import { Box, Button, Container, Typography } from "@mui/material";
import { UserCard } from "@/components/UserCard";
import { SearchBar } from "@/components/SearchBar";
import { NEXT_PUBLIC_GITHUB_API } from "@/utils/constants";

export const Home = ({ users }: UsersI) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [usersClient, setUsersClient] = useState(users);
  const [isLoadingQuery, setIsLoadingQuery] = useState(false);
  const [queryError, setQueryError] = useState(false);
  const [showFavourites, setShowFavourites] = useState(false);

  const handleQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleQuerySearch = async () => {
    if (!searchQuery) return;

    router.push({
      query: {
        users: searchQuery,
      },
    });
    setIsLoadingQuery(true);
    setQueryError(false);

    await axios
      .get(`${NEXT_PUBLIC_GITHUB_API}/search/users?q=${searchQuery}`)
      .then((response) => setUsersClient(response.data.items))
      .catch((error) => setQueryError(error))
      .finally(() => setIsLoadingQuery(false));
  };

  const handleIsFavourite = (selectedUser: PartialUserI) => {
    const modifiedUsers = usersClient.map((user) => {
      if (selectedUser.id === user.id) {
        return { ...user, isFavourite: !user.isFavourite ?? true };
      }
      return user;
    });
    setUsersClient(modifiedUsers);
  };

  const handleShowFavourites = () => {
    setShowFavourites(!showFavourites);
  };

  return (
    <HomeContainer>
      <Container sx={{ display: "flex", gap: 5 }}>
        <SearchBar
          searchQuery={searchQuery}
          handleInputChange={handleQueryChange}
          handleQuerySearch={handleQuerySearch}
        />
        <Button
          sx={{ width: "200px", height: "55px" }}
          onClick={() => handleShowFavourites()}
          color="primary"
          variant="contained"
        >
          {showFavourites ? "Show all" : "Show favourites"}
        </Button>
      </Container>

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
          usersClient
            .filter((user) => {
              if (showFavourites) return user?.isFavourite;
              else return user;
            })
            .map((user) => (
              <UserCard
                key={user.avatar_url}
                loginName={user.login}
                avatar_url={user.avatar_url}
                isFavourite={user?.isFavourite ?? false}
                handleIsFavourite={() => handleIsFavourite(user)}
              />
            ))
        )}
      </>
    </HomeContainer>
  );
};
