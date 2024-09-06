import Head from "next/head";

export default function User() {
  return (
    <>
      <Head>
        <title>Github App</title>
        <meta
          name="description"
          content="Application that handles github users"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>User</h2>
    </>
  );
}
