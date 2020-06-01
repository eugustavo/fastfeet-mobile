import React from 'react';

import {
  Container,
  Content,
  Title,
  Description,
  ToggleButton,
  ToggleButtonText,
} from './styles';

const ProblemModal = ({ descriptionProblem, toggleModal }) => {
  return (
    <Container>
      <Content>
        <Title> Informações sobre o Problema </Title>
        <Description>{descriptionProblem}</Description>
      </Content>
      <ToggleButton onPress={toggleModal}>
        <ToggleButtonText> Fechar </ToggleButtonText>
      </ToggleButton>
    </Container>
  );
};

export default ProblemModal;
