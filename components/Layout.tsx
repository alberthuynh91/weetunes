import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Roboto } from '@next/font/google';

type Props = {
  children?: ReactNode;
  title?: string;
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const Layout = ({ children, title = 'WeeTunes' }: Props) => (
  <div className={roboto.className}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#ffffff"></meta>
      <meta
        name="description"
        content="WeeTees allows you to browse and search for top trending music"
        key="desc"
      />
    </Head>
    {children}
  </div>
);

export default Layout;
