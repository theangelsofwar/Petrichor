import Head from 'next/head';
import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from './AppBar';

interface IProps {
  children;
}


function Layout({ children }: IProps) {
  return (
    <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
      <meta name="theme-color" content="#556cd6"/>
      <title> Petrichor: Summer Rain </title>
      <meta 
        name="description" 
        content="Petrichor"
      />
    </Head>
    <AppBar />
    <br />
    <br />
    <Container> {children} </Container>
    </>
  );
}

export default Layout;