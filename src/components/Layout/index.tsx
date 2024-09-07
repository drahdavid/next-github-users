import Head from "next/head";
import React, { ReactNode } from "react";

export const Layout = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => (
  <>
    <Head>
      <title>{`Github Api - ${title}`}</title>
      <meta
        name="description"
        content="Application that handles github users"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/x-icon"
        href="/favicon-96x96.png"
        sizes="any"
      />
    </Head>
    <>{children}</>
  </>
);
