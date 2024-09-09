import { useHomeUtils } from "./hooks";

import { UsersI } from "@/globals/interfaces";
import {
  ButtonStyled,
  HomeBox,
  Loader,
  LoaderContainer,
  SearchContainerStyled,
} from "./styles";
import { Typography } from "@mui/material";
import { UserCard } from "@/components/UserCard";
import { SearchBar } from "@/components/SearchBar";

export const Home = ({ users }: UsersI) => {
  const {
    usersClient,
    showFavourites,
    searchQuery,
    isLoadingQuery,
    queryError,
    handleQueryChange,
    handleQuerySearch,
    handleIsFavourite,
    handleShowFavourites,
  } = useHomeUtils({ users });

  return (
    <HomeBox>
      <SearchContainerStyled>
        <SearchBar
          searchQuery={searchQuery}
          handleInputChange={handleQueryChange}
          handleQuerySearch={handleQuerySearch}
        />
        <ButtonStyled
          onClick={() => handleShowFavourites()}
          color="primary"
          variant="contained"
        >
          {showFavourites ? "Show all" : "Show favourites"}
        </ButtonStyled>
      </SearchContainerStyled>

      <>
        {isLoadingQuery ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : queryError ? (
          <Typography color="error">
            Something went wrong. Please try again later.
          </Typography>
        ) : !usersClient.length ? (
          <Typography>No results found</Typography>
        ) : (
          usersClient
            .filter((user) => (showFavourites ? user?.isFavourite : true))
            .map((user) => (
              <UserCard
                key={user.id}
                loginName={user.login}
                avatar_url={user.avatar_url}
                isFavourite={user?.isFavourite ?? false}
                handleIsFavourite={() => handleIsFavourite(user)}
              />
            ))
        )}
      </>
    </HomeBox>
  );
};
