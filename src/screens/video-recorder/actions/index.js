import React, { useState } from 'react';
import { Block, ImageButton, MotiTouch, Text } from '../../../component';
import { Colors, Images } from '../../../theme';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../../theme/Colors';

const Actions = ({ animate, ...props }) => {
  const navigation = useNavigation();
  const [flashOn, setFlashOn] = useState(false);

  const _onFlashChange = () => {
    props?.onFlashChange();
    setFlashOn(!flashOn);
  };

  const onChat = () => {
    navigation.navigate('Chat');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageButton
        color={Colors.TRANSPARENT}
        onPress={onChat}
        source={Images.icGallery}
        imgStyle={styles.img}
      />
      <Block style={styles.camera}>
        {props?.showText && (
          <Text bold size={24} style={{ paddingBottom: 16 }}>
            {'Hello'}
          </Text>
        )}
        <ImageButton
          onPress={props?.takePhoto}
          source={Images.icCameraCircle}
          imgStyle={styles.icImage}
        />
      </Block>

      <Block row>
        {/* <MotiTouch onPress={() => props.onIsBack()}>
          <Image source={Images.icCamStorie} />
        </MotiTouch> */}
        <ImageButton
          color={Colors.TRANSPARENT}
          onPress={_onFlashChange}
          source={Images.icCamStorie}
          imgStyle={[
            styles.img,
            { tintColor: flashOn ? Colors.RED : Colors.WHITE },
          ]}
        />
      </Block>
    </SafeAreaView>
  );
};

export default Actions;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 0,
    zIndex: 99,
  },
  img: {
    width: 24,
    height: 24,
    tintColor: COLORS.TRANSPARENT,
    opacity: 0,
  },
  camera: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icImage: {
    zIndex: -999,
    width: 60,
    height: 60,
    marginBottom: 16,
    tintColor: '#fff',
  },
});
