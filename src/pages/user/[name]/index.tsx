import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { UserI } from "@/globals/interfaces";
import { UserDetail } from "@/components/UserDetail";
import { Layout } from "@/components/Layout";
import { NotFound } from "@/components/NotFound";

export default function User({ user }: { user: UserI }) {
  return (
    <Layout title="User">
      {user ? (
        <UserDetail avatarUrl={user.avatar_url} name={user.name} user={user} />
      ) : (
        <NotFound searchTerm="user" />
      )}
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const userName = context.params?.name;

  const user = await axios
    .get(`https://api.github.com/users/${userName}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));

  if (!user) {
    return {
      props: {
        user: null,
      },
    };
  }

  return {
    props: {
      user,
    },
  };
}
