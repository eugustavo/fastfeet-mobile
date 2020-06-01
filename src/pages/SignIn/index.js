import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

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
  const loading = useSelector((state) => state.auth.loading);
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
        {loading ? (
          <ActivityIndicator size={26} color="#fff" />
        ) : (
          <SubmitButtonText> Entrar no Sistema </SubmitButtonText>
        )}
      </SubmitButton>
    </Container>
  );
};

export default SignIn;
