import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { UserI } from "@/globals/interfaces";
import { Layout } from "@/components/Layout";
import { NotFound } from "@/components/NotFound";
import { user } from "@/mocks";
import { User as UserModule } from "@/modules/User";

export default function User({ user }: { user: UserI }) {
  return (
    <Layout title="User">
      {user ? (
        <UserModule avatarUrl={user.avatar_url} name={user.name} user={user} />
      ) : (
        <NotFound searchTerm="user" />
      )}
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const userName = context.params?.name;

  // const user = await axios
  //   .get(`${process.env.GITHUB_API}/users/${userName}`)
  //   .then((response) => response.data)
  //   .catch((error) => console.log(error));

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
