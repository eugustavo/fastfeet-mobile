/* eslint-disable camelcase */
import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { PermissionsAndroid, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '~/services/api';
import HeaderBackgroundColor from '~/components/HeaderBackgroundColor';

import {
  Container,
  Camera,
  Content,
  TakePicture,
  SubmitButton,
  SubmitButtonText,
} from './styles';

const ConfirmDelivery = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params;

  const [camera, setCamera] = useState(null);
  const [fileName, setFileName] = useState('');
  const [path, setPath] = useState(null);

  useEffect(() => {
    async function permissionRequest() {
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      );
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
    }
    permissionRequest();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);

      setFileName(data.uri.split(/\D/).join(''));
      setPath(data.uri);
    }
  };

  const handleSubmit = async () => {
    console.tron.log(fileName);
    console.tron.log(path);
    try {
      const data = new FormData();

      data.append('file', {
        type: 'image/jpeg',
        name: `${fileName}.jpg`,
        uri: path,
      });

      const pictureResponse = await api.post('files', data);
      const signature_id = pictureResponse.data.id;

      const confirm = await api.put(`/order/${id}/status`, {
        end_date: new Date(),
        signature_id,
      });

      if (confirm.status === 200) {
        Alert.alert('Entrega concluída', 'Entrega realizada com sucesso!');
      } else {
        Alert.alert(
          'Erro',
          'Houve um problema com envio da assinatura! Tente novamente mais tarde.'
        );
      }
    } catch (err) {
      console.tron.log(err);
      Alert.alert(
        'Erro',
        'Houve um problema com envio da assinatura! Tente novamente mais tarde.'
      );
    }
    navigation.navigate('Dashboard');
  };

  return (
    <HeaderBackgroundColor>
      <Container>
        <Camera
          ref={(ref) => setCamera(ref)}
          captureAudio={false}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
        />

        <Content>
          <TakePicture onPress={takePicture}>
            <Icon name="camera" size={42} color="rgba(255, 255, 255, 0.6)" />
          </TakePicture>
        </Content>
      </Container>

      <SubmitButton onPress={handleSubmit}>
        <SubmitButtonText>Enviar</SubmitButtonText>
      </SubmitButton>
    </HeaderBackgroundColor>
  );
};

export default ConfirmDelivery;
