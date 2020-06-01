import React from 'react';
import { StatusBar } from 'react-native';

import { Container, Content, Header } from './styles';

const HeaderBackgroundColor = ({ children }) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Container>
        <Header />
        <Content>{children}</Content>
      </Container>
    </>
  );
};

export default HeaderBackgroundColor;
