import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = ({
  videoURL = null,
  poster,
  isPaused = false,
  shouldLoadingShow = false,
  onNext = () => {},
  onPrevious = () => {},
  isNextEnabled = false,
  isPreviousEnabled = false,
  isPortrait,
  onScreenRotation = () => {},
  style = {},
  ...props
}) => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [lastSeekTime, setLastSeekTime] = useState(0);

  const onLoadStart = () => {
    if (shouldLoadingShow) setLoading(true);
  };

  const onLoad = data => {
    setLoading(false);
    setDuration(data.duration);

    // Seek to saved position after quality switch
    if (lastSeekTime > 0) {
      videoRef.current?.seek(lastSeekTime);
      setLastSeekTime(0);
    }
  };

  const onProgress = ({ currentTime }) => {
    setCurrentTime(currentTime);
  };

  return (
    <View style={[styles.container, props.style]}>
      <Video
        ref={videoRef}
        source={require('./DummyVideo.mp4')}
        style={StyleSheet.absoluteFill}
        resizeMode="none"
        paused={!isPaused}
        onLoadStart={onLoadStart}
        onLoad={onLoad}
        onProgress={onProgress}
        onBuffer={({ isBuffering }) =>
          shouldLoadingShow && setLoading(isBuffering)
        }
        poster={Platform.OS === 'android' ? poster : undefined}
        posterResizeMode="cover"
        bufferConfig={{
          minBufferMs: 15000,
          maxBufferMs: 50000,
          bufferForPlaybackMs: 2500,
          bufferForPlaybackAfterRebufferMs: 5000,
        }}
        useExoPlayer={Platform.OS === 'android'}
        muted={false}
        repeat
        ignoreSilentSwitch="ignore"
        playInBackground={false}
        playWhenInactive={false}
        progressUpdateInterval={250}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VideoPlayer;
