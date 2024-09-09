import { PartialUserI, UsersI } from "@/globals/interfaces";
import { NEXT_PUBLIC_GITHUB_API } from "@/utils/constants";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export const useHomeUtils = ({ users }: UsersI) => {
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
    setUsersClient(
      usersClient.map((user) =>
        user.id === selectedUser.id
          ? { ...user, isFavourite: !user.isFavourite }
          : user
      )
    );
  };

  const handleShowFavourites = () => {
    setShowFavourites(!showFavourites);
  };

  return {
    usersClient,
    showFavourites,
    searchQuery,
    isLoadingQuery,
    queryError,
    handleQueryChange,
    handleQuerySearch,
    handleIsFavourite,
    handleShowFavourites,
  };
};
