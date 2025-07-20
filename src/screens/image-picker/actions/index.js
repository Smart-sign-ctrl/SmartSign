import {Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Block, ImageButton, MotiTouch} from '../../../component';
import {Colors, Images} from '../../../theme';

const Actions = ({animate, ...props}) => {
  const [flashOn, setFlashOn] = useState(false);

  const _onFlashChange = () => {
    props?.onFlashChange();
    setFlashOn(!flashOn);
  };

  return (
    <Block style={styles.container}>
      <ImageButton
        onPress={props?.onPickFromGallery}
        source={Images.icGallery}
        imgStyle={styles.img}
      />
      <Block style={styles.camera}>
        <ImageButton
          onPress={props?.takePhoto}
          source={Images.icCameraCircle}
          imgStyle={styles.icImage}
        />
      </Block>

      <Block row>
        <MotiTouch onPress={() => props.onIsBack()}>
          <Image source={Images.icCamStorie} />
        </MotiTouch>
        <ImageButton
          color={Colors.TRANSPARENT}
          onPress={_onFlashChange}
          source={Images.icFlash}
          imgStyle={[
            styles.img,
            {tintColor: flashOn ? Colors.RED : Colors.WHITE},
          ]}
          style={{right: 40, bottom: 0, top: 0, position: 'absolute'}}
        />
      </Block>
    </Block>
  );
};

export default Actions;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  img: {
    width: 24,
    height: 24,
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
