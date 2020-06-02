/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
  PicturePreview,
  Preview,
  ClosePreview,
} from './styles';

const ConfirmDelivery = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params;

  const [camera, setCamera] = useState(null);
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    async function permissionRequest() {
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    }
    permissionRequest();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      setPicture(data.uri);
    }
  };

  const handleCancel = () => {
    setPicture(null);
  };

  const handleSubmit = async () => {
    try {
      const data = new FormData();

      data.append('file', {
        uri: picture,
        type: 'image/jpeg',
        name: 'signature.jpg',
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
        {picture ? (
          <>
            <PicturePreview>
              <Preview source={{ uri: picture }} />
            </PicturePreview>
            <ClosePreview onPress={handleCancel}>
              <Icon name="file-cancel-outline" size={42} color="#fff" />
            </ClosePreview>
          </>
        ) : (
          <>
            <Camera
              ref={(ref) => setCamera(ref)}
              captureAudio={false}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
            />
            <Content>
              <TakePicture onPress={takePicture}>
                <Icon
                  name="camera"
                  size={42}
                  color="rgba(255, 255, 255, 0.6)"
                />
              </TakePicture>
            </Content>
          </>
        )}
      </Container>

      <SubmitButton onPress={handleSubmit}>
        <SubmitButtonText>Enviar</SubmitButtonText>
      </SubmitButton>
    </HeaderBackgroundColor>
  );
};

ConfirmDelivery.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default ConfirmDelivery;
