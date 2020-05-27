import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 20px;
  background: #7159c1;
`;

export const Logo = styled.Image``;

export const InputLogin = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  width: 100%;
  height: 45px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 20px;
  padding: 0 10px;
`;

export const SubmitButton = styled(RectButton)`
  height: 45px;
  width: 100%;
  background: #82bf18;
  border-radius: 4px;
  margin-top: 10px;

  align-items: center;
  justify-content: center;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
