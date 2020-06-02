import React from 'react';
import PropTypes from 'prop-types';

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

ProblemModal.propTypes = {
  descriptionProblem: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ProblemModal;
