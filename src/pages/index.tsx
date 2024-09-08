import { Layout } from "@/components/Layout";
import axios from "axios";
import { UsersI } from "@/globals/interfaces";
import { Home as HomeModule } from "@/modules/Home";
import { NEXT_PUBLIC_GITHUB_API } from "@/utils/constants";
import { GetServerSidePropsContext } from "next";
import { NotFound } from "@/components/NotFound";

export default function Home({ users }: UsersI) {
  return (
    <Layout title="Home">
      {users ? <HomeModule users={users} /> : <NotFound searchTerm="users" />}
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const usersQuery = context.query?.users;
  const apiUrl = usersQuery
    ? `${NEXT_PUBLIC_GITHUB_API}/search/users?q=${usersQuery}`
    : `${NEXT_PUBLIC_GITHUB_API}/users`;

  const users = await axios
    .get(apiUrl)
    .then((reponse) => reponse.data)
    .catch((error) => console.log(error));

  if (!users) {
    return {
      props: {
        users: null,
      },
    };
  }

  return {
    props: {
      users: users.items ?? users,
    },
  };
}
