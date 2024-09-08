import { Layout } from "@/components/Layout";
import axios from "axios";
import { UsersI } from "@/globals/interfaces";
import { users } from "@/mocks";
import { Home as HomeModule } from "@/modules/Home";
import { NEXT_PUBLIC_GITHUB_API } from "@/utils/constants";

export default function Home({ users }: UsersI) {
  return (
    <>
      <Layout title="Home">
        <HomeModule users={users} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  // const users = await axios
  //   .get(`${NEXT_PUBLIC_GITHUB_API}/users`)
  //   .then((reponse) => reponse.data)
  //   .catch((error) => console.log(error));

  if (!users) {
    return {
      props: {
        users: null,
      },
    };
  }

  return {
    props: {
      users,
    },
  };
}
