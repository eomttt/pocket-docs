import Head from 'next/head';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  favicon?: string;
}

export const Layout = ({
  children,
  title,
  description,
  image,
  favicon,
}: LayoutProps) => (
  <>
    <Head>
      <title>Poke Docs</title>
      <link rel="icon" href={favicon || '/favicon.ico'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
    {children}
  </>
);
