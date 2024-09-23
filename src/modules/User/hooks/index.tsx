import { UserI } from "@/globals/interfaces";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { COOKIES_KEYS } from "@/utils/constants";

export const useUserUtils = ({ user }: { user: UserI }) => {
  const [favouriteUsers, setFavouriteUsers] = useState<number[]>([]);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const storedFavouriteUsers = Cookies.get(COOKIES_KEYS.favouriteUsers)
      ? JSON.parse(Cookies.get(COOKIES_KEYS.favouriteUsers) ?? "[]")
      : [];

    setFavouriteUsers(storedFavouriteUsers);
    setIsFavourite(storedFavouriteUsers.includes(user.id));
  }, [user.id]);

  const handleIsFavourite = (user: UserI) => {
    const updatedFavouriteUsers = favouriteUsers.includes(user.id)
      ? favouriteUsers.filter((id: number) => id !== user.id)
      : [...favouriteUsers, user.id];

    Cookies.set(
      COOKIES_KEYS.favouriteUsers,
      JSON.stringify(updatedFavouriteUsers)
    );

    setFavouriteUsers(updatedFavouriteUsers);
    setIsFavourite(updatedFavouriteUsers.includes(user.id));
  };

  return {
    handleIsFavourite,
    isFavourite,
  };
};
