import React, { useEffect, useRef } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HeaderBackgroundColor from '~/components/HeaderBackgroundColor';

// import { Container } from './styles';

const ConfirmDelivery = () => {
  let cameraRef = useRef();

  useEffect(() => {
    async function permissionRequest() {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.tron.log('You can use the camera');
      } else {
        console.tron.log('Camera permission denied');
      }
    }
    permissionRequest();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.7, base64: true };
      const data = await cameraRef.takePictureAsync(options);
      console.tron.log(data.uri);
    }
  };

  return (
    <HeaderBackgroundColor>
      <View style={styles.container}>
        <RNCamera
          ref={(ref) => {
            cameraRef = ref;
          }}
          captureAudio={false}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View
          style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}
        >
          <TouchableOpacity onPress={takePicture} style={styles.capture}>
            <Icon name="camera" size={42} color="rgba(255, 255, 255, 0.6)" />
          </TouchableOpacity>
        </View>
      </View>
    </HeaderBackgroundColor>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

    width: 350,
    height: 450,
    borderRadius: 6,
    marginTop: 100,
    position: 'absolute',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 75,
    borderRadius: 6,
  },
  capture: {
    alignSelf: 'center',
    margin: 20,
  },
});

export default ConfirmDelivery;
