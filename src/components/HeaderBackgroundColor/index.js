import React from 'react';
import { StatusBar } from 'react-native';
import headerbg from '~/assets/headerbg.png';

import { Container } from './styles';

const HeaderBackgroundColor = ({ children }) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Container source={headerbg}>{children}</Container>
    </>
  );
};

export default HeaderBackgroundColor;
