import { PartialUserI, UsersI } from "@/globals/interfaces";
import { COOKIES_KEYS, NEXT_PUBLIC_GITHUB_API } from "@/utils/constants";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useHomeUtils = ({ users }: UsersI) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [usersClient, setUsersClient] = useState(users);
  const [isLoadingQuery, setIsLoadingQuery] = useState(false);
  const [queryError, setQueryError] = useState(false);
  const [showFavourites, setShowFavourites] = useState(false);
  const [favouriteUsers, setFavouriteUsers] = useState<number[]>([]);

  useEffect(() => {
    const storedFavouriteUsers = Cookies.get(COOKIES_KEYS.favouriteUsers)
      ? JSON.parse(Cookies.get(COOKIES_KEYS.favouriteUsers) ?? "[]")
      : [];

    setFavouriteUsers(storedFavouriteUsers);
  }, [usersClient]);

  const handleQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleQuerySearch = async () => {
    setIsLoadingQuery(true);
    setQueryError(false);

    const queryParams = searchQuery
      ? { query: { users: searchQuery } }
      : { query: null };
    router.push(queryParams);

    const apiUrl = `${NEXT_PUBLIC_GITHUB_API}${
      searchQuery ? `/search/users?q=${searchQuery}` : "/users"
    }`;
    await axios
      .get(apiUrl)
      .then((response) => setUsersClient(response.data.items ?? response.data))
      .catch((error) => setQueryError(error))
      .finally(() => setIsLoadingQuery(false));
  };

  const handleSetFavourite = (selectedUser: PartialUserI) => {
    const updatedFavouriteUsers = favouriteUsers.includes(selectedUser.id)
      ? favouriteUsers.filter((id: number) => id !== selectedUser.id)
      : [...favouriteUsers, selectedUser.id];

    Cookies.set(
      COOKIES_KEYS.favouriteUsers,
      JSON.stringify(updatedFavouriteUsers)
    );

    setUsersClient(
      usersClient.map((user) =>
        user.id === selectedUser.id
          ? { ...user, isFavourite: favouriteUsers.includes(user.id) }
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
    favouriteUsers,
    handleQueryChange,
    handleQuerySearch,
    handleSetFavourite,
    handleShowFavourites,
  };
};
