import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signInRequest } from '~/store/module/auth/actions';

import {
  Container,
  Logo,
  InputLogin,
  SubmitButton,
  SubmitButtonText,
} from './styles';

import logo from '~/assets/logo.png';

const SignIn = () => {
  const dispatch = useDispatch();
  const [deliverymanID, setDeliverymanID] = useState('');

  const handleSubmit = async () => {
    dispatch(signInRequest(deliverymanID));
  };

  return (
    <Container>
      <Logo source={logo} />

      <InputLogin
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="numeric"
        placeholder="Informe seu ID de cadastro"
        value={deliverymanID}
        onChangeText={setDeliverymanID}
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
      />
      <SubmitButton onPress={handleSubmit}>
        <SubmitButtonText> Entrar no Sistema </SubmitButtonText>
      </SubmitButton>
    </Container>
  );
};

export default SignIn;
