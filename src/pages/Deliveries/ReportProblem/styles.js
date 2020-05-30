import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView``;

export const CardDescriptionProblem = styled.View`
  width: 90%;
  height: 350px;

  margin-top: 80px;
  border-radius: 6px;
  background: #fff;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const DescriptionProblem = styled.TextInput`
  padding: 10px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SubmitButton = styled(RectButton)`
  width: 90%;
  height: 45px;
  margin-top: 10px;
  border-radius: 6px;
  background: #7159c1;

  align-items: center;
  justify-content: center;
`;

export const SubmitButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
