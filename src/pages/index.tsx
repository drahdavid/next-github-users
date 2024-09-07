import localFont from "next/font/local";
import { Layout } from "@/components/Layout";
import axios from "axios";
import { UsersI } from "@/globals/interfaces";
import { users } from "@/mocks";
import { UserCard } from "@/components/UserCard";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home({ users }: UsersI) {
  return (
    <>
      <Layout title="Home">
        {users.map((user) => (
          <div key={user.id}>
            <UserCard loginName={user.login} avatar_url={user.avatar_url} />
          </div>
        ))}
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
