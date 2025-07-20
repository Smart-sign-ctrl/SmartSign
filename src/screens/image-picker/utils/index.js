import {Alert, Linking} from 'react-native';
import {Camera} from 'react-native-vision-camera';
import ImageCropPicker from 'react-native-image-crop-picker';

const openSetting = () => {
  Linking.openSettings().catch(() => {
    Alert.alert('Unable to open settings');
  });
};

const hasCameraPermission = async () => {
  const cameraPermission = await Camera.getCameraPermissionStatus();
  if (cameraPermission == 'authorized' || 'granted') {
    return true;
  } else {
    getCameraPermision();
  }
};

const hasMicrophonePermission = async () => {
  const microPhonePermision = await Camera.getMicrophonePermissionStatus();
  if (microPhonePermision == 'authorized') {
    return true;
  } else {
    getMicroPhonePermision();
  }
};

const getCameraPermision = async () => {
  const newCameraPermission = await Camera.requestCameraPermission();
  if (newCameraPermission == 'denied') {
    openSetting();
    return false;
  }
  return true;
};

const getMicroPhonePermision = async () => {
  const microPhonePermision = await Camera.requestMicrophonePermission();

  if (microPhonePermision == 'denied') {
    openSetting();
    return false;
  }

  return true;
};

const takePhoto = async (cameraRef, isFlashOn = false) => {
  const auth = await hasCameraPermission();
  if (auth) {
    const photo = await cameraRef.current.takePhoto({
      flash: isFlashOn ? 'on' : 'off',
    });
    return photo;
  }
};

const takeSnapshot = async cameraRef => {
  const photo = await cameraRef.current.takeSnapshot({
    quality: 85,
    skipMetadata: true,
  });
  return photo;
};

const stopVideo = async cameraRef => {
  await cameraRef.current?.stopRecording();
};

const openGallery = async () => {
  const images = ImageCropPicker.openPicker({
    mediaType: 'photo',
  });
  return images;
};

const takeVideo = async (
  cameraRef,
  isFlashOn = false,
  onRecordingFinished,
  onRecordingError,
) => {
  cameraRef.current?.startRecording({
    flash: isFlashOn ? 'on' : 'off',
    onRecordingFinished,
    onRecordingError,
  });
};

export {
  takePhoto,
  takeSnapshot,
  hasCameraPermission,
  getCameraPermision,
  takeVideo,
  stopVideo,
  hasMicrophonePermission,
  getMicroPhonePermision,
  openGallery,
};
