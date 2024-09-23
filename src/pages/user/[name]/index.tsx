import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { UserI } from "@/globals/interfaces";
import { Layout } from "@/components/Layout";
import { Error } from "@/components/Error";
import { User as UserModule } from "@/modules/User";
import { NEXT_PUBLIC_GITHUB_API } from "@/utils/constants";

export default function User({ user }: { user: UserI }) {
  return (
    <Layout title="User">
      {user ? <UserModule user={user} /> : <Error searchTerm="user" />}
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const userName = context.params?.name;

  const user = await axios
    .get(`${NEXT_PUBLIC_GITHUB_API}/users/${userName}`)
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
