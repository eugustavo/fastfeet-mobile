import React from 'react';
import PropTypes from 'prop-types';
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

HeaderBackgroundColor.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(), PropTypes.object])
    .isRequired,
};

export default HeaderBackgroundColor;
