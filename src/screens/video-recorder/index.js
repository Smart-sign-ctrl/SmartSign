import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text } from '../../component';
import VideoPlayer from '../../component/video-player';
import Actions from './actions';

const VideoRecorder = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [showText, setShowText] = useState(false);

  const takePhoto = () => {
    setIsPlay(true);
  };

  useEffect(() => {
    if (isPlay) {
      const timeout = setTimeout(() => {
        setShowText(true);
      }, 3000);

      return () => clearTimeout(timeout); // cleanup if unmounted early
    }
  }, [isPlay]);

  const onEnd = () => {
    setShowText(false);
    setIsPlay(false);
  };

  return (
    <Block style={styles.container}>
      <VideoPlayer onEnd={onEnd} resizeMode="cover" isPaused={isPlay} />
      <Actions takePhoto={takePhoto} showText={showText} />
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default VideoRecorder;
