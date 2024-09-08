import { Layout } from "@/components/Layout";
import axios from "axios";
import { UsersI } from "@/globals/interfaces";
import { users } from "@/mocks";
import { Home as HomeModule } from "@/modules/Home";

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
  //   .get(`${process.env.GITHUB_API}/users`)
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
