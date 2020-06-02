import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RNCamera } from 'react-native-camera';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;

  width: 90%;
  height: 80%;
  border-radius: 6px;
  position: absolute;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  border-radius: 6px;
`;

export const Content = styled.View`
  flex: 0;
  flex-direction: row;
  justify-content: center;
`;

export const TakePicture = styled.TouchableOpacity`
  align-self: center;
  margin-bottom: 80px;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.3);

  align-items: center;
  justify-content: center;
`;

export const SubmitButton = styled(RectButton)`
  width: 90%;
  height: 45px;
  background: #7159c1;
  border-radius: 6px;
  margin-top: 125%;

  align-items: center;
  justify-content: center;
`;

export const SubmitButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const PicturePreview = styled.View`
  flex: 1;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  border-radius: 6px;
`;

export const Preview = styled.Image`
  height: 100%;
  width: 100%;
  flex: 1;
`;

export const ClosePreview = styled.TouchableOpacity`
  align-self: center;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.5);

  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 20px;
`;
