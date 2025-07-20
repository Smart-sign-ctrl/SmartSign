import { useAppState } from '@react-native-community/hooks';
import { useIsFocused } from '@react-navigation/native';
import React, { forwardRef, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import { Block } from '../../../component';

const CameraView = forwardRef(({ torch = false, isBack = true }, ref) => {
  const [_isBack, setIsBack] = useState(false);
  const preset = 'hd-1280x720';
  const device = useCameraDevice(_isBack ? 'back' : 'front');

  const isFocused = useIsFocused();
  const appState = useAppState();
  const isActive = appState === 'active';

  useEffect(() => {
    setIsBack(isBack);
  }, [isBack]);

  return (
    <>
      {device &&
        <Camera
          ref={ref}
          preset={preset}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isActive}
          photo={true}
          torch={torch ? 'on' : 'off'}
          enableZoomGesture={true}
        />
      }
      <Block pointerEvents='none' flex gradient style={StyleSheet.absoluteFill} />
    </>
  );
});

export default CameraView;
